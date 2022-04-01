

const rootReducer = (state,action)=>{

    if(action.type === 'GET_INVOICES'){
        return state;
    }

    if(action.type === 'SET_INVOICES'){
            const isExist = state.findIndex(each=>each.number === action.payload.number)
            console.log('isExist',isExist)

            if(isExist === -1){//add
            return [...state,action.payload]
            }
            else{
            state.splice(isExist,1,action.payload);
            return state;
            }
    }

    return state;
}

export default rootReducer;
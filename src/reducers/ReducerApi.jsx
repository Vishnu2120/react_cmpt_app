
import React, { useEffect, useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import { Button } from "react-bootstrap";  
import axios from 'axios' 
import { Link } from 'react-router-dom';
import PopUp from '../Modals/PopUp';
import AddPopUp from '../Modals/AddPopUp';
import { propTypes } from 'react-bootstrap/esm/Image';
const initialState = [];
  
const reduce = (state, action) => {
     

    console.log("action",action.type)  
    console.log("payload",action.payload)  
    switch (action.type) {  
        case 'OnSuccess':  
            return [...action.payload]
            
        case 'OnFailure':  
            return [action.payload]
        case 'DEL_ITEM':
            return [...action.payload]
        case 'EDIT_ITEM':
            return [...action.payload]
        default:  
            return state  
            
    }  
}  

const ReducerApi =()=>{
    /*popup*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showadd, addsetshow] = useState(false);
    const addhandleClose = () => addsetshow(false);
    const addhandleShow = () => addsetshow(true);



    const [state, dispatch] = useReducer(reduce, initialState)  
    const [popupData,setPopupData] = useState("");
    const [addData,addPopupData] = useState("")
    const RefreshApi = () => {
        const Fetched = async () => {
          const response = await axios.get("http://localhost:3006/users");
          dispatch(response.data);
          console.log("Delete", response.data);
        };
        Fetched();
      };
    const deleteHandler = (id) => {
        //direct dispath method
       const del_data =  state.filter(data => data.id !== id) 
       console.log(del_data)
       dispatch({ type: "DEL_ITEM", payload: del_data });

    //     (async()=>{
    //     await axios.delete(`http://localhost:3006/users/${id}`)
    //     .then((res)=>{
    //       if(res.status===200){
    //         console.log("ok",res)
    //       }
    //     })
    //     .catch(error => {  
    //         dispatch({ type: 'OnFailure' })  
    //     })
    // })();
    // setTimeout(()=>{
    //    RefreshApi()
    // },1000)

    };
    const editHandler = (data) => {
        console.log("addtest: ", data)
        if(data !== undefined){
            console.log("if: ", data)
        setPopupData(data)
        handleShow();  
        }
        else{
            console.log("else: ", data)
           
            
        }
    };
    const addHandler = () => {
        addhandleShow()
       // addPopupData();
    }
    const pushData =(data) => {
        console.log("pushData",data);
        addhandleClose();
        return state.push(data)
        
    }
    const updateData = (data) => {
        console.log("update_data",data);
        handleClose();
        const edit_data = state.findIndex(each=>each.id === data.id)
        console.log("edit_data",edit_data);
        state.splice(edit_data,1,data);
        return state;
    }

        useEffect(() => {  
        axios.get('http://localhost:3006/users')  
            .then(response => {  
                dispatch({ type: 'OnSuccess', payload: response.data})  
            })  
            .catch(error => {  
                dispatch({ type: 'OnFailure' })  
            })  
    }, [])  
  
    return(<><h1>UseReducer - ApiCall </h1>
    <div><Button onClick={()=>addHandler()}> ADD</Button></div>
            <div> 
            <Container className="mt-3">
                <Table striped bordered hover variant="light">
                    
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Address</th>
                            <th>Website</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((each,index)=>{
                            return(<tr key={index}>
                                {/* <th scope="row">{each.id}</th> */}
                                {/* <td>{each.id}</td> */}
                                <td>{each.name}</td>
                                <td>{each.address}</td>
                                <td>{each.website}</td>
                                <td><Button Button onClick={()=>editHandler(each)}>Edit</Button>{""}
                                <Button onClick={()=>deleteHandler(each.id)} >Delete</Button></td>
                                <PopUp open={show} Close={()=>handleClose()}  popupData={popupData} updateChanges={(data)=>updateData(data)}/>
                                <AddPopUp open={showadd} Close={()=>addhandleClose()} addData={addData} addChanges={(data)=>pushData(data)}/>
                            </tr>)
                        })}
                        
                    </tbody>

                    
                </Table>
            </Container>

            
           
           {/* {state.loading ? 'Loading!! Please wait' : state.user.email}  
           {state.error ? state.error : null}   */}
       </div> 
    </>)
}
export default ReducerApi;
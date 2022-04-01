import React, { useEffect, useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import { Button } from "react-bootstrap";  
import axios from 'axios' 

import { Link } from 'react-router-dom';
import PopUp from '../Modals/PopUp';
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
            return
        default:  
            return state  
            
    }  
}  

const Demo=()=>{
    /*popup*/
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [state, dispatch] = useReducer(reduce, initialState)  
    const [popupData,setPopupData] = useState("")
    const deleteHandler = (id) => {
      const x =  state.filter(data=> data.number !== id) 
      console.log(x)
        dispatch({ type: "DEL_ITEM", payload: x });
    };
    const editHandler =(data) => {
        console.log(data);
        setPopupData(data)
        handleShow();  
       //const editdata = state.find(data=> data.number !== id)  }
    }
    const updateData = (data) =>{
            console.log(data);
    }

        useEffect(() => {  
        axios.get('http://localhost:3006/tables')  
            .then(response => {  
                dispatch({ type: 'OnSuccess', payload: response.data})  
            })  
            .catch(error => {  
               // dispatch({ type: 'OnFailure' })  
            })  
    }, [])  
  
    return(<><h1>welcome to useReducer</h1>
            <div> 
            <Container className="mt-3">
                <Table striped bordered hover variant="light">
                    
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((each,index)=>{
                            return(<tr key={index}>
                                <th scope="row">{each.number}</th>
                                {/* <td>{each.id}</td> */}
                                <td>{each.name}</td>
                                <td>{each.address}</td>
                                <td>{each.website}</td>
                                <td><Button Button onClick={()=>editHandler(each)}>Edit</Button></td>
                                <td><Button onClick={()=>deleteHandler(each.number)} >Delete</Button></td>
                                <PopUp open={show} Close={()=>handleClose()} popupData={popupData} updateChanges={(data)=>updateData(data)}/>
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
export default Demo;
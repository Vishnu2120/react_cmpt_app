import { useEffect, useState,useReducer } from "react";
import { NavLink,Link,Outlet,useSearchParams,} from "react-router-dom";
// import { getInvoices,deleteInvoice } from "../data";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import rootReducer from "./reducers/rootReducer";
  export default function Invoices() {
    const [invoices,setInvoices]=useState([])
    const [reducerInvoice,dispatch]=useReducer(rootReducer,[]);

    const getData = ()=>{
      dispatch({type:'GET_INVOICES'})
      console.log('reducerInvoice-Inv',reducerInvoice)
      //  invoice = reducerInvoice;
      setInvoices(reducerInvoice)
    }

    useEffect(()=>{
      getData();
    },[])

  
    // console.log('-->',invoices)
    const deleteHandler = (index)=>{
      console.log('index-->',index)
      dispatch({type:'DELETE_INVOICES',payload:index})
      setInvoices(reducerInvoice)
    }
    //  let [searchParams, setSearchParams] = useSearchParams();
    return (
      <div style={{ display: "flex" }}>
        
        <Container className="mt-3">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Website</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {invoices && invoices.map((each,index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{each.name}</td>
                <td>{each.address}</td>
                <td>{each.website}</td>
                <td><Link to={`/expenses/${each.number}`} ><Button>Edit</Button></Link></td>
                <td><Button onClick={()=>deleteHandler(index)} >Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
        <Outlet />
      </div>
    );
  }
  
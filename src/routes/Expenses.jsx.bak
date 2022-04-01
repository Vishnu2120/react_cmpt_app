import { Button } from "react-bootstrap";
import React, { useEffect,useReducer,useState } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import { getInvoices,setInvoices } from "../data";
import {Link} from "react-router-dom"
import '../App.css'; 

function Expenses() {
 
  const [nameInput, setName] = useState('');
  const [addrInput, setAddress] = useState('');
  const [webaddrInput, setWeb] = useState('');
  console.log("test-->", nameInput,addrInput,webaddrInput);
  
  let {invoiceId} = useParams();
  console.log('params-->',invoiceId)
  let invoice;
  if(invoiceId !==':invoiceId'){
    dispatch({type:'GET_INVOICES'})
    let invoices = reducerInvoice;
    invoice = invoices.find(inv=> inv.number === invoiceId)
  }
  useEffect(()=>{
    setAddress(invoice?.address);
    setName(invoice?.name);
    setWeb(invoice?.website);
  },[invoice])

  const onOnclickHandler=()=>{
    // console.log("nubetset  ===>> ", invoiceId);
    // console.log('typeof invoiceId',typeof(invoiceId))

      if(invoiceId !==':invoiceId'){ //edit
       
        let Istate = {
          name : nameInput,
          address : addrInput,
          website: webaddrInput,
          number:invoiceId
        }
        // setInvoices(state)
        dispatch({type:'SET_INVOICES',payload:Istate})
      }
      else{ //add
        let Istate = {
          name : nameInput,
          address : addrInput,
          website: webaddrInput,
          number:v4()
      }
      setInvoices(state);
      }
  }
    return (
      <main style={{ padding: "1rem 0" }}>
        {/* <h2 className="text">Add Data</h2> */}
         <div className="container">
           
           <div><label className="label-json">Name:</label><input onChange={e => setName(e.target.value)} value={nameInput}  className="Input-json" type="text"></input></div>
           <div className="dummy"></div>
           <div><label className="label-json">Address:</label><input  onChange={e=> setAddress(e.target.value)} value={addrInput} className="Input-json" type="text"></input></div>
           <div className="dummy"></div>
           <div><label className="label-json">Website:</label><input  onChange={e=>setWeb(e.target.value)} value={webaddrInput} className="Input-json" type="text"></input></div>
           <div className="dummy"></div>
           <div><label className="label-json"></label><Link to='/invoices'><Button onClick={()=>onOnclickHandler()}>Submit</Button></Link></div>
         </div>

      </main>
    );
  }
  export default Expenses;
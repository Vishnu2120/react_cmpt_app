import { Modal,Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';


function PopUp(props) {
    console.log("testForprops",props)
    // const [data, setData] = useState({});
    const [nameInput, setName] = useState('');
    const [addrInput, setAddress] = useState('');
    const [webaddrInput, setWeb] = useState('');

    useEffect(()=>{
        if(props.popupData !== undefined){
          console.log("(props.popupData   ",props.popupData.name);
           // setData(props.popupData)
           setName(props.popupData.name);
           setAddress(props.popupData.address);
           setWeb(props.popupData.website);
        }
    },[props.popupData])

  
    const save =() => {
     // alert("save")
      let data = {
        name : nameInput,
        address : addrInput,
        website: webaddrInput,
        id: props.popupData.id,
      }
      console.log("datasave ",data)
       props.updateChanges(data)
       
    }
    return (
      <>
        <Modal show={props.open} onHide={props.close}>
          <Modal.Header >
            <Modal.Title>Edit data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="container">
           
           <div><label className="label-json">Name:</label><input onChange={e => setName(e.target.value)}  className="Input-json" type="text" value={nameInput}></input></div>
           <div className="dummy"></div>
           <div><label className="label-json">Address:</label><input onChange={e => setAddress(e.target.value)} className="Input-json" type="text" value={addrInput}></input></div>
           <div className="dummy"></div>
           <div><label className="label-json">Website:</label><input  onChange={e => setWeb(e.target.value)} className="Input-json" type="text" value={webaddrInput}></input></div>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.Close}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>save()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default PopUp;

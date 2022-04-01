import { Modal,Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { v4 } from "uuid";
function AddPopUp(props) {

    const [nameInput, setName] = useState('');
    const [addrInput, setAddress] = useState('');
    const [webaddrInput, setWeb] = useState('');

    const save =() => {
        let data = {
          name : nameInput,
          address : addrInput,
          website: webaddrInput,
          id :v4()
        }
        console.log("datasave ",data)
         props.addChanges(data)
      }
return (<>
<Modal show={props.open} onHide={props.close}>
          <Modal.Header >
            <Modal.Title>Add data</Modal.Title>
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
        </>)
}
export default AddPopUp;
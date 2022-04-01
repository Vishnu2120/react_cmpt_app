import {  userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <div className="container">
      <div className="row">
        <h1>ADD, EDIT, DELETE - REDUX</h1>
      </div>
      <div className="row">
        <div className="two columns">
          {/* <button onClick={() => dispatch(fetchUsers())} className="button-primary">Show users</button> */}
        </div>
        <div className="two columns">
          <Link to="/add-user">
            <Button class="btn btn-primary">Add user</Button>
          </Link>
        </div>
      </div>
      <div className="row">
        { loading ? ("Loading...") : (
            <Table striped bordered hover variant="light" >        
            
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ id, name, email }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <Button class="btn btn-danger" onClick={() => handleDelete(id)}>Delete</Button>
                      <Link to={`/edit-user/${id}`}><Button class="btn btn-warning">Edit</Button></Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          {/* </table> */}
          </Table>
        )}
      </div>
    </div>
  );
}
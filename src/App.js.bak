import {Outlet,Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>React Router</h1>
     <nav  style={{borderBottom:"solid 1px",paddingBottom:"1rem"}}>
      <Link to="/invoices">List</Link> | {""}
      <Link to="/expenses/:invoiceId">Add </Link> | {""}
      <Link to="/reducerapi">ReducerApi </Link> | {""}
      <Link to="/reduxapi">Redux</Link>
     </nav>
     
     <Outlet/>
    </div>
  );
}

export default App;

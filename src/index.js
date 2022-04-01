import { render } from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import ReducerApi from "./reducers/ReducerApi";
import ReduxApi from "./Redux/ReduxApi";

const rootElement = document.getElementById("root");
render(
  
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} /> 
    <Route path="expenses/:invoiceId" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />}/>
    <Route path="reducerapi" element={<ReducerApi/>}/>
    <Route path="reduxapi" element={<ReduxApi/>}/>
  </Route>
  <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    ></Route>
</Routes>
  </BrowserRouter>,
  rootElement
);
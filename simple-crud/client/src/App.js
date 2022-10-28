import "./App.css";
import Employee from "./components/Employee";
import Customer from "./components/Customer";
import Home from "./components/Home";
import Order from "./components/Order";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/employee' element={<Employee/>}></Route>
        <Route path='/customer' element={<Customer/>}></Route>
		  <Route path='/order' element={<Order/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

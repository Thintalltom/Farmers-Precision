import { useState } from "react";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import QueryBox from "./QueryBox";
import Home from './Home'


function App() {
  
const [logpassword, setLogPassword] = useState("");
const [logemail, setLogEmail] = useState("");
  return(
  <Routes>
    <Route path='/' element={<Home />} />  
    <Route path='/signup' element={<Signup />} />  
    <Route path='/login' element={<Login logpassword={logpassword} setLogPassword={setLogPassword} logemail={logemail} setLogEmail={setLogEmail}  />} />  
    <Route path='/query' element={<QueryBox logemail={logemail} />} />  
  </Routes>
  )
}

export default App;

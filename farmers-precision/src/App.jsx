import { useState } from "react";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import QueryBox from "./QueryBox";
import Home from './Home'



function App() {
  return(
  <Routes>
    <Route path='/' element={<Home />} />  
    <Route path='/signup' element={<Signup />} />  
    <Route path='/login' element={<Login />} />  
    <Route path='/query' element={<QueryBox />} />  
  </Routes>
  )
}

export default App;

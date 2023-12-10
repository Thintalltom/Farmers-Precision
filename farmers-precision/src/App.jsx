import { useState } from "react";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import QueryBox from "./QueryBox";
import Home from './Home'
import Answer from './Answer';
import Navbar from "./Navbar";

function App() {
  

  return(
    <div className='h-[70rem] bg-[#1e1e1e]'>
      <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />  
    <Route path='/signup' element={<Signup />} />  
    <Route path='/query' element={<QueryBox />} />
    <Route path='/answer' element={<Answer  />} />
  </Routes>
  </div>
  )
}

export default App;

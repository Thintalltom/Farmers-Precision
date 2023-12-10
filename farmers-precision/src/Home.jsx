import React, { useState } from "react";
import Hero from "./Hero";
import Features from "./Features";
import Works from "./Works";
import Contact from './Contact'
import Team from "./Team";

const Home = () => {
  return (
   
      <div  className='h-[63rem] bg-[#1E1E1E]'>
        {/*Banner Section*/}
       <Hero />

        {/*Features Section*/}
       <Features />

        {/*Works Section*/}
      <Works />


        {/*About Section*/}
      <Team />

        {/*Footer Section*/}
        <Contact />
      </div>
  );
};

export default Home;

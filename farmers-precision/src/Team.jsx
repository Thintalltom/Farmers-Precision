import React from "react";
import ayomide from './assets/ayomide.png';
import sheddy from './assets/sheddy.png';
import tomide from './assets/tomide.png';
import './Team.css'
const Team = () => {
  return (
    <div name='about' className="bg-[#1e1e1e] min-h-[30rem] ">
      <p className="text-center text-white font-bold text-2xl mt-[-2px] ">About Us</p>

      <div className="TeamBox flex justify-around items-center mt-9">
        <div className=" w-[300px] h-[350px] ">
         <img src={sheddy} className='mx-auto' />
          <p className="text-white font-bold text-center">Adeyemi Shadrack</p>
          <p className="text-white font-thin text-center">
            Data Scientist/ ML Developer
          </p>
        </div>
        <div className=" w-[300px] h-[350px]">
        <img src={ayomide} className='mx-auto' />
          <p className="text-white font-bold text-center">Ayomide Taiwo</p>
          <p className="text-white font-thin text-center">Backend Developer</p>
        </div>
        <div className=" w-[300px] h-[350px]">
        <img src={tomide} className='mx-auto' />
          <p className="text-white font-bold text-center">Adeyanju Tomide</p>
          <p className="text-white font-thin text-center">Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Team;

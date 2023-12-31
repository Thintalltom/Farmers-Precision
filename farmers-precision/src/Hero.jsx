import React from "react";
import "./Hero.css";
import crop from "./assets/crop.png";
import crop2 from "./assets/crop5.png";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import { HiArrowUpRight } from "react-icons/hi2";
const Hero = () => {
  return (
    <div className=" heroPage ">
      <div className="Heroflex mt-[70px]">
        <div className=" p-4 headerBox flex flex-col">
          <p className="text-white headerText1 ">
            {" "}
            Welcome to <br /> Agrisage - <br /> where
            <span className="bg-green-900 rounded-[10px] p-[5px] h-[20px] ">Precision</span> <br /> meets
            agriculture ! <br />{" "}
          </p>
          <p className="text-white headerText">
            Redefining agriculture through the power of prescion AI. Step into a
            realm where technology and nature seamlessly converge to optimize
            your farm's potential.
          </p>
          <div className=" mt-4 flex  gap-[50px] p-4">
            <Link to='/query'>
            <button className="text-white bg-green-800 flex gap-[10px] ml-[-12px] justify-center items-center p-[8px] rounded-[5px] btn1 lg:w-[120px]">
              Start Now <span><HiArrowUpRight /></span> 
            </button>
            </Link>
            <LinkRoll to='work'>
            <button className="text-white bg-[#1E1E1E] btn2 border-[0.5px] p-[8px] rounded-[5px] w-[150px]">
              How it works?
            </button>
            </LinkRoll>
          </div>
        </div>

        <div className=" relative flexItems  ">
          <img src={crop} className='w-[500px]' />
          <div className=" bg-green-900 h-[300px] cropBox rounded-[20px]  flex justify-center bottom-[0] items-center absolute  ">
            <img src={crop2} className='cropImg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
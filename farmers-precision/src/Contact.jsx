import React from "react";
import crop3 from "./assets/crop3.png";
import Agrisage from "./assets/Agrisage.png";
import { HiArrowUpRight} from "react-icons/hi2";
import "./Works.css";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
const Contact = () => {

  return (
    <div name='contact' className="contactDiv bg-[#1e1e1e] h-[60rem] ">
      <p className="text-center text-white text-2xl mt-[-5px] p-4 font-bold"> Contact us</p>

      <img src={crop3} className="mx-auto mt-9" />
      <div className="flex justify-center items-center flex-col mt-[100px] text-white">
        <a href="mailto:adeyemishedracktimi@gmail.com">
          adeyemishedracktimi@gmail.com
        </a>
        <a href="mailto:adeyanjutomide@gmail.com">adeyanjutomide@gmail.com</a>
        <a href="mailto:ayomidet905@gmail.com">ayomidet905@gmail.com</a>
        <Link to='/query'>
        <button className="border-[1px] border-green-500 text-green-500 rounded-[10px] flex gap-[10px] justify-center items-center  p-[10px] mx-auto mt-[100px] w-[150px]">
          Start Now <span><HiArrowUpRight /></span> 
        </button>
        </Link>
       

      </div>
      <img src={Agrisage} className=" mx-auto mt-[50px]  " />
    </div>
  );
};

export default Contact;

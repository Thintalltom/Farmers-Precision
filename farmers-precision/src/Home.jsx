import React, { useState } from "react";
import "./Home.css";
import login from './assets/login.png'
const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="home1">
      <div className="bg-green-700 h-[70vh]">
        <div className="flex justify-around text-white p-4 home2 ">
          <p> Agrisage</p>
          <div className="flex gap-9 text-white">
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              Home
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              Features
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              How it Works
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              Benefit
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              About Us
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              Contact
            </p>
          </div>
        </div>
        <div>
          <div className="header text-white shadow-md lg:hidden">
            <p> Agrisage</p>

            <div onClick={handleClick}>{open ? <p>close</p> : <p>open</p>}</div>
          </div>
          <div
            className={
              !open ? "header2 shadow-sm lg:hidden" : "header3 lg:hidden"
            }
          >
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              Home
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              Features
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              How it Works
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              Benefit
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              About Us
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              Contact
            </p>
          </div>
        </div>
        <div>
          <div className="flex  flex-col h-[40vh]  justify-center items-center align-center">
            <p className=" text-white text-4xl text-extrabold">
              Welcome to Agrisage – Where Precision Meets Agriculture! 🌾
            </p>
            <p className="text-center text-white text-extrathin mt-4 w-[700px]">
              At AgriSage, we're redefining agriculture through the power of
              precision AI. Step into a realm where technology and nature
              seamlessly converge to optimize your farm's potential.
            </p>
          </div>
        </div>



        <div className="mt-[100px]">
          <p className="text-center text-2xl  text-slate-200">Key Features</p>
          <div className="flex justify-around mt-4">
            <div className="bg-white p-4 w-[300px] text-center h-[200px] rounded-lg shadow-lg">
              <p>Empowering Farmers</p>
              <p className="text-sm text-slate-600 mt-[25px]">
                Join a community of forward-thinking farmers embracing the
                future of agriculture. Access ongoing support, training, and
                updates to stay at the forefront of ag-tech.
              </p>
            </div>
            <div className="bg-white p-4 w-[300px] text-center h-[200px] rounded-lg shadow-lg">
              <p>Smart Cropping</p>
              <p className=" text-sm text-slate-600 mt-[25px]">
                {" "}
                Gain real-time insights into your crop health and growth.
                Receive alerts for potential issues, allowing for proactive
                management.
              </p>
            </div>
            <div className="bg-white p-4 w-[300px] text-center h-[200px] rounded-lg shadow-lg">
              <p>Data Driven Precision</p>
              <p className="text-sm text-slate-600 mt-[25px]">
                Make informed decisions based on accurate and timely data.
                Leverage advanced analytics to enhance crop planning and
                resource allocation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 h-[800px]">
            <p className="text-center mt-[20px] text-xl ">How it works</p>

            <div className="flex justify-around mt-[20px]">
                <p>Registration of users</p>
            <img src={login}  className='w-[200px]' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

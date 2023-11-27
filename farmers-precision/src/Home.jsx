import React, { useState } from "react";
import "./Home.css";
import {  Link } from "react-router-dom";
import login from "./assets/login.png";
import signup from "./assets/signup.png";
import response from "./assets/response.png";
import shedrack from "./assets/shedrack.jpg";
import taiwo from "./assets/ayo.jpg";
import tomide from "./assets/tomide.jpg";
import Navbar from "./Navbar";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const User = [
    {
      photo: shedrack,
      text: "ML developer",
      name: "Shedrack",
    },
    {
      photo: taiwo,
      text: "Backend Developer",
      name: "Taiwo",
    },
    {
      photo: tomide,
      text: "Frontend Developer",
      name: "Tomide",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = User.length;
  const nextSlides = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }; // current slide is equal to zero if length is less than 1 or current is added  1 more

  const prevSlides = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }; // current slide is equal to zero if length is less than 1 or current is less than 1

  if (!Array.isArray(User) || User.length <= 0) {
    return User; ///this states that if the user.length is empty it is expected to return user again
  }
  return (
    <div className="home1 ">
      <div className="bg-green-700 h-[70vh]">
       <Navbar />
        {/*Banner Section*/}
        <section name="home">
          <div className="flex  precision flex-col h-[40vh]  justify-center items-center align-center">
            <p className=" mt-[40px] text-white precision2 sm:font-extrabold lg:text-5xl sm:text-sm sm:text-center text-extrabold">
              Welcome to Agrisage – Where Precision Meets Agriculture! 🌾
            </p>
            <p className="text-center precision3 text-white text-extrathin   mt-4 w-[700px]">
              At AgriSage, we're redefining agriculture through the power of
              precision AI. Step into a realm where technology and nature
              seamlessly converge to optimize your farm's potential.
            </p>
          </div>
        </section>

        {/*Features Section*/}
        <section className="mt-[50px] features " name="features">
          <p className="text-center font-extrabold text-2xl  text-slate-200">
            Key Features
          </p>
          <div className="flex justify-around  mt-4 features2">
            <div className="bg-white p-4 w-[300px] text-center h-[200px] rounded-lg shadow-lg">
              <p className="font-extrabold">Empowering Farmers</p>
              <p className="text-sm text-slate-600 mt-[25px]">
                Join a community of forward-thinking farmers embracing the
                future of agriculture. Access ongoing support, training, and
                updates to stay at the forefront of ag-tech.
              </p>
            </div>
            <div className="bg-white p-4 w-[300px]  text-center h-[200px] rounded-lg shadow-lg">
              <p className="font-extrabold">Smart Cropping</p>
              <p className=" text-sm text-slate-600 mt-[25px]">
                {" "}
                Gain real-time insights into your crop health and growth.
                Receive alerts for potential issues, allowing for proactive
                management.
              </p>
            </div>
            <div className="bg-white p-4 w-[300px] text-center h-[200px] rounded-lg shadow-lg">
              <p className="font-extrabold">Data Driven Precision</p>
              <p className="text-sm text-slate-600 mt-[25px]">
                Make informed decisions based on accurate and timely data.
                Leverage advanced analytics to enhance crop planning and
                resource allocation.
              </p>
            </div>
          </div>
        </section>

        {/*Works Section*/}
        <section className="  mt-[90px] " name="works">
          <p className="text-center font-extrabold mt-[20px] text-xl mt-[50px]">
            How it works
          </p>

          <div className=" gridSys ">
            <div className="gridSys1 ">
              <p className="lg:text-2xl sm:text-xl holdT ">
                Sign Up for Exclusive Access to Precision Farming:
              </p>
              <p className="text-slate-500">🌱 Why Join AgriSage?</p>
              <p className=" lg:w-[400px] sm:w-[200px]  text-slate-500">
                🌱 Unlock a world of possibilities Personalized Insights
                Community 🌱 Connection Exclusive Resources
              </p>
            </div>
            <div className="holdFlex ">
              <div className=" w-[400px] rounded-[10px] flexBxx flex justify-center">
                <img src={signup} className="w-[250px] flexImg" />
              </div>
            </div>
          </div>

          <div className="gridSys ">
            <div className="holdFlex">
              <div className=" flexBxx  w-[400px] rounded-[10px] flex justify-center">
                <img src={login} className="w-[250px]" />
              </div>
            </div>

            <div className="gridSys1 ">
              <p className="lg:text-2xl holdT sm:text-xl  ">
                Welcome to the heart of AgriSage precision technology!
              </p>
              <p className="text-slate-500 gridText w-[600px]">
                🌱 To unlock the full potential of our AI-driven solutions,
                let's take you through a seamless journey.
              </p>
              <p className="sm:w-[150px] lg:w-[500px] text-slate-500">
                🌱 Explore Features <br />
                🌱 Access to advanced tools
              </p>
            </div>
          </div>

          <div className="gridSys ">
            <div className="gridSys1 ">
              <p className="lg:text-2xl sm:text-xl holdT ">
                See Our Precision AI in Action
              </p>
              <p className="text-slate-500 gridText  w-[600px]">
                🌱 To unlock the full potential of our AI-driven solutions,
                let's take you through a seamless journey.
              </p>
              <p className=" sm:w-[150px] lg:w-[500px]  text-slate-500">
                🌱 Real-time Monitoring <br />
                🌱 Automation in Action <br />
                🌱 Predictive Analysis
              </p>
            </div>
            <div className="holdFlex">
              <div className="flexBxx  w-[400px] rounded-[10px] flex justify-center">
                <img src={response} className="w-[250px] " />
              </div>
            </div>
          </div>
        </section>

        {/*CTA Section*/}
        <section className="flex justify-center  p-4 items-center align-center CTAB">
          <div className="CTA flex-col bg-slate-100  rounded-[30px] mt-[100px] h-[300px] lg:w-[800px] sm:w-[500px] flex justify-center align-center items-center ">
            <p className="text-center sm:text-sm lg:text-2xl  ">
              Want to see AgriSage in Action?
            </p>
           <Link to='/signup'>
              <button  className="mt-4 bg-green-700 text-white w-[200px] p-4 rounded-[10px] hover:bg-green-700">
                Get Started
              </button>
              </Link>
          </div>
        </section>

        {/*About Section*/}

        <section className="text-center  mt-[50px] h-[50vh]" name="about">
          <p className="font-extrabold text-xl">About us</p>
          <p className="text-slate-500">Agrisage is created by three tremendous people </p>
          <div>
            <div className="justify-center max-w-[auto]  gap-9 p-[10px]">
              <button
                onClick={prevSlides}
                className="mr-[10px] text-lg hover:text-slate-600  font-extrabold text-slate-300"
              >
                <p>Back</p>
              </button>
              <button
                onClick={nextSlides}
                className="ml-[10px] text-lg hover:text-slate-600 font-extrabold text-slate-300"
              >
                <p>Next</p>
              </button>
            </div>
            {User.map((user, index) => (
              <div className="flex   items-center align-center justify-center max-w-[auto] ">
                {index === current && (
                  <div key={index} className="">
                    <div className="flex flex-col text-center items-center">
                      <img
                        src={user.photo}
                        className="max-w-[200px] roundedFig"
                      />
                      <p className="text-xl font-extrabold mt-[30px] text-center">
                        {user.name}
                      </p>
                      <p className="max-w-[30rem] text-slate-500 p-[10px]">{user.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/*Footer Section*/}
        <footer
          className="bg-slate-200 mt-[20px]   footS  p-4 mt-[40px]"
          name="contact"
        >
          <div className="flex justify-around TEXTh mt-4">
            <div>
              <p className="text-slate-900 font-extrabold">About us</p>
              <p className="text-slate-600">Shedrack - ML Engineer</p>
              <p className="text-slate-600">Ayomide - Backend developer</p>
              <p className="text-slate-600">Tomide - Frontend developer</p>
            </div>

            <div>
              <p className="text-slate-900 font-extrabold">Contact us</p>
              <p className="text-slate-600">
                {" "}
                <a href="mailto:adeyemishedracktimi@gmail.com">Mail Shadrack</a>
              </p>
              <p className="text-slate-600">
                {" "}
                <a href="mailto:adeyanjutomide@gmail.com"> Mail tomide</a>
              </p>
              <p className="text-slate-600">
                {" "}
                <a href="mailto:ayomide@gmail.com"> Mail taiwo</a>
              </p>
            </div>

            <div>
              <p className="text-slate-900 font-extrabold">Connect with us</p>
              <p className="text-slate-600">
                {" "}
                <a href="https://www.linkedin.com/in/adeyanju-tomide-a630551b9/">
                  {" "}
                  Connect with Tomide
                </a>
              </p>
              <p className="text-slate-600">
                {" "}
                <a href="https://www.linkedin.com/in/ayomide-taiwo-407686231/">
                  {" "}
                  Connect with Taiwo
                </a>
              </p>
              <p className="text-slate-600">
                {" "}
                <a href="https://www.linkedin.com/in/shadrack-timi-adeyemi/">
                  {" "}
                  Connect with Shadrack
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;

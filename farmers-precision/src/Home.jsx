import React, { useState } from "react";
import "./Home.css";
import login from "./assets/login.png";
import signup from "./assets/signup.png";
import response from "./assets/response.png";
import { Link } from "react-router-dom";
const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const User = [
    {
      photo:
        "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=",
      text: "ML developer",
      name: "Shedrack",
    },
    {
      photo:
        "https://media.istockphoto.com/id/1388645967/photo/pensive-thoughtful-contemplating-caucasian-young-man-thinking-about-future-planning-new.webp?b=1&s=170667a&w=0&k=20&c=iSQUfWESVgOxHtV5X7lrNxxzaf4b7fMrmI3dXxrFNbQ=",
      text: "Backend Developer",
      name: "Taiwo",
    },
    {
      photo:
        "https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=Glt32OkYik_UecuUajJQrY2i52QdwlxSAgXejVrRfqM=",
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

        <div className="mt-[50px]">
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

        <div className="  mt-[30px]">
          <p className="text-center mt-[20px] text-xl mt-[50px]">
            How it works
          </p>

          <div className=" gridSys">
            <div className="">
              <p className="text-2xl ">
                Sign Up for Exclusive Access to Precision Farming:
              </p>
              <p className="text-slate-500">🌱 Why Join AgriSage?</p>
              <p className=" w-[400px] text-slate-500">
                Unlock a world of possibilities Personalized Insights Community
                Connection Exclusive Resources
              </p>
            </div>
            <div className="bg-blue-500 w-[400px] rounded-[10px] flex justify-center">
              <img src={signup} className="w-[250px]" />
            </div>
          </div>

          <div className="gridSys">
            <div className="bg-yellow-500 w-[400px] rounded-[10px] flex justify-center">
              <img src={login} className="w-[250px]" />
            </div>
            <div className="">
              <p className="text-2xl ">
                Welcome to the heart of AgriSage precision technology!
              </p>
              <p className="text-slate-500  w-[600px]">
                🌱 To unlock the full potential of our AI-driven solutions,
                let's take you through a seamless journey.
              </p>
              <p className=" w-[500px] text-slate-500">
                Explore Features <br />
                Access to advanced tools
              </p>
            </div>
          </div>

          <div className="gridSys">
            <div className="">
              <p className="text-2xl ">See Our Precision AI in Action</p>
              <p className="text-slate-500  w-[600px]">
                🌱 To unlock the full potential of our AI-driven solutions,
                let's take you through a seamless journey.
              </p>
              <p className=" w-[500px] text-slate-500">
                Real-time Monitoring <br />
                Automation in Action <br />
                Predictive Analysis
              </p>
            </div>

            <div className=" bg-green-800 w-[400px] rounded-[10px] flex justify-center">
              <img src={response} className="w-[250px] " />
            </div>
          </div>
        </div>

        <div className="flex justify-center p-4 items-center align-center">
          <div className="CTA flex-col bg-slate-100 rounded-[30px] mt-[100px] h-[300px] w-[800px] flex justify-center align-center items-center ">
            <p className="text-center text-2xl">
              Want to see AgriSage in Action?
            </p>
            <Link to="/signup">
              <button className="mt-4 bg-green-900 text-white w-[200px] p-4 rounded-[10px] hover:bg-green-700">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="text-center mt-[50px] h-[50vh]">
          <p>About us</p>
          <p>Agrisage is created by three tremendous people </p>
          <div>
            <div className="justify-center max-w-[auto]  gap-9 p-[10px]">
              <button
                onClick={prevSlides}
                className="mr-[10px] text-lg  font-extrabold text-slate-300"
              >
                <p>Back</p>
              </button>
              <button
                onClick={nextSlides}
                className="ml-[10px] text-lg font-extrabold text-slate-300"
              >
                <p>Next</p>
              </button>
            </div>
            {User.map((user, index) => (
              <div className="flex  items-center align-center justify-center max-w-[auto] ">
                {index === current && (
                  <div key={index} className="">
                    <div className="flex flex-col text-center items-center">
                      <img
                        src={user.photo}
                        className="max-w-[300px] roundedFig"
                      />
                      <p className="text-xl font-extrabold mt-[30px] text-center">
                        {user.name}
                      </p>
                      <p className="max-w-[30rem] p-[10px]">{user.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-200 h-[20vh]  p-4 mt-[40px]">
            <div className="flex justify-around mt-4">
                <div>
                    <p>About us</p>
                    <p>Shedrack - ML Engineer</p>
                    <p>Ayomide - Backend developer</p>
                    <p>Tomide - Frontend developer</p>
                </div>

                <div>
                    <p>Contact us</p>
                    <p>shedrack@gmail.com</p>
                    <p>ayomide@gmail.com</p>
                    <p>tomide@gmail.com</p>
                </div>

                <div>
                    <p>Connect with us</p>
                    <p>shedrack@gmail.com</p>
                    <p>ayomide@gmail.com</p>
                    <p>tomide@gmail.com</p>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default Home;

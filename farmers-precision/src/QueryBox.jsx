import React, { useState, useContext, useEffect } from "react";
import { userContext } from "./Firebase/userContext";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
const QueryBox = ({ logemail }) => {
  const {
    crop,
    setCrop,
    country,
    setCountry,
    waterlevel,
    setWaterlevel,
    humidity,
    setHumidity,
    temperature,
    setTemperature,
    ph,
    setPh,
    info,
    setInfo,
    logOut,
    user,
  } = useContext(userContext);
  const getCountry = (e) => {
    setCountry(e.target.value);
  };
  const getCrop = (e) => {
    setCrop(e.target.value);
  };
  const getPh = (e) => {
    setPh(e.target.value);
  };
  const getWater = (e) => {
    setWaterlevel(e.target.value);
  };
  const getHumid = (e) => {
    setHumidity(e.target.value);
  };
  const getTemp = (e) => {
    setTemperature(e.target.value);
  };
  console.log(user);
  const addInfo = (e) => {
    const jsonData = {
      temperature,
      humidity,
      ph,
      water_level: waterlevel,
      crop,
      country,
    };

  Axios.post(
     "https://klusterthon-precision-farming.onrender.com/result",
    jsonData, //send the data through with the api endpoint
    {
      headers: { "Content-Type": "application/json" },
    }
   ).then((response) => {
    console.log(response.data);
    setInfo(response.data)
    console.log(info)

   });
  };

  const navigate = useNavigate();
  const handleSignout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const {data} = info
  return (
    <div className="bg-white h-[100vh]  p-4">
  

      <div className="flex items-center  h-[50vh] justify-center align-center">
         <p>To predict your crop's harvest season kindly fill in your crop's name, soil condition, weather information and location in the boxes provided below </p>
          
       
      </div>

      <div className="flex items-center  h-[50vh] justify-center align-center flex-col gap-4">
        <p>The best time to harvest your crop is: {data} season </p>
        <input
          type="text"
          value={temperature}
          onChange={getTemp}
          placeholder="input temperature"
          className="lg:w-[500px] rounded-[10px] xs:w-[80vw] sm:w-[50vw] p-4 border-slate-900 border-2"
        />
        <input
          type="text"
          value={humidity}
          onChange={getHumid}
          placeholder="input the humidity"
          className=" border-2 border-slate-900 lg:w-[500px] xs:w-[80vw] sm:w-[50vw] rounded-[10px] p-4"
        />
        <input
          type="text"
          value={ph}
          onChange={getPh}
          placeholder="input the PH"
          className="lg:w-[500px] rounded-[10px] xs:w-[80vw] sm:w-[50vw] p-4 border-slate-900 border-2"
        />
        <input
          type="text"
          value={waterlevel}
          onChange={getWater}
          placeholder="input the waterlevel"
          className=" border-2 border-slate-900 lg:w-[500px] xs:w-[80vw] sm:w-[50vw] rounded-[10px] p-4"
        />
        <input
          type="text"
          value={crop}
          onChange={getCrop}
          placeholder="input the name of crop"
          className="lg:w-[500px] rounded-[10px] xs:w-[80vw] sm:w-[50vw] p-4 border-slate-900 border-2"
        />
        <input
          type="text"
          value={country}
          onChange={getCountry}
          placeholder="input the name of the country"
          className=" border-2 border-slate-900 lg:w-[500px] xs:w-[80vw] sm:w-[50vw] rounded-[10px] p-4"
        />
        <button onClick={addInfo} className="bg-green-900 text-white p-4 rounded-[10px] w-[100px] hover:bg-slate-500 hover:text-slate-800 text-extrabold">
          Send
        </button>
      </div>
    </div>
  );
};

export default QueryBox;

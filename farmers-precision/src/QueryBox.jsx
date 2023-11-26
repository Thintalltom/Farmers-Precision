import React, { useState, useContext, useEffect } from "react";
import { userContext } from "./Firebase/userContext";
import Axios from "axios";
const QueryBox = () => {
  const {
    crop,
    setCrop,
    city,
    setCity,
    info,
    setInfo,
    logOut,
  } = useContext(userContext);
  const getCity = (e) => {
      setCity(e.target.value)
  }
  const getCrop = (e) => {
      setCity(e.target.value)
  }
  //const addInfo = (e) => {
    //let formData = new FormData();//create a new form
  //  formData.append("crop", crop);//add the data into teh form by simply appending 
  //  formData.append("city", city);

    //Axios.post(
   //   "https://book-backend-production.up.railway.app/addbook",
   //   formData, //send the data through with the api endpoint
    //  {
    //    headers: { "Content-Type": "multipart/form-data" },
    //  }
   // ).then((response) => {
    //  console.log(response);
    //  setInfo(response)
      
  //  });
 // };
  return (
    <div className="bg-slate-200 h-[100vh] ">
      <div className="flex items-center  h-[50vh] justify-center align-center">
        <p>Get your Response </p>
      </div>

      <div className="flex items-center  h-[50vh] justify-center align-center flex-col gap-4">
        <input
          type="text"
          value={crop}
          onChange={getCrop}
          placeholder="input the name of crop"
          className="lg:w-[500px] rounded-[10px] xs:w-[80vw] sm:w-[50vw] p-4 border-slate-900 border-2"
        />
        <input
          type="text"
          value={city}
          onChange={getCity}
          placeholder="input the name of the city"
          className=" border-2 border-slate-900 lg:w-[500px] xs:w-[80vw] sm:w-[50vw] rounded-[10px] p-4"
        />
        <button className="bg-green-900 text-white p-4 rounded-[10px] w-[100px] hover:bg-slate-500 hover:text-slate-800 text-extrabold">
          Send
        </button>
      </div>
    </div>
  );
};

export default QueryBox;

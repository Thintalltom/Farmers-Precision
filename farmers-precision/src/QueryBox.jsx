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

  const[timer, setTimer] = useState(false)
  const[loading, setLoading] = useState(false)
  const addInfo = (e) => {
    const jsonData = {
      temperature,
      humidity,
      ph,
      water_level: waterlevel,
      crop,
      country,
    };
  
    // Set loading to true when starting the API call
    setLoading(true);
  
    Axios.post(
      "https://klusterthon-precision-farming.onrender.com/result",
      jsonData,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      // Process the response as needed
      setInfo(response.data);
      console.log(info)
    })
    .catch((error) => {
      // Handle errors if necessary
      console.error("Error fetching data:", error);
    })
    .finally(() => {
      // Set loading back to false regardless of success or failure
      setLoading(false);
      // Toggle the timer
      setTimer(!timer);
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

 
  return (
    <div className="h-[100vh] p-[30px] ">
  

      <div className="flex items-center   h-[50vh] justify-center align-center mt-[-50px] p-4 ">
         <p className='mt-[-150px]'>To predict your crop's harvest season, kindly fill in your crop's name, soil condition, weather information and location in the boxes provided below </p>
          
       
      </div>

      <div className="flex items-center  mt-[-150px] h-[80vh] justify-center align-center flex-col gap-4">
        <p>The best time to harvest your crop is:  {info === null ? (
    <p>no data yet</p>
  ) : (
    <p>{info.data} season</p>
  )}</p>
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
        {loading ? (
      // Display a loading message or spinner when data is being fetched
      <p>Loading...</p>
    ) : (
      // Display the "send" div when not loading
      <div>
        {/* Your "send" div content goes here */}
        <button onClick={addInfo} className='text-white bg-green-700 rounded-[2px] w-[100px] h-[30px]'>Send</button>
      </div>
    )}
      </div>
    </div>
  );
};

export default QueryBox;

import React, { useState, useContext, useEffect } from "react";
import { userContext } from "./Firebase/userContext";
import { useNavigate } from "react-router-dom";
import './Query.css'
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
    setInfo,
  } = useContext(userContext);
  const[errMessage1, setErrMessage1] = useState('')
  const[errMessage2, setErrMessage2] = useState('')
  const[errMessage3, setErrMessage3] = useState('')
  const[errMessage4, setErrMessage4] = useState('')
  const[errMessage5, setErrMessage5] = useState('')
  const[errMessage6, setErrMessage6] = useState('')
  const getCountry = (e) => {
    const newValue = e.target.value;
    if(/[^a-zA-Z]/.test(newValue)){
      setErrMessage5('This field on takes letters')
    }else{
      setErrMessage5('');
      setCountry(newValue);
    }
    };
    const getCrop = (e) => {
      const newValue = e.target.value;
      if(/[^a-zA-Z]/.test(newValue)){
        setErrMessage6('This field on takes letters')
      }else{
        setErrMessage6('');
        setCrop(newValue);
      }
    };
    const getPh = (e) => {
      const newValue = e.target.value;
      if (!/^[+-]?\d*\.?\d*$/.test(newValue)){
        setErrMessage1('This field on takes numbers')
      }else{
        setErrMessage1('');
        setPh(newValue)
      }
    };
    const getWater = (e) => {
      const newValue = e.target.value;
      if (!/^[+-]?\d*\.?\d*$/.test(newValue)){
        setErrMessage2('This field on takes numbers')
      }else{
        setErrMessage2('');
        setWaterlevel(newValue);
      }
    };
    const getHumid = (e) => {
      const newValue = e.target.value;
      if (!/^[+-]?\d*\.?\d*$/.test(newValue)){
        setErrMessage3('This field on takes numbers')
      }else{
        setErrMessage3('');
        setHumidity(newValue);
      }
    };
    const getTemp = (e) => {
      const newValue = e.target.value;
      if (!/^[+-]?\d*\.?\d*$/.test(newValue)){
        setErrMessage4('This field on takes numbers')
      }else{
        setErrMessage4('');
        setTemperature(newValue);
      }
 
    };
  
    const navigate= useNavigate()
    const [loading, setLoading] = useState(false)

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
      setLoading(true)
    
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
     
        navigate('/answer')
      })
      .catch((error) => {
        // Handle errors if necessary
        console.error("Error fetching data:", error);
      }).finally(() => {
        setLoading(false)
      })
    };

 
  return (
    <div className='queryBox bg-[#1e1e1e] h-[70rem]'>
    <div name='query' className="flex items-center    justify-center align-center  p-4 ">
     <p className='text-white text-center mt-[70px]'>To predict your crop's harvest season, kindly fill in your <br /> crop's name, soil condition, weather information and <br /> location in the boxes provided below </p>
    </div>
    <div className='flex justify-center items-center'>
    <div className='flex text-white flex-col border-[0.5px] rounded-[10px] p-[30px] w-[600px] fillBox items-center justify-center gap-[20px]'>
    {errMessage4 && <p className='text-red-500'>{errMessage4}</p>}
    <input
      type="text"
      placeholder="input temperature"
      value={temperature}
      onChange={getTemp}
      className="lg:w-[500px] bg-[#1e1e1e] rounded-[10px] xs:w-[80vw] sm:w-[50vw] p-4  border-[0.5px]"
    />
     {errMessage3 && <p className='text-red-500'>{errMessage3}</p>}
    <input
      type="text"
      placeholder="input the humidity"
      value={humidity}
      onChange={getHumid}
      className="  bg-[#1e1e1e]  lg:w-[500px] xs:w-[80vw] sm:w-[50vw] rounded-[10px] p-4 border-[0.5px]"
    />
     {errMessage1 && <p className='text-red-500'>{errMessage1}</p>}
    <input
      type="text"
      value={ph}
      onChange={getPh}
      placeholder="input the PH"
      className="lg:w-[500px] bg-[#1e1e1e] rounded-[10px] xs:w-[80vw] sm:w-[50vw] p-4  border-[0.5px]"
    />
      {errMessage2 && <p className='text-red-500'>{errMessage2}</p>}
    <input
      type="text"
      value={waterlevel}
      onChange={getWater}
      placeholder="input the waterlevel"
      className=" border-[0.5px] bg-[#1e1e1e]  lg:w-[500px] xs:w-[80vw] sm:w-[50vw] rounded-[10px] p-4"
    />
      {errMessage6 && <p className='text-red-500'>{errMessage6}</p>}
    <input
      type="text"
      value={crop}
      onChange={getCrop}
      placeholder="input the name of crop"
      className="lg:w-[500px] bg-[#1e1e1e] rounded-[10px] xs:w-[80vw] sm:w-[50vw] p-4  border-[0.5px]"
    />
      {errMessage5 && <p className='text-red-500'>{errMessage5}</p>}
    <input
      type="text"
      value={country}
      onChange={getCountry}
      placeholder="input the name of the country"
      className=" border-[0.5px] bg-[#1e1e1e]  lg:w-[500px] xs:w-[80vw] sm:w-[50vw] rounded-[10px] p-4"
    />
    {
      loading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex justify-center items-center mt-[10px]'>
        <button onClick={addInfo} className='bg-green-900 text-white lg:w-[500px] sm:w-[40vw] btn rounded-[10px] shadow-lg h-[50px]'>Send</button>
    </div>
      )
    }
    
    </div>
    </div>

</div>
  );
};

export default QueryBox;

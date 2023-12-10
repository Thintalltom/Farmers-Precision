import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";
import { userContext } from "./Firebase/userContext";
const Answer = () => {
    const {
        info
      } = useContext(userContext);
  return (
      <div className="flex items-center justify-center ">
    <div className="mt-[200px] flex-col w-[300px] p-4 border-2  h-[200px] flex">
      <Link to='/'><p className="text-white  float-right"><HiMiniXMark /></p></Link>
      <div className="flex justify-center  h-[200px] items-center">
      <p className="text-white text-center">
        The best time to harvest your crop is:{" "}
        {info === null ? <p>no data yet</p> : <p className="text-green-500 font-bold">{info.data} season</p>}{" "}
      </p>
      </div>
   
    </div>
    </div>
  );
};

export default Answer;
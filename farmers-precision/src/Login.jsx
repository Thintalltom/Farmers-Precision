import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "./Firebase/userContext";

const Login = ({logpassword, setLogPassword, logemail, setLogEmail}) => {
  const { login, logError, user } = useContext(userContext);
  const navigate = useNavigate();

 // const [logpassword, setLogPassword] = useState("");
 // const [logemail, setLogEmail] = useState("");
    const[loading, setLoading] = useState(true)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(logemail, logpassword);
      navigate("/query");
      console.log(user)
      setLoading(!loading)
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <div className="w-[100vw] h-[100vh] flex-col flex  items-center justify-center  bg-white">
        <p className="text-4xl font-extrabold mb-4">Welcome User</p>
        <p className="text-slate-200 mb-4 font-bold">Login Account</p>
        <div className="text-slate-900 flex  items-center justify-center">
          <form className="flex flex-col gap-9">
            <label>Gmail</label>
            <input
              onChange={(e) => setLogEmail(e.target.value)}
              value={logemail}
              type="text"
              placeholder="input here "
              className=" xs:w-[80vw] sm:w-[50vw] text-slate-900 border-black border-2 p-[5px] rounded "
            />
            <label>Password</label>
            <input
              onChange={(e) => setLogPassword(e.target.value)}
              value={logpassword}
              type="text"
              placeholder="input here "
              className=" xs:w-[80vw] sm:w-[50vw] text-slate-900  border-black border-2 p-[5px] rounded"
            />
            <button
              onClick={handleLogin}
              className=" text-white bg-green-900 rounded sm:w-[50vw] xs:w-[80vw] p-[10px]"
            >
             {loading ? <p>Login</p> : <p>loggin...</p>}
            </button>
            <p className="text-center ">
              Dont have an account?{" "}
              <Link to="/signup" className="text-green-900 cursor-pointer font-bold">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

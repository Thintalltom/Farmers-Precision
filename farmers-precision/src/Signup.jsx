import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "./Firebase/userContext";
const Signup = () => {
  const { signUp, error } = useContext(userContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signupError, setSignupError] = useState(null); 
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      console.error(err);
      setSignupError(err);  // Log the error for debugging
      // Handle the error, for example, update a state to display an error message
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] flex-col flex  items-center justify-center bg-slate-500">
      <p className="text-slate-200 mb-4 font-bold">Register Account</p>
      <div className="text-slate-200 flex  items-center justify-center">
        <form className="flex flex-col gap-9" onSubmit={handleSignup}>
          <label>Gmail</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="input here "
            className=" xs:w-[80vw] sm:w-[50vw] text-slate-900 border-black border-2 p-[5px] rounded "
          />
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="input here "
            className=" xs:w-[80vw] sm:w-[50vw] text-slate-900  border-black border-2 p-[5px] rounded"
          />
          <button
            type="submit"
            className=" text-white bg-slate-900 rounded sm:w-[50vw] xs:w-[80vw] p-[10px]"
          >
            Sign up
          </button>
          <p className="text-center">
            already registered?{" "}
            <Link
              to="/login"
              className="text-blue-900 cursor-pointer font-bold"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React,{useState, useEffect} from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import "./Home.css";
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const handleItem = () => {
      setOpen(false)
    }

  
  return (
    <div>
         <div className="flex justify-around bg-green-700 text-white p-4 home2 ">
          <p> Agrisage</p>
          <div className="flex gap-9 text-white">
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
            <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              <Link to="features" smooth={true} duration={500}>
                Features
              </Link>
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              <Link to="works" smooth={true} duration={500}>
                How it works
              </Link>
            </p>

            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              <Link to="about" smooth={true} duration={500}>
                About us
              </Link>
            </p>
            <p className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </p>
          </div>
        </div>

        {/*Navbar for small screen*/}
        <div className="bg-green-700 shadow-md">
          <div className="header text-white bg-green-700  shadow-md lg:hidden">
            <p> Agrisage</p>

            <div onClick={handleClick}>{open ? <FiMenu /> : <FiX />}</div>
          </div>
          <div
            className={
              !open
                ? "header2 bg-green-700 shadow-sm lg:hidden"
                : "header3 lg:hidden"
            }
          >
            <p  onClick={() => setOpen(false)} className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
            <Link to="home" smooth={true} duration={500} >
                Home
              </Link>
            </p>
            <p  onClick={() => setOpen(false)} className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              <Link to="features" smooth={true} duration={500}>
                Features
              </Link>
            </p>
            <p  onClick={handleItem} className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              <Link to="works" smooth={true} duration={500}>
                How it works
              </Link>
            </p>

            <p  onClick={() => setOpen(false)} className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              <Link to="about" smooth={true} duration={500}>
                About us
              </Link>
            </p>
            <p onClick={() => setOpen(false)}  className="hover:text-slate-400 cursor-pointer hover:border-b-2 hover:border-b-white">
              <Link  to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </p>
          </div>
        </div>

    </div>
  )
}

export default Navbar

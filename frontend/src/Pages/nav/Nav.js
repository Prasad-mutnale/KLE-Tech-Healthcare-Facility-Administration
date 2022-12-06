import React, { useEffect } from "react";
import "./nav.style.css"
import { Link, useNavigate } from "react-router-dom";
import kle_logo from "./kletech_logo.png"
import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logout = () => {
        localStorage.clear();
        toast.success("You have successfully logged out!",{
            transition:Bounce
        });
        navigate("/login");
    }

    return (
        <nav>
            {/* <a href="https://www.google.com">Kle tech logo  width={"20%"} height={"60%"} </a>
             */}
            <img className="img" src={kle_logo} width={"20%"} height={"60%"} ></img>
            <div id="top-right">
                {/* <Link className="bar1" to="/">Home</Link>
                 <Link className="bar1" to="/about">About</Link>
                <Link className="bar1" to="/contact">Contact</Link> */}
                {

                    auth ? <>
                        <Link className="bar1" to="/dashboard">Dashboard</Link>
                        <Link className="bar1" to="/about">About</Link>
                        <Link className="bar1" to="/contact">Contact</Link>
                        <Link onClick={logout} className="bar1" to="/login">Logout</Link>
                    {/* <div class="bar1">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                    <Link onClick={logout} className="bar1" >Logout</Link> 
                        {/* <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>  */}
                    {/* </div>
                    </div> */}
                    </> : <>
                        <Link className="bar1" to="/">Home</Link>
                        {/* <Link className="bar1" to="/signup">Sign Up</Link> */}
                        <Link className="bar1" to="/login">Login</Link>
                       
                    </>

                }
            </div>
        </nav>
    );
};

export default Navbar;

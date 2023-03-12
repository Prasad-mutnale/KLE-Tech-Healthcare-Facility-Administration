import React from 'react'
// import './style.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Login.style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';



const Login = () => {

  const [Values, setdata] = useState({
    usn: "",
    password: "",
  })
  const navigate = useNavigate();

  const successAlert = () => {
    // window.alert("Invalid Credentials");
    toast.success("User logged in successfully",{
      transition:Flip
    });
  }

  const setVal = (event) => {
    // const {name,value} = e.target;
    const name = event.target.name;
    const value = event.target.value;
    // event.preventDefault();

    // setdata({...data,[name]:value})
    setdata((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(Values.usn);
    // console.log(Values.password);

    let result = await fetch('http://13.232.165.158:4000/login', {
      method: "post",
      body: JSON.stringify({ usn: Values.usn, password: Values.password }),
      headers: {
        "Content-Type": "application/json",
        " Access-Control-Allow-Origin": "http://13.232.165.158:4000",
        "Access-Control-Allow-Methods":" POST, PUT, PATCH, GET, DELETE, OPTIONS"
      },
    });
    result = await result.json();
    console.log(result)

    if (result.usn) {
      localStorage.setItem("user", JSON.stringify(result));
      // alert("Successfully logged in");
      successAlert();
      navigate('/dashboard');

    } else {
      toast.error("Bad user credential" ,{
        transition: Flip
      });
      // alert("please enter correct details")

    }
  }

  return (
    <>

      <div className='logbody'>
        <div className="login">
          <h2>Login</h2>
          <input className="inputBox" id="logusn" type="text" name="usn" value={Values.usn} onChange={setVal} placeholder="ENTER USN ID" /><br /><br />
          <input className="inputBox" id="passwd" type="password" name="password" value={Values.password} onChange={setVal} placeholder="ENTER PASSWORD(DOB)" /><br /><br />
          <button onClick={handleSubmit} id="lobtn" className="signup-btn" type='button'>Login</button>
        </div>
      </div>
    
    </>
  )
}
export default Login;
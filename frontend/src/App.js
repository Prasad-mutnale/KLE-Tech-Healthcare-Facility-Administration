import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import About from './Pages/About/About';
import Ahealth from './Pages/Health/Ahealth';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/comp1/SignUp';
import Navbar from './Pages/nav/Nav';
import Verifydetails from './Pages/Health/Verifydetails';
import Doctors from './Pages/doctors/doctors';
import Appointment from './Pages/doctors/appoint';
function App() {
  return (

    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

      {/* <Route element={<PrivateComponent/>}> */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      {/* </Route> */}
      {/* <Route path="/contact" element={< />}></Route> Logout  */}
      {/* <Route path="/contact" element={< />}></Route> Profile */}
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/addhealthdetails" element={<Ahealth />}></Route>
      <Route path="/verify" element={<Verifydetails />}></Route>
      <Route path="/doctors" element={<Doctors />}></Route>
      <Route path="/appoint" element={<Appointment />}></Route>

    </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
    <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable={true}
      pauseOnHover
      theme="colored" 
      
      
      />
      
    </>

  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './comp1/About';
import Ahealth from './comp1/Ahealth';
import Contact from './comp1/Contact';
import Dashboard from './comp1/Dashboard';
import Home from './comp1/Home';
import Login from './comp1/Login';
import SignUp from './comp1/SignUp';
import Navbar from './nav/Nav';

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

    </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
    </>

  );
}

export default App;

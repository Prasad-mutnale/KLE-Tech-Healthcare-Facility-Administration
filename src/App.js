import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Navbar from './nav/Nav';
import {BrowserRouter} from 'react-router-dom'
import About from './comp1/About'
import Home from './comp1/Home'
import Contact from './comp1/Contact'
import Footer from './nav/Footer';
import SignUp from './comp1/SignUp';
import PrivateComponent from './comp1/PrivateComponent';
import Logout from './comp1/Logout';
import Login from './comp1/Login';
import Dashboard from './comp1/Dashboard';
import Ahealth from './comp1/Ahealth';

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

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Ahealth from './Pages/Health/Ahealth';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/comp1/SignUp';
import Navbar from './Pages/nav/Nav';

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

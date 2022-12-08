import React from 'react'
import './dashboard.css'
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const addhealth = () => {
    navigate("/addhealthdetails");
  }

  return (
    <>
      <center>
        <div id='welcome'>
          <h2 className='title1'>WELCOME TO KLE TECH CLINIC ( {JSON.parse(auth).name} )</h2>
          <div className='add'>
            <button className="health" onClick={addhealth}>Click here to add health details</button>
          </div>
        </div>
      </center>
    </>
  )
}

export default Dashboard
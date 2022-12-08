import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    // <h2>Contact page</h2>
    <div>
      <img className='contactpage' src="https://www.kletech.ac.in/wp-content/uploads/2020/02/KLE-Tech-Main-building.jpg" />
      <div className='contact-details'>
        <b><h2>Contact Details</h2></b>
        <b><h6>KLE Technological University</h6></b>
        <p className='sentences'>Act – 2012; Karnataka Act 22 of 2013 B. V. Bhoomaraddi Campus, Vidyanagar, <br />  Hubballi (India)</p>
        <p id='lines'>____________________________________________________________________</p>
        <b><h6>E-mail</h6></b>
        <p className='sentences'>info@kletech.ac.in</p>
        <p id='lines'>____________________________________________________________________</p>
        <b><h6>Phone number</h6></b>
        <p className='sentences'>Info Desk : +91 – 836 – 2378300 <br />
                                Fax : +91 – 836 – 2374985 (Time – 10.30 am To 5.00 pm) <br />
                                Admission : +91 – 836 – 2378103 (11.00 am To 5.30 pm)</p>
        <p id='lines'>____________________________________________________________________</p>

        <b><h6>BVBCET, Hubballi passed out students verification:</h6></b>
        <p className='sentences'>Mail: verify@bvb.edu <br />
                                Phone : 0836 2378300 </p>
        <p id='lines'>____________________________________________________________________</p>
        
        <b><h6>KLETU, Hubballi students verification:</h6></b>
        <p className='sentences'>Mail: verify@kletech.ac.in <br />
                                Phone : 0836 2378300 </p>
        <p id='lines'>____________________________________________________________________</p>

      </div>
    </div>

  )
}

export default Contact
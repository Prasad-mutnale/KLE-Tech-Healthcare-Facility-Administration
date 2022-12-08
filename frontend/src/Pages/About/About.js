import React from 'react'
import './abt.css'

const About = () => {
  return (
    <>
      <div className='abt'>
        {/* <h2>About page</h2> */}
        <img className='abtpage' src="https://www.kletech.ac.in/wp-content/uploads/2020/02/KLE-Tech-Main-building.jpg" />
        <div className='heading'>
        <b><h4 id='KLE'>ABOUT KLE TECHNOLOGICAL UNIVERSITY</h4></b>
        </div>
        <div className='abtus'>
          <h2>About Us</h2>
          <p id='detail'>
            KLE Technological University (KLE Tech) has its roots in one of the premier engineering institutions of Karnataka,
            B. V. Bhoomaraddi College of Engineering and Technology (BVB), a prestigious engineering college in Hubli. The 
            founding organization KLE Society, Belgaum, established BVB college in 1947 with an aspiration of creating an 
            institution that would lay the foundation of modern engineering education in northern region of Karnataka. Over 
            the years, it evolved to reach and hold a unique position of pride in the technical education system of India. 
            As we entered into the 21st century, the college undertook comprehensive reform process to adapt to the challenging 
            global engineering education scenario. In pursuit of academic excellence, the college attained academic autonomy from 
            University Grant Commission (UGC) in the year 2007. As an autonomous the college, BVB established its distinctive character
            in the academic space through its curriculum and outstanding student experience.
          </p>
        </div>
      </div>


    </>
  )
}

export default About
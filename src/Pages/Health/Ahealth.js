
import React from "react";
import { useState } from "react";
import './Ahealthadd.style.css';
const Ahealth = () => {
  const [symtomSelected,diseases]=useState('')
  return (
    <>
      <div id="div1">
        <div id="div2">
          <h2 align="center">Health Details</h2>
          <form align="center">
            <label htmlFor="Name" id='student'>Name:</label>
            <input type="text" placeholder='Name'/><br/><br/>
            <label htmlFor="age" id='age'>Age:</label>
            <input type="number" placeholder='Age'/><br /><br />
            Gender:<select name="gender" id="gender">
            <option value="select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option><br /><br />
            </select><br /><br />
            <b><label htmlFor="disease">Diseases</label></b><br />
            <input type="radio" name="disease" id="disease" value="Fever" onChange={()=>diseases("fever")} />Fever      
            <input type="radio" name="disease" id="disease" value="Injury" onChange={()=>diseases("injury")} />Injury
            <input type="radio" name="disease" id="disease" value="MentalHealth" onChange={()=>diseases("mentalhealth")} />Menatl Health
          </form>
          <form action="" border="2px solid black">
              <div className={symtomSelected==="fever"?"d-block":"d-none"}>
                <input type="checkbox" id="fever" />Cough <br />
                <input type="checkbox" id="fever" />Cold <br />
                <input type="checkbox" id="fever" />Naussia <br />
                <input type="checkbox" id="fever" />Migrain <br />
                <input type="checkbox" id="fever" />Eye Burning <br />
              </div>
              <div className={symtomSelected==="injury"?"d-block":"d-none"}>
                <input type="checkbox" id="injury" />Sports <br />
                <input type="checkbox" id="injury" />Accidental <br />
              </div>
              <div className={symtomSelected==="mentalhealth"?"d-block":"d-none"}>
                <input type="checkbox" id="mentalhealth" />Feeling Low <br />
                <input type="checkbox" id="mentalhealth" />Anxiety <br />
                <input type="checkbox" id="mentalhealth" />Bad thoughts <br />
              </div>
            </form> 
            <center>
              <input type="button" id="submit" value="Submit"/>
            </center>
        </div>
      </div>
      </>
  )
};

export default Ahealth;
import React from "react";
import { useState } from "react";
import './Ahealthadd.style.css';
const Ahealth = () => {
  const auth = localStorage.getItem("user");
  const usn = JSON.parse(auth).usn;
  const name = JSON.parse(auth).name;
  const [symtomSelected,diseases]=useState('')
  const [age,setAge]= useState('');
  const [gender,setGender]= useState('');
  const [ditems,setDitems] = useState([]);
  const [text,setText] = useState('');
  // const [checkValues,setValue] = useState([]);
  // const [error, setError]= useState(false);

  const addpatients=()=>{
    setDitems([
      ...ditems,
      text
      
    ])
    setText('');
  }
  console.log(usn,name,age,gender)
  console.log(symtomSelected,ditems)
  

  // function handleChange(event){
  //   const [value,checked] = event.target

  //   if(checked){
  //     setValue(prev=>[...prev,value])
  //   }else(
  //     setValue(pre=>{
  //       return [...pre.filter(skill=>skill===value)]
  //     })
  //   )
  // }
  // console.log(checkValues)
  return (
    <>
      <div id="div1">
        <div id="div2">
          <h2 align="center">Health Details</h2>
          <form align="center">
          <label htmlFor="USNID" id='usn'>USN ID:</label>
            {/* <input type="text" placeholder="your usn" onChange={(e)=>{setUsn(e.target.value)}}value={usn} /><br /><br /> */}
            <input type="text" placeholder="your usn" value={JSON.parse(auth).usn} /><br /><br /> 

            <label htmlFor="Name" id='student'>Name:</label>
            {/* <input type="text"  onChange={(e)=>{setName(e.target.value)}}  placeholder='Enter your Name' value={name}/><br/><br/> */}
            <input type="text" placeholder='Enter your Name' value={JSON.parse(auth).name}/><br/><br/>

            <label htmlFor="age" id='age'>Age:</label>
            <input type="number" placeholder='Age' value={age} onChange={(e)=>{setAge(e.target.value)}}/><br /><br />

            Gender:<select name="gender" id="gender"  
            value={gender} onChange={(e)=>{setGender(e.target.value)}}>
            <option value="select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option><br /><br />
            </select><br /><br />

            <b><label htmlFor="disease">Diseases</label></b><br />
            <input type="radio" name="disease" id="disease" value="Fever" onChange={()=>diseases("fever")} />Fever      
            <input type="radio" name="disease" id="disease" value="Injury" onChange={()=>diseases("injury")} />Injury
            <input type="radio" name="disease" id="disease" value="MentalHealth" onChange={()=>diseases("mentalhealth")} />Mental Health
          </form>
          <form action="" border="2px solid black">
              <div className={symtomSelected==="fever"?"d-block":"d-none"}>
                <input type="checkbox" id="fever" value="Cough" onChange={(e)=>{setText(e.target.value)}}  />Cough <br />
                <input type="checkbox" id="fever" value="Cold"  onChange={(e)=>{setText(e.target.value)}}/>Cold <br />
                <input type="checkbox" id="fever" value="Naussia" onChange={(e)=>{setText(e.target.value)}}/>Naussia <br />
                <input type="checkbox" id="fever" value="Migrain" onChange={(e)=>{setText(e.target.value)}}/>Migrain <br />
                <input type="checkbox" id="fever" value="Eye Burning" onChange={(e)=>{setText(e.target.value)}}/>Eye Burning <br />
              </div>
              <div className={symtomSelected==="injury"?"d-block":"d-none"}>
                <input type="checkbox" id="injury" value="Sports" />Sports <br />
                <input type="checkbox" id="injury" value="Accidental"  />Accidental <br />
                <input type="checkbox" id="injury" value="dummy"  />dummy <br />
              </div>
              <div className={symtomSelected==="mentalhealth"?"d-block":"d-none"}>
                <input type="checkbox" id="mentalhealth" />Feeling Low <br />
                <input type="checkbox" id="mentalhealth" />Anxiety <br />
                <input type="checkbox" id="mentalhealth" />Bad thoughts <br />
              </div>
            </form> 
            <center>
            <input onClick={addpatients} type="button" id="submit" value="Submit"/>
            </center>
        </div>
      </div>
      </>
  )
};

export default Ahealth;
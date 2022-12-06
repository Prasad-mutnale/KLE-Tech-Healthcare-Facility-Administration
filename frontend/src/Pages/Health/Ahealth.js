import React from "react";
import { useState } from "react";
import './Ahealthadd.style.css';
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Ahealth = () => {
  const auth = localStorage.getItem("user");
  const  getHdetailss= JSON.parse(localStorage.getItem("healthinfo"));
  const  getHdetailss1 = localStorage.getItem("healthinfo");
  const usn = JSON.parse(auth).usn;
  const name = JSON.parse(auth).name;
  const [symtomSelected,diseases]=useState('')
  const [age,setAge]= useState('');
  const [gender,setGender]= useState('');
  const [ditems,setDitems] = useState([]);
  const [text,setText] = useState('');
  const [checkValues,setDvalue] = useState({
    symptoms:[],
  });
  
  const navigate = useNavigate();


  const handleChangedisease = (e)=>{
    // e.preventDefault();
    const {value,checked} = e.target;
    const {symptoms} = checkValues;

    if(checked){
      setDvalue({
        symptoms:[...symptoms,value]
      });
    }else{
      setDvalue({
        symptoms: symptoms.filter((e)=>e!==value),
      });
    }
  };


  const addHealth=async ()=>{
    console.log(usn,name,age,gender)
    console.log(symtomSelected)
    console.log(checkValues.symptoms);
    let result = await fetch("http://localhost:4000/add-health",{
       method:'post',
       body:JSON.stringify({usn,name,age,gender,disease:symtomSelected,symptoms:checkValues.symptoms}),
       headers:{
        "Content-Type":"application/json"
       }
    });
    result = await result.json();
    console.log(result)

    if(getHdetailss)
    {
      alert("Hello ")
      // localStorage.clear("healthinfo")
      localStorage.setItem("healthinfo",JSON.stringify(result));
      toast.info("Your updated form submitted")
      navigate('/doctors')
    }
    else if(result.age){
      localStorage.setItem("healthinfo",JSON.stringify(result));
      
      // successAlert();
      toast.info("Please verfiy your health details")
      navigate('/verify');
      
  }else{
      alert("please fill details")
     
  }
    }


  


  return (
    <>
    {
      getHdetailss? <>
      <div id="div1">
        <div id="div2">
         
          <h2 align="center">Health Details</h2>
          <form align="center">
          <label htmlFor="USNID" id='usn'>USN ID:</label>
            {/* <input type="text" placeholder="your usn" onChange={(e)=>{setUsn(e.target.value)}}value={usn} /><br /><br /> */}
            <input type="text" placeholder="your usn" value={JSON.parse(auth).usn} /><br /><br /> 

            <label htmlFor="Name" id='student'>Name:</label>
            {/* <input type="text"  onChange={(e)=>{setName(e.target.value)}}  placeholder='Enter your Name' value={name}/><br/><br/> */}
            <input type="text" placeholder='Enter your Name' value={JSON.parse(auth).name} /><br/><br/>

            <label htmlFor="age" id='age'>Age:</label>
            <input type="number" placeholder='Age' value={JSON.parse(getHdetailss1).age} onChange={(e)=>{setAge(e.target.value)}}/><br /><br />

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
                <input type="checkbox" id="fever" value="Cough" onChange={handleChangedisease}  />Cough <br />
                <input type="checkbox" id="fever" value="Cold"  onChange={handleChangedisease}/>Cold <br />
                <input type="checkbox" id="fever" value="Naussia" onChange={handleChangedisease}/>Naussia <br />
                <input type="checkbox" id="fever" value="Migrain" onChange={handleChangedisease}/>Migrain <br />
                <input type="checkbox" id="fever" value="Eye Burning" onChange={handleChangedisease}/>Eye Burning <br />
              </div>
              <div className={symtomSelected==="injury"?"d-block":"d-none"}>
                <input type="checkbox" id="injury" value="Sports" onChange={handleChangedisease} />Sports <br />
                <input type="checkbox" id="injury" value="Accidental" onChange={handleChangedisease}  />Accidental <br />
                <input type="checkbox" id="injury" value="dummy" onChange={handleChangedisease} />dummy <br />
              </div>
              <div className={symtomSelected==="mentalhealth"?"d-block":"d-none"}>
                <input type="checkbox" id="mentalhealth" value="Feeling Low" onChange={handleChangedisease}/>Feeling Low <br />
                <input type="checkbox" id="mentalhealth" value="Anxiety" onChange={handleChangedisease}/>Anxiety <br />
                <input type="checkbox" id="mentalhealth" value="Bad Thoughts" onChange={handleChangedisease}/>Bad thoughts <br />
              </div>
            </form> 
            <center>
            <input onClick={addHealth} type="button" id="submit" value="Submit"/>
            </center>
        </div>
      </div>

      </>:
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
                <input type="checkbox" id="fever" value="Cough" onChange={handleChangedisease}  />Cough <br />
                <input type="checkbox" id="fever" value="Cold"  onChange={handleChangedisease}/>Cold <br />
                <input type="checkbox" id="fever" value="Naussia" onChange={handleChangedisease}/>Naussia <br />
                <input type="checkbox" id="fever" value="Migrain" onChange={handleChangedisease}/>Migrain <br />
                <input type="checkbox" id="fever" value="Eye Burning" onChange={handleChangedisease}/>Eye Burning <br />
              </div>
              <div className={symtomSelected==="injury"?"d-block":"d-none"}>
                <input type="checkbox" id="injury" value="Sports" onChange={handleChangedisease} />Sports <br />
                <input type="checkbox" id="injury" value="Accidental" onChange={handleChangedisease}  />Accidental <br />
                <input type="checkbox" id="injury" value="dummy" onChange={handleChangedisease} />dummy <br />
              </div>
              <div className={symtomSelected==="mentalhealth"?"d-block":"d-none"}>
                <input type="checkbox" id="mentalhealth" value="Feeling Low" onChange={handleChangedisease}/>Feeling Low <br />
                <input type="checkbox" id="mentalhealth" value="Anxiety" onChange={handleChangedisease}/>Anxiety <br />
                <input type="checkbox" id="mentalhealth" value="Bad Thoughts" onChange={handleChangedisease}/>Bad thoughts <br />
              </div>
            </form> 
            <center>
            <input onClick={addHealth} type="button" id="submit" value="Submit"/>
            </center>
        </div>
      </div>
}
      </>
  )
};

export default Ahealth;

import React, { useState } from 'react';
import { useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router";




function Prod({ind,na,em,qu,sp}){
let d=JSON.parse(localStorage.getItem('healthinfo')).disease

console.warn(ind)
if(d==="fever" && na==="prasad"){
return(<>
<li>{ind}</li>
<li>{na}</li>
<li>{em}</li>
<li>{qu}</li>
<li>{sp}</li>
{/* <li><input  id="check" name="check1" type="radio" onChange={()=>{setName(na);setEmail(em);setQual(qu);setSpec(sp);}} ></input></li> */}

</>);
}
else{
 return(  <>
 
    </>) ;
}

}










const Doctors=()=>
{
    const [products,setProducts]=useState([]);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [qual,setQual]=useState('');
    const [spec,setSpec]=useState('');
    
    useEffect(()=>{
        getproducts();
    },[]);

    const navigate = useNavigate();

    const getproducts= async ()=>{
        let result =await fetch("http://localhost:4000/doctors",{
            headers:{
                'Content-Type':'application/json'
                // authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result =await result.json();
        setProducts(result);
    }
    

    const save=async()=>{
        console.warn(name)
        let doc={name,email,qual,spec}
        // localStorage.setItem(name);
        console.warn(doc)
        localStorage.setItem("doctor",JSON.stringify(doc));

// *************
     let sname= localStorage.getItem('user').name
        console.warn(name, email,sname);
        let result = await fetch("http://localhost:4000/appointments",
         {
          method: "post",
          body: JSON.stringify({ name, email, sname}),
          headers: {"Content-Type": "application/json"}
        });
        result= await result.json();
        console.warn(result);

        toast.info("Your appointment submitted")
        navigate('/dashboard')




    }
    return (
       
        <div className='product-list'>
        <h2>Doctors List</h2>
       
        <ul >
            <li>S.No</li>
            <li>Name</li>
            <li>Email</li>
            <li>Qualification</li>
            <li>Specialisation</li>
            <li>Select</li>


          
        </ul>

            {/* <li>{index+1}</li>
            <li>{item.name}</li>

            <li>{item.email}</li>
            <li>{item.qualification}</li>
            <li>{item.specialisation}</li> */}
        {
          products.length>0?  products.map((item,index)=>
      
        <><ul>
           <Prod ind={index+1} na={item.name} em={item.email} qu={item.qualification} sp={item.specialisation}/>
            
           
        </ul>
        </>
            )
           
            :
            <h2>No Result Found</h2>
        }
       
       <button onClick={save}>Appointment </button>
    </div>
)
}
export default Doctors;
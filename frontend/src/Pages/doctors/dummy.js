
import React, { useState } from 'react';
import { useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router";
import './doctor.css'




function Prod({ind,na,em,qu,sp}){
let d=JSON.parse(localStorage.getItem('healthinfo')).disease

console.warn(ind)

const dataradio=(e)=>{
    console.warn({ind,na,em,qu,sp});
    
    const t={name:na,email:em,qualification:qu,specialisation:sp}
    localStorage.setItem("doctor",JSON.stringify(t));

    
}



if(d==="fever" && ((na==="Prasad") ||(na==="sankalp") ||(na==="rahul") ||(na==="ganesh") )){
return(<>
<li>{ind}</li>
<li>{na}</li>
<li>{em}</li>
<li>{qu}</li>
<li>{sp}</li>
<li><input type="radio" onClick={dataradio}/></li>
      
{/* <li><input  id="check" name="check1" type="radio" onChange={()=>{setName(na);setEmail(em);setQual(qu);setSpec(sp);}} ></input></li> */}

</>);
}
else if(d==="mentalhealth"  && ((na==="Sachin") ||(na==="aditya") ||(na==="shashank")  )){

 return(  <>
    <li>{ind}</li>
<li>{na}</li>
<li>{em}</li>
<li>{qu}</li>
<li>{sp}</li>
<li><input type="radio" onClick={dataradio}/></li>
       
    </>) ;
}

else if(d==="injury" && ((na==="Bharat") ||(na==="sagar")||(na==="gururaj")   )){

    return(  <>
    <li>{ind}</li>
    <li>{na}</li>
    <li>{em}</li>
    <li>{qu}</li>
    <li>{sp}</li>
    <li><input type="radio" onClick={dataradio}/></li>
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
    const [d,setD]=useState('');
    // let mail = JSON.parse("doctor").email;
    
    useEffect(()=>{
        getproducts();
    },[]);

    const navigate = useNavigate();

    const getproducts= async ()=>{
        let result =await fetch("http://13.232.165.158:4000/doctors",{
            headers:{
                'Content-Type':'application/json'
                // authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result =await result.json();
        setProducts(result);
    }
    

    // const save=async()=>{
    //     navigate('/appoint')
    // }



        // *********************
        // console.warn(name)
        let doc={name,email,qual,spec}
        // localStorage.setItem(name);
        // console.warn(doc)
        localStorage.setItem("doctor",JSON.stringify(doc));


    return (
       
        <div className='product-list'>
        <h2>Doctors List</h2>
       
        <ul >
            <li><strong>S.No</strong></li>
            <li><strong>Name</strong></li>
            <li><strong>Email</strong></li>
            <li><strong>Qualification</strong></li>
            <li><strong>Specialisation</strong></li>
            <li><strong>Select</strong></li>


          
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
               <a href="mailto:bharat@gmail.com"><button> Appointment</button></a>
    </div>
)};


export default Doctors;

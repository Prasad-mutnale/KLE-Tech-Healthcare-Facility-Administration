
import React, { useState } from 'react';
import { useEffect} from 'react';

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

        toast.info("Your updated form submitted")
        navigate('/doctors')




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
        {
          products.length>0?  products.map((item,index)=>
        <ul>
            <li>{index+1}</li>
            <li>{item.name}</li>

            <li>{item.email}</li>
            <li>{item.qualification}</li>
            <li>{item.specialisation}</li>
            <li><input  id="check" name="check1" type="radio" onChange={()=>{setName(item.name);setEmail(item.email);setQual(item.qualification);setSpec(item.specialisation);}} ></input></li>
           
        </ul>

            )
           
            :
            <h2>No Result Found</h2>
        }
       
       <button onClick={save}>Appointment </button>
    </div>
)
}
export default Doctors;
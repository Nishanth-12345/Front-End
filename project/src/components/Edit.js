import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Edit = () => {

  const navigate = useNavigate();

 // const [dataId, setDataId] = useState("");
   const [id, setId] = useState("");
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [age, setAge] = useState('');
   const [Phonenumber, setPhonenumber] = useState('');


   useEffect(() => {
       setId(localStorage.getItem("storeid"));
       setFirstName(localStorage.getItem("firstName"));
       setLastName(localStorage.getItem("lastName"));
       setAge(localStorage.getItem("age"));
       setPhonenumber(localStorage.getItem("phoneNumber"));
   },[]);
  // console.log("id...",id);
 // console.log("name",firstName);
 // console.log("llname",lastName);
 

const handleEdit =  (e) => {
  e.preventDefault();
      axios.patch(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`, {
 
 
      firstName : firstName,
      
      lastName    : lastName,
      phoneNumber    : Phonenumber ,
      age    : age ,


     
  }
  
  ).then(()=>{

   navigate("/data");
  });
  
}

   
  

  return (
    <div className="app flex justify-center items-center customBG">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      <div className='w-96 m-40 text-left'>
        <form onSubmit={handleEdit} className='bg-white
         shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>First Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='fname' id='firstName'
            
             value={firstName}
             onChange={(e) => setFirstName(e.target.value)} 
             />
             
            
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Last Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text' placeholder='lname' id='lastName' 
             
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
             
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Age</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  
             type='number' placeholder='age' id='age'

            
               value={age}
              onChange={(e) => setAge(e.target.value)} />
             
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Phone Number</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
             type='text' placeholder='number' id='phoneNumber' 
             
               value={Phonenumber}
             
               onChange={(e) => setPhonenumber(e.target.value)} />
             
           
            <button type='submit' className='w-full bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3' value='Submit'
            
            >Submit</button>
        </form>
     
      
       
       </div>
       
    </div>
  
  )
}

export default Edit
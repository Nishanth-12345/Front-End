import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm } from 'react-hook-form';

import axios from 'axios';

const Edit = () => {

  const navigate = useNavigate();

  const {register, formState:{errors}, handleSubmit} = useForm();

 
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
 

const handleEdit =  () => {

    
  
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
        <form onSubmit={handleSubmit(handleEdit)} className='bg-white
         shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>First Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='fname' id='firstName'
              {...register("firstname",{
                minLength: 1,
                maxLength: 20,
              
                pattern: /^[A-Za-z]+$/i
              })}
             value={firstName}
             onChange={(e) => setFirstName(e.target.value)} 
             />
             <error>
               
               {errors.firstname?.type === "minLength" && <p className='text-red-600'>Entered name is less than 1 character</p>}
               {errors.firstname?.type === "pattern" && <p className='text-red-600'>Alphabetical characters only</p>}
               {errors.firstname?.type === "maxLength" && <p className='text-red-600'>Entered name is more than 20 character</p>}
             </error>
            
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Last Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text' placeholder='lname' id='lastName' 
              
              {...register("lastname",{
                minLength: 1,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
               
              })}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />

              <error>
                
                {errors.lastname?.type === "minLength" && <p className='text-red-600'>Entered name is less than 1 character</p>}
                {errors.lastname?.type === "pattern" && <p className='text-red-600'>Alphabetical characters only</p>}
                {errors.lastname?.type === "maxLength" && <p className='text-red-600'>Entered name is more than 20 character</p>}
              </error>
             
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Age</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  
             type='number' placeholder='age' id='age'
             {...register("number",{
              minLength: 1,
              maxLength: 3,
              
            
             })}
             
            
               value={age}
              onChange={(e) => setAge(e.target.value)} />

              <error>
                {errors.number?.type === "minLength" && <p className='text-red-600'>Entered number is less than 1 digit</p>}
              
                {errors.number?.type === "maxLength" && <p className='text-red-600'>Entered number is more than 3 digit</p>}
              
             
              </error>
             
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Phone Number</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
             type='text' placeholder='number' id='phoneNumber' 
               
              {...register("phonenumber",{
              minLength: 1,
              maxLength: 13,
             
              pattern: /^[0-9\b]+$/,
              })}
               value={Phonenumber}
             
               onChange={(e) => setPhonenumber(e.target.value)} />
              <error>
                {errors.phonenumber?.type === "minLength" && <p className='text-red-600'>Entered number is less than 1 digit</p>}
                {errors.phonenumber?.type === "maxLength" && <p className='text-red-600'>Entered number is more than 13 digit</p>}
               
                {errors.phonenumber?.type === "pattern" && <p className='text-red-600'>Numbers only allowed</p>}
              </error>
           
            <button type='submit' className='w-full bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3' value='Submit'
            
            >Submit</button>
        </form>
     
      
       
       </div>
       
    </div>
  
  )
}

export default Edit
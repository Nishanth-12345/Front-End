import React, {useState} from 'react';
//import {} from 'react-hook-form';
//import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';

function Modal() {

  const navigate = useNavigate();
   
   const {register, formState:{errors}, handleSubmit} = useForm();
  

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [Phonenumber, setPhonenumber] = useState('');
   // const [error, setError] = useState(false);
    
    
    const handSubmit = async () => {
        
     
     
     const post = await axios.post('/user/create', {
       firstName : firstName,
            
       lastName    : lastName,
       phoneNumber    : Phonenumber ,
       age    : age ,
           
        }).then(()=>{
         navigate("/data");
        });
        console.log(post);
    }
    
   


  return (
    <>
    <div className='w-96 m-2 text-left'>
        <form onSubmit={handleSubmit(handSubmit)} className='bg-white
         shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>First Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='fname' 
             {...register("firstname",{
              minLength: 1,
              maxLength: 20,
              required: true,
              pattern: /^[A-Za-z]+$/i
            })}
             
             onChange={(e) => setFirstName(e.target.value)} 
             />
             <error>
               {errors.firstname?.type==="required" && <p className='text-red-600'>First Name is required</p>}
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
                required: true})}
             onChange={(e) => setLastName(e.target.value)} />
              <error>
               {errors.lastname?.type==="required" && <p className='text-red-600'>Last Name is required</p>}
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
              
              required: true,
             })}
             
             onChange={(e) => setAge(e.target.value)} />
             <error>
               {errors.number?.type === "minLength" && <p className='text-red-600'>Entered number is less than 1 digit</p>}
              
               {errors.number?.type === "maxLength" && <p className='text-red-600'>Entered number is more than 3 digit</p>}
               {errors.number?.type==="required" && <p className='text-red-600'>Age is required</p>}
             
             </error>

            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Phone Number</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
             type='text' placeholder='number' id='phoneNumber' 
             
              {...register("phonenumber",{
              minLength: 1,
              maxLength: 13,
              required: true,
              pattern: /^[0-9\b]+$/,
              })}
             
             onChange={(e) => setPhonenumber(e.target.value)} />
             
             <error>
               {errors.phonenumber?.type === "minLength" && <p className='text-red-600'>Entered number is less than 1 digit</p>}
               {errors.phonenumber?.type === "maxLength" && <p className='text-red-600'>Entered number is more than 13 digit</p>}
               {errors.phonenumber?.type==="required" && <p className='text-red-600'>Phone number is required</p>}
               {errors.phonenumber?.type === "pattern" && <p className='text-red-600'>Numbers only allowed</p>}
              </error>
             
            <button type='submit' className='w-full bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3' value='Submit'
            
            >Submit</button>
        </form>
     
      
       
      
       
    </div>
    </>
  )

  }
export default Modal;
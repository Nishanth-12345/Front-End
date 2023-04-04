import React, {useState} from 'react';

//import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Modal() {

  const navigate = useNavigate();
   
   
  

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [Phonenumber, setPhonenumber] = useState('');
  //  const [error, setError] = useState(false);
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
   
   
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
        <form onSubmit={handleSubmit} className='bg-white
         shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>First Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='fname' id='firstName'
            
             name = "firstName"
             onChange={(e) => setFirstName(e.target.value)} 
             />
               
             
             
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Last Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text' placeholder='lname' id='lastName' 
              
             onChange={(e) => setLastName(e.target.value)} />

            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Age</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  
             type='number' placeholder='age' id='age'

            
             
             onChange={(e) => setAge(e.target.value)} />

            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Phone Number</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
             type='text' placeholder='number' id='phoneNumber' 
             
            
             
             onChange={(e) => setPhonenumber(e.target.value)} />
            
            
            <button type='submit' className='w-full bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3' value='Submit'
            
            >Submit</button>
        </form>
     
      
       
      
       
    </div>
    </>
  )

  }
export default Modal;
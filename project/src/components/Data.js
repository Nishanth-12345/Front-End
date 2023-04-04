import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';

const Data = () => {
    
  const [post,setPost] = useState([]);
  
  const url = "https://blue-journalist-bbrpv.ineuron.app:4000/users";
  
  const navigate = useNavigate();
 

  const setToLocalStorage = (_id,firstName,lastName,age,phoneNumber ) => {
      localStorage.setItem("storeid",_id);
      localStorage.setItem("firstName",firstName);
      localStorage.setItem("lastName",lastName);
      localStorage.setItem("age",age);
      localStorage.setItem("phoneNumber",phoneNumber);
    }
    

 
 
  console.log("post1",post);

  const handleDelete = (_id,e) => {
    e.preventDefault();
    axios.delete(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${_id}`)
    .then(res =>{ console.log('deleted',res)
    navigate("/");
  
   }) .catch(err=>console.log(err))
  }
  
  const fetch = async ()  => {
    
    const response= await axios.get(url)
    

    setPost(response.data.data);
    

  }

  useEffect(() => {
      fetch();
      
  },[]);

  return (
    <div className=' flex justify-center items-center h-screen customBG'>
     <div>
      <table className='shadow-2xl font-[Poppins] border-2 border-cyan-200 w-6/12 m-5 ' >
        <thead className='text-white'>
          <tr>
            
            <th className='py-3 bg-cyan-500'>First Name</th>
            <th className='py-3 bg-cyan-500'>Last Name</th>
            <th className='py-3 bg-cyan-500'>Age</th>
            <th className='py-3 bg-cyan-500'>Phone Number</th>
            <th className='py-3 bg-cyan-500'>Update</th>
            <th className='py-3 bg-cyan-500'>Delete</th>
          </tr>
        </thead>
        <tbody className='text-cyan-900 text-center'>
        {post.map((item) => {
           
           const {_id,firstName,lastName,phoneNumber,age} = item;
            
            return <tr className='bg-cyan-300 hover:bg-cyan-200 hover:scale-105 cursor-pointer duration-300
            ' key={_id}>
              
              <td className='py-3 px-6'>{firstName}</td>
              <td className='py-3 px-6'>{lastName}</td>
              <td className='py-3 px-6'>{age}</td>
              <td className='py-3 px-6'>{phoneNumber}</td>
              <td>
              <Link to = {`/edit/:${_id}`}
              >
                  <button className='mb-2 mt-3 ml-1 mr-2 py-1 px-4 text-white bg-cyan-900 rounded-lg' 
                     onClick={()=>setToLocalStorage(
                    _id,
                     firstName,
                     lastName,
                     age,
                     phoneNumber
                     )}
                   >Edit</button>
              </Link>
             
              </td>
              <td>
              <button className='mb-2 mt-3 ml-1 mr-2 py-1 px-4 text-white bg-red-900 rounded-lg'
              onClick={(e) => handleDelete(
                _id,e
              )}
              >Delete</button>
              </td>
          
            </tr>
        })}
        </tbody>
      </table>
      <div className='Register'> 
        <Link to='/' >
              <h2>Register...Click here</h2>
       
        </Link>
      </div>
       
     </div>
   </div>

    )
 };

export default Data


import React from 'react';
import { useState } from 'react';
import Modal from './Form.js';
import { Link } from 'react-router-dom';

//import Table from './Table.tsx';
const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
  return (
    
  <div className="app flex justify-center items-center customBG">

    <div>
     { modalOpen ? <h1 className='form'>Please Fill the </h1>:<h1 className='text'>Hey, click on the button to Register the Form.</h1> }
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        { modalOpen ? <h1 className='Form'>..Form</h1> : <h1 className='open'>Register</h1>}
      </button>
        {modalOpen && < Modal closeModal={setModalOpen} />}
       
     
       <Link to='/data'>
              <h2 className='data'>See The Datas</h2>
       
        </Link>
     
        

      
    </div>

        
    
          

  </div>
    
  )
}

export default Home;
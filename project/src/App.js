import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


import Home from "./components/Home.js";
import Data from "./components/Data.js";
import Edit from "./components/Edit.js";

function App() { 
  

  return (
  <Router>

  
   
    <Routes>
      <Route path='/'  element =  {<Home/>}/>
      <Route path='/data' element = {< Data />}/>
      <Route path='/edit/:id' element = {< Edit />}/>
    </Routes>
    


  </Router>
  );
}

export default App;
   
   

   
   

   
   




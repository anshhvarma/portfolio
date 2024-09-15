import Home from './pages/home.js';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import { NavBar } from "./components/NavBar.js";


const App = () => {
  return (
    <>
      <NavBar/>
       <Home/>
    </>

    
  );
}

export default App;

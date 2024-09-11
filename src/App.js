import Home from './pages/home.js';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { NavBar } from "./components/NavBar.js";


const App = () => {
  return (
    <>
      <NavBar/>
        <Home />
    
    </>

    
  );
}

export default App;


import Home from "./pages/Home.js";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project  from "./pages/Projects.js";

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { NavBar } from "./components/NavBar.js";


const App = () => {
  return (
    <>
      <NavBar/>
      <Router>
        <Home />
    </Router>
    
    </>

    
  );
}

export default App;

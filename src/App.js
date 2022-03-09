import React from 'react';
import './App.css';

import Home from './Home';
import Locations from './Locations';
import { Routes, Route, Link } from "react-router-dom";



function App() {

  
  return (
    
    <div className="app">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/location/:cityId" element={<Locations/>} />
      </Routes>

    </div>
  );
}

export default App;

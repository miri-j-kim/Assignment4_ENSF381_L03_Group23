import './App.css';
import React from 'react';
import Homepage from './component/Homepage.js';
import Productpage from './component/Productpage.js';
import Loginpage from './component/Loginpage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Loginpage />} />
      <Route path="/Products" element={<Productpage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
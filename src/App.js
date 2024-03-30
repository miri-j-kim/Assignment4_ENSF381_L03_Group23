import './App.css';
import React, { createContext, useContext, useState } from 'react';
import Homepage from './component/Homepage.js';
import Productpage from './component/Productpage.js';
import Loginpage from './component/Loginpage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('authenticated')
  const [authenticated, setAuthenticated] = useState(isAuthenticated ? isAuthenticated : false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Loginpage />} />
      <Route path="/Products" element={<Productpage />} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
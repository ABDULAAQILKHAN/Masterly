import { useState,useEffect } from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from "./components/Authentications/LandingPage/LandingPage";
import Login from './components/Authentications/Login';
import Signup from './components/Authentications/Signup';
import VerifyOtp from './components/Authentications/VerifyOtp';
import Homepage from './components/Home/homepage';
function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<Signup /> } />
      <Route exact path="/verifyotp" element={<VerifyOtp/>} />
      <Route exact path="/home" element={<Homepage/> } />
    </Routes>
  </BrowserRouter>
  </>  
  );
}

export default App;

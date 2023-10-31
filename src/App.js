import { useState,useEffect, useRef } from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from "./components/Authentications/LandingPage/LandingPage";
import Login from './components/Authentications/Login';
import Signup from './components/Authentications/Signup';
import VerifyOtp from './components/Authentications/VerifyOtp';
import Homepage from './components/Home/homepage';
import CreateResume from './components/profile/CreateResume';
import EditProfile from './components/profile/EditProfile';

function App() {
  
  const windowWidth = useRef(window.innerWidth);

  useEffect(()=>{
    //windowWidth.current<900&&alert("The app is currently under dev for mobile view please check it out on larger screen!")
},[windowWidth])
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup /> } />
      <Route exact path="/verifyotp" element={<VerifyOtp/>} />
      <Route exact path="/home" element={<Homepage /> } />
      <Route exact path="/CreateResume" element={<CreateResume /> } />
      <Route exact path="/EditProfile" element={<EditProfile /> } />


    </Routes>
  </BrowserRouter>
  </>  
  );
}

export default App;

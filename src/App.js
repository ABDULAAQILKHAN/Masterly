import { useState,useEffect, useRef } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Authentications/Login';
import Signup from './components/Authentications/Signup';
import VerifyOtp from './components/Authentications/VerifyOtp';
import Homepage from './components/Home/homepage';
import CreateResume from './components/profile/CreateResume';
import EditProfile from './components/profile/EditProfile';
import MyResume from './components/myResume';
import ForgotPassword from './components/Authentications/ForgotPassword';
import Navbar from './components/Navbar';
function App() {
  const [FooterVisible, setFooterVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(true)
  return (
  <>
  <BrowserRouter>
  {<Navbar setNavVisible={setNavVisible}/>}
    <Routes>
      <Route path="/" element={<Login setNavVisible={setNavVisible}/>} />
      <Route exact path="/login" element={<Login setFooterVisible={setFooterVisible} setNavVisible={setNavVisible}/>} />
      <Route exact path="/signup" element={<Signup setNavVisible={setNavVisible}/> } />
      <Route exact path="/verifyotp" element={<VerifyOtp/>} />
      <Route exact path="/home" element={<Homepage /> } />
      <Route exact path="/CreateResume" element={<CreateResume /> } />
      <Route exact path="/EditProfile" element={<EditProfile /> } />
      <Route exact path="/ForgotPassword" element={<ForgotPassword /> } />
      <Route exact path="/MyResume" element={<MyResume /> } />
    </Routes>
    {/*!FooterVisible&&
      <div>
        <h1>Visit website</h1>
      </div>
    */}
  </BrowserRouter>
  </>  
  );
}

export default App;

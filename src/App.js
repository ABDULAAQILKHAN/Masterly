import { useState,useEffect, useRef } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Authentications/Login';
import Signup from './components/Authentications/Signup';
import VerifyOtp from './components/Authentications/VerifyOtp';
import Homepage from './components/Home/homepage';
import CreateResume from './components/profile/CreateResume';
import EditProfile from './components/profile/EditProfile';
import ConfirmBox from './components/confirmbox';
import PasswordAuth from './components/passwordAuth';
import ForgotPassword from './components/Authentications/ForgotPassword';
import OtpAuth from './components/Authentications/OtpAuth';
function App() {
  const [FooterVisible, setFooterVisible] = useState(false);
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route exact path="/login" element={<Login setFooterVisible={setFooterVisible} />} />
      <Route exact path="/signup" element={<Signup /> } />
      <Route exact path="/verifyotp" element={<VerifyOtp/>} />
      <Route exact path="/home" element={<Homepage /> } />
      <Route exact path="/CreateResume" element={<CreateResume /> } />
      <Route exact path="/EditProfile" element={<EditProfile /> } />
      <Route exact path="/Authenticate" element={<OtpAuth /> } />
      <Route exact path="/forgotpassword" element={<ForgotPassword /> } />

    </Routes>
    {!FooterVisible&&
      <div>
        <h1>Visit website</h1>
      </div>
    }
  </BrowserRouter>
  </>  
  );
}

export default App;

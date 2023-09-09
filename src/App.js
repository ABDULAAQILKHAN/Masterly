import {BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from "./components/Authentications/LandingPage";
import Login from './components/Authentications/Login';
import Signup from './components/Authentications/Signup';
import VerifyOtp from './components/Authentications/VerifyOtp';
function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage /> } />
      <Route exact path="/login" element={<Login /> } />
      <Route exact path="/signup" element={<Signup /> } />
      <Route exact path="/verifyotp" element={<VerifyOtp /> } />
    </Routes>
  </BrowserRouter>
  </>  
  );
}

export default App;

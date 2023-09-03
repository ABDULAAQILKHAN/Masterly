import {BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage /> } />
      <Route exact path="/login" element={<Login /> } />
      <Route exact path="/signup" element={<Signup /> } />


    </Routes>
  </BrowserRouter>
  </>  
  );
}

export default App;

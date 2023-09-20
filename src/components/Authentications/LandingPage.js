import React from "react";
import LandingHeader from "./Header";
const LandingPage = () =>{
    const dev = true;
    return (
    <>
    <div className="h-[100vh] bg-[#ffffff]">
            {
            //<LandingHeader />
        }
                <iframe  className="h-[100vh]" src={dev?'https://abdulaaqilkhan.github.io/MasterlyLanding/':'http://127.0.0.1:5500/Masterly/Masterly/index.html'} width="100%" height="100%"  seamless="seamless" frameborder="0" style={{overflow: 'hidden'}}/>
            
                 
            
    </div>
    </>)
}
export default LandingPage;
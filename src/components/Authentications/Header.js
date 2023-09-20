import React from "react";
import HalfLogo from "../../assets/final_half_logo.png"
import { useNavigate } from "react-router-dom";
const LandingHeader = ()=>{
    const Navigate = useNavigate();
    return(
        <>
        {/** web header 
        <div class="fixed">
        <nav class="navstyle">
            <div class="logodiv">
                <img src="./final_half_logo.png" class="logo" />
            </div>
            <div>
                <a href="http://localhost:3000/login" class="login_btn">Log in</a>
                <a href="http://localhost:3000/signup" class="signin_btn">Sign up</a>
            </div>
            </nav>
        </div>*/}
        </>

    )
}

export default LandingHeader;
import React from "react";
import { useEffect, useState } from "react";
import HalfLogo from "../assets/final_half_logo.png"
import PacmanLoader from "react-spinners/PacmanLoader";
const Signup = ()=>{
    const SignupInputStyle = {
        borderBottom: "5px solid #0f9690",
        outline: "none",
        caratr: "#6da5c0"
    }
const [Loading, setLoading] = useState(false);

const handleSignup = async ()=>{

}
    return(
        <>
        {/** parent div for login screen */}
            <div className="h-[100vh] bg-[#05161a] flex flex-col justify-center">
                {/** main container */}
                <div className="bg-[#072e33] rounded-xl h-[60%] w-[30%] self-center">
                <div className="h-[100%] flex flex-col justify-between">
                        <div className="h-[20%] flex flex-row justify-center">
                            <img src={HalfLogo} className="h-[100%]" />
                        </div>
                        <div className="h-[80%]">
                            <div className="flex flex-row justify-center">
                                <h1 className="text-white text-3xl">Signup</h1>
                            </div>
                        </div>   
                </div>   
                </div>
            </div>
        </>

    )
}

export default Signup;
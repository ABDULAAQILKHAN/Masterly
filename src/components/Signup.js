import React from "react";
import { useEffect, useState } from "react";
import HalfLogo from "../assets/final_half_logo.png"
import PacmanLoader from "react-spinners/PacmanLoader";
const Signup = ()=>{
    const SignupInputStyle = {
        borderBottom: "5px solid #0f9690",
        outline: "none",
        caratr: "#6da5c0",
    }
const [Loading, setLoading] = useState(false);

const handleSignup = async ()=>{

}
    return(
        <>
        {/** parent div for login screen */}
            <div className="h-[100vh] bg-[#05161a] flex flex-col justify-center">
                {/** main container */}
                <div className="bg-[#072e33] rounded-xl h-[90%] w-[30%] self-center">
                <div className="h-[100%] flex flex-col justify-between">
                        <div className="h-[15%] flex flex-row justify-center">
                            <img src={HalfLogo} className="h-[100%]" />
                        </div>
                        <div className="h-[85%]">
                            <div className="-my-2 flex flex-row justify-center">
                                <h1 className="text-white text-2xl">Signup</h1>
                            </div>
                        {/** user credentials fields */}
                            <div className="h-[100%] flex flex-col justify-around -my-6">
                                <div className=" h-[25%] flex flex-row justify-evenly">
                                {/**first name */}
                                        <input className="w-[40%] h-[35%] self-center bg-transparent placeho placeholder:text-white caret-[#6da5c0] text-l text-[#6da5c0]" style={SignupInputStyle} placeholder="First name" />
                                {/**last name */}
                                        <input className="w-[40%] h-[35%] self-center bg-transparent placeho placeholder:text-white caret-[#6da5c0] text-l text-[#6da5c0]" style={SignupInputStyle} placeholder="Last name" />
                                </div>
                                {/**Gender */}
                                <div className="h-[25%] flex flex-col justify-start">
                                    <select className="w-[80%] self-center h-[35%] bg-[#072e33] text-white outline-none" defaultValue={"male"}>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className=" h-[25%] flex flex-col justify-start">
                                    <input className="w-[80%] h-[35%] self-center bg-transparent placeho placeholder:text-white caret-[#6da5c0] text-xl text-[#6da5c0] " style={SignupInputStyle} placeholder="Enter Username or Email..." />
                                </div>
                                <div className=" h-[25%] flex flex-col justify-start">
                                    <input className="w-[80%] h-[35%] self-center bg-transparent placeho placeholder:text-white caret-[#6da5c0] text-xl text-[#6da5c0] " style={SignupInputStyle} placeholder="Enter Username or Email..." />
                                </div>
                            </div>
                        </div>   
                </div>   
                </div>
            </div>
        </>

    )
}

export default Signup;
import React from "react";
import HalfLogo from "../assets/final_half_logo.png"
const Login = ()=>{
    const LoginInputStyle = {
        borderBottom: "5px solid #6da5c0",
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
                                <h1 className="text-white text-3xl">Login</h1>
                            </div>
                            {/** login form containter */}
                            <div className=" h-[100%]">
                                <div className="h-[100%] flex flex-col justify-evenly">
                                    <div className=" h-[20%] flex flex-col justify-center">
                                        <input className=" w-[80%] h-[70%] self-center bg-transparent placeho placeholder:text-white" style={LoginInputStyle} placeholder="Enter Username or Email..." />
                                    </div>
                                    <div className="bg-white h-[30%]">
                                    <input />

                                    </div>
                                    <div className="bg-white h-[30%]">
                                    <button>Login</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login;
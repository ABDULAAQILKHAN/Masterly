import React from "react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import HalfLogo from "../assets/final_half_logo.png"
import PacmanLoader from "react-spinners/PacmanLoader";
const Login = ()=>{
    const LoginInputStyle = {
        borderBottom: "5px solid #0f9690",
        outline: "none",
        caratr: "#6da5c0"
    }
const [Loading, setLoading] = useState(false);

const handleLogin = async ()=>{

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
                            {/** login fields containter */}
                            <div className="-my-4 h-[100%]">
                                <div className="h-[100%] flex flex-col justify-evenly ">
                                    {/** single input field container */}
                                    <div className=" h-[25%] flex flex-col justify-start">
                                        <input className="w-[80%] h-[55%] self-center bg-transparent placeho placeholder:text-white caret-[#6da5c0] text-xl text-[#6da5c0] " style={LoginInputStyle} placeholder="Enter Username or Email..." />
                                    </div>
                                    {/** single input field container */}
                                    <div className=" h-[25%] flex flex-col justify-start ">
                                        <input className="w-[80%] h-[55%] self-center bg-transparent placeho placeholder:text-white caret-[#6da5c0] text-xl text-[#6da5c0] " style={LoginInputStyle} placeholder="Password..." />
                                    </div>
                                    {/** Login button field container */}
                                    <div className="h-[25%] flex flex-col justify-start ">
                                    <button disabled={Loading} style={{borderColor: "#6da5c0", backgroundColor: 'transparent'}} className=" self-center w-[25%] h-[40%] text-white text-xl border-2 rounded-xl hover:bg-[#0f9690] hover:text-green" onClick={()=>{
                                        setLoading(true);
                                    }}>
                                    {/** Login button animation icon and text */}
                                        {Loading?<>
                                        <div className="mx-4">
                                            <PacmanLoader
                                                color={"#6da5c0"}
                                                cssOverride={{
                                                    width: '0'
                                                }}
                                                size={15}
                                                aria-label="Loading Spinner"
                                                data-testid="loader"
                                            />
                                        </div>
                                        </>:"Login"}
                                    </button>
                                    {/** signup field and its link container */}
                                    <div className="w-[80%] my-3 self-center">
                                        <Link className="text-l text-white hover:text-[#6da5c0]" to="/signup">Create account...</Link>
                                    </div>
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
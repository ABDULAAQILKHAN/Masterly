import React from "react";
import HalfLogo from "../assets/final_half_logo.png"
import { useNavigate } from "react-router-dom";
const LandingHeader = ()=>{
    const Navigate = useNavigate();
    return(
        <>
        {/** web header */}
        <div className="h-[10vh] primaryBG border-b border-white">
            <div className="flex flex-row justify-between h-[100%]">
                <div className="h-[100%] flex flex-column justify-center min-w-[20%]">
                    <img src={HalfLogo} className="h-[100%]" />
                </div>
                <div className="h-[100%] w-[25%] flex flex-col justify-center">
                    <button style={{borderColor: "#6da5c0"}} className="self-end mx-10 bg-transparent text-white text-xl border-2 rounded-3xl p-2 hover:bg-[#0f9690] hover:text-green" onClick={()=>Navigate("/login")}>
                        Login
                    </button>
                </div>
            </div>
        </div>
        </>

    )
}

export default LandingHeader;
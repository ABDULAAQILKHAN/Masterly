import React from "react";
import HalfLogo from "../assets/final_half_logo.png"
const LandingHeader = ()=>{

    return(
        <>
        <div className="h-[10vh] bg-transparent border-b border-white">
            <div className="flex flex-row justify-between h-[100%]">
                <div className="h-[100%] flex flex-column justify-center w-[20%]">
                    <img src={HalfLogo} className="h-[100%]" />
                </div>
                <div className="h-[100%] w-[25%]">

                </div>
            </div>
        </div>
        </>

    )
}

export default LandingHeader;
import React from "react";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import HalfLogo from "../../assets/final_half_logo.png"
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from 'axios';
import path from '../../path';
const VerifyOtp = ()=>{
    const OtpInputStyle = {
        borderBottom: "5px solid #0f9690",
        outline: "none",
        caret: "#6da5c0"
    }
const [Loading, setLoading] = useState(false);
const Navigate = useNavigate();

const [otp,setotp] = useState(Number)
const handleInput = (event) =>{
    if(!isNaN(event.target.value)){
        setotp({...otp,[event.target.name]:event.target.value})
    }
    else{
        alert("Only numbers allowed");
    }
}
const handleVerify = async ()=>{
    //console.log(otp)
    if(!otp){
        alert("Enter OTP")
    }
    else{
        try{
            setLoading(true);
            const response = await axios.post(`${path}/verification`,otp)
            if(response.data.flag){
                //dispatch user info in redux
                const {flag,user,token} = response.data;
                console.log(flag,user,token)
                setLoading(false)
                alert("congo acc created")
            }
            else{
                alert(response.data.message)
                setLoading(false)
            }
        }catch(error){
            console.log("error in otp catch",error);
            setLoading(false);
            
        }
    }

}
    return(
        <>
        {/** parent div for login screen */}
            <div className="h-[100vh] bg-[#05161a] flex flex-col justify-center">
                {/** main container */}
                <div className="bg-[#072e33] rounded-xl h-[70%] self-center w-[90vw] md:max-w-[60vw] xl:w-[30%]">
                    <div className="h-[100%] flex flex-col justify-between">
                        <div className="h-[20%] flex flex-row justify-center">
                            <img src={HalfLogo} className="h-[100%]" />
                        </div>
                        <div className="h-[80%]">
                            <div className="flex flex-row justify-center ">
                                <h1 className="text-white text-2xl">Authentication</h1>
                            </div>
                            {/** login fields containter */}
                            <div className=" h-[100%]">
                                <div className="h-[80%] flex flex-col justify-between ">
                                    {/** single input field container */}
                                    <h3 className="text-white self-center my-3">Enter otp sent on your Email</h3>
                                    <input 
                                        className="w-[80%] h-[45px] self-center bg-transparent placeho placeholder:text-white caret-[#6da5c0] text-[1.1rem] text-[#6da5c0]" style={OtpInputStyle} 
                                        placeholder={"Enter OTP here"} 
                                        name="otp"
                                        type="number"
                                        onChange={handleInput}
                                    />
                                    <span style={{visibility: 'hidden'}} className="text-[red] self-center p-1">this is to genereate error</span>
                                    {/** Login button field container */}
                                    <div className="flex flex-col h-[35%] justify-between">
                                    <button disabled={Loading} style={{borderColor: "#6da5c0", backgroundColor: 'transparent'}} className=" self-center w-[25%] h-[40px] text-white text-xl border-2 rounded-xl hover:bg-[#0f9690] hover:text-green" onClick={()=>{
                                        handleVerify()
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
                                        </>:"Verify"}
                                    </button>
                                    {/** signup field and its link container */}
                                    <div className="w-[80%] self-center">
                                        <Link className="text-l text-white hover:text-[#6da5c0]" to="/signup">Redend Otp...</Link>
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

export default VerifyOtp;
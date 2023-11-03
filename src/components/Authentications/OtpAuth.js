import React from "react";
import { useEffect, useState } from "react";
import {Link, Navigate, useLocation} from 'react-router-dom';
import HalfLogo from "../../assets/final_half_logo.png"
import PacmanLoader from "react-spinners/PacmanLoader";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import path from '../../path';
import "../css/global.css";
import { ArrowLeft } from "react-feather";
const OtpAuth = ({setFooterVisible})=>{
const Navigate = useNavigate();

const [LoadingState,setLoadingState] = useState("Send OTP")
const [userError, setUserError] = useState("");
const [userErrorVisible, setUserErrorVisible] = useState(false);
const [otpSent, setOtpSent] = useState(true)

useEffect(()=>{
  console.log(location.pathname)
  location.pathname === "/login"&&setFooterVisible(true)
})

const [input,setInput] = useState({
    uniqueId: '',
    otp: ''
})
const handleInput = (event) =>{
    setInput({...input,[event.target.name]:event.target.value})
}
const handleSendOtp = async ()=>{
    //console.log(input)
    if(input.uniqueId === ''){
        setUserError("Enter Unique Id or Email!");
        setUserErrorVisible(true)
    }
    else{
        console.log(input.uniqueId)
        try{
            setLoadingState("Sending...");
            const response = await axios.post(`${path}/sendotp`,{uniqueId: input.uniqueId})
            if(response.data.flag){
                setUserError("");
                setUserErrorVisible(false)
                alert("found")
                setOtpSent(false)
                setLoadingState("Sent")
            }
            else{
                setUserError(response.data.message);
                setUserErrorVisible(false)
                setLoadingState("Send OTP")
            }
        }catch(error){
            alert("try again later")
            console.log("error in login catch",error);
            setLoadingState("Send OTP");
            
        }
    }

}
    return(
        <>
        {/** parent div for login screen */}
            <div className="h-[100vh] w-[100vw] allCenter">
                {/** main container */}
                <div className="whiteCard h-fit self-center w-[95%] md:max-w-[60vw] xl:w-[30%] anim">
                    <div className="h-[100%] allCenter justify-between">
                        <div className="h-[80px] flex flex-row justify-center bg-black opacity-80 z-10">
                            <img src={HalfLogo} className="z-15 h-[100%]" />
                        </div>
                        <div className="h-[80%] flex flex-col justify-between">
                            <div className="flex flex-row justify-between p-3 border border-b-ThemeBorder">
                            <button className="self-center text-[#FF5500] w-fit h-fit" onClick={()=>Navigate("/login")}>
                        <ArrowLeft />
                        </button>
                                <h1 className=" text-[1.3rem]">Reset Password</h1>
                            </div>
                            {/** fields containter */}
                            {otpSent?<div className="p-3 h-[100%]  allCenter">
                            <div className="flex flex-col justify-start ">
                                        <input 
                                        className="w-[80%] sm:w-[60%] h-[50px] self-center bg-transparent placeho placeholder: caret-[#FF5500] text-[1.1rem]  inputBorder" 
                                        placeholder="Enter Username or Email..." 
                                        name="uniqueId"
                                        onChange={handleInput}
                                        />
                                        <span style={{visibility: userErrorVisible}} className="text-[red] self-center p-1">{userError}</span>
                            </div>
                            <div className="allCenter w-[100%] h-[100%] p-4">
                                <button className="button p-3 text-[1rem] self-center" 
                                onClick={handleSendOtp}
                                >{LoadingState}</button>
                            </div>
                            </div>:<div className=" h-[100%]  allCenter">
                            <div className="flex flex-col justify-start ">
                                        <input 
                                        className="w-[80%] sm:w-[60%] h-[50px] self-center bg-transparent placeho placeholder: caret-[#FF5500] text-[1.1rem]  inputBorder" 
                                        placeholder="Enter OTP" 
                                        name="otp"
                                        onChange={handleInput}
                                        type="number"
                                        />
                                        <span style={{visibility: userErrorVisible}} className="text-[red] self-center p-1">{userError}</span>
                            </div>
                            <div className="allCenter w-[100%] h-[100%] p-4">
                                <button className="button p-3 text-[1rem] self-center">Verify</button>
                            </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default OtpAuth;
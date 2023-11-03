import React from "react";
import { useState } from "react";
import {Link, useNavigate, useLocation} from 'react-router-dom';
import HalfLogo from "../../assets/final_half_logo.png"
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import {updateUserDetails} from "../../redux/userReducer";
import { useSelector, useDispatch } from 'react-redux'

const VerifyOtp = ()=>{
const dispatch = useDispatch();
const location = useLocation();
const [Loading, setLoading] = useState("Verify");
const Navigate = useNavigate();
const [LoadingState,setLoadingState] = useState("Resend OTP...")
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
            setLoading("Verifying...");
            const response = await axios.post(`${path}/verification`,otp)
            if(response.data.flag){
                let user = {
                    user:response.data.user,token:response.data.token
                }
                dispatch(updateUserDetails(user))
                Navigate("/login")
                setLoading("Verifyied");
            }
            else{
                alert(response.data.message)
                setLoading("Verify")
            }
        }catch(error){
            console.log("error in otp catch",error);
            setLoading("Verify");            
        }
    }

}
const handleResendOtp = async()=>{
    alert(location.state.uniqueId)
    try{
        setLoadingState("Sending...");
        const response = await axios.post(`${path}/sendotp`,{uniqueId: location.state.uniqueId,type: "ResendOtp"})
        if(response.data.flag){
            setLoadingState("OTP Sent")
        }
        else{
            alert(response.data.message);
            setLoadingState("Resend OTP")
        }
    }catch(error){
        alert("try again later")
        console.log("error in otp send catch",error);
        setLoadingState("Resend OTP");
        
    }
}
    return(
        <>
        {/** parent div for login screen */}
            <div className="h-[100vh] w-[100vw] allCenter justify-center">
                {/** main container */}
                <div className="whiteCard h-fit self-center w-[95%] md:max-w-[60vw] xl:w-[30%] anim">
                    <div className="h-[100%] flex flex-col justify-between">
                        <div className="h-[20%] flex flex-row justify-center bg-black opacity-80">
                            <img src={HalfLogo} className="h-[100%]" />
                        </div>
                        <div className="h-[80%]">
                            <div className="flex flex-row justify-center  p-3">
                                <h1 className=" text-2xl">Authentication</h1>
                            </div>
                            {/** login fields containter */}
                            <div className=" h-[100%]">
                                <div className="h-[80%] flex flex-col justify-evenly ">
                                    {/** single input field container */}
                                    <h3 className=" self-center my-3">Enter otp sent on your Email</h3>
                                    <input 
                                        className="w-[80%] h-[50px] self-center bg-transparent placeho placeholder: caret-[#FF5500] text-[1.1rem] inputBorder"
                                        placeholder={"Enter OTP here"} 
                                        name="otp"
                                        type="number"
                                        onChange={handleInput}
                                    />
                                    <span style={{visibility: 'hidden'}} className="text-[red] self-center p-1">this is to genereate error</span>
                                    {/** Login button field container */}
                                    <div className="flex flex-col h-[35%] justify-between">

                                    <button className=" self-center text-xl button" onClick={()=>{
                                        handleVerify()
                                    }}>
                                    {/** Login button animation icon and text */}
                                        {Loading}
                                    </button>
                                    {/** signup field and its link container */}
                                    <div className="w-[80%] self-center">
                                        <h2 className="text-l  hover:text-[#FF5500] cursor-pointer" onClick={handleResendOtp}>{LoadingState}</h2>
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
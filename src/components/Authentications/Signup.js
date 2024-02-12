import React from "react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import HalfLogo from "../../assets/final_half_logo.png"
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from 'axios';
import path from '../../path';
import { useNavigate } from "react-router-dom";
import "../css/global.css";

const Signup = ()=>{

const Navigate = useNavigate();
const [Loading, setLoading] = useState(false);
const [ButtonState, setButtonState] = useState('Join');
const [nameError,setnameError] = useState("");
const [nameErrorVisible,setnameErrorVisible] = useState(false);
const [uniqueIdError,setuniqueIdError] = useState("");
const [uniqueIdErrorVisible,setuniqueIdErrorVisible] = useState(false);
const [passError,setpassError] = useState("");
const [passErrorVisible,setpassErrorVisible] = useState(false);
const [cpassError,setcpassError] = useState("");
const [cpassErrorVisible,setcpassErrorVisible] = useState(false);
const [Check, setCheck] = useState({
    name: false,
    uniqueId: false,
    password: false,
    cpassword: false,
});
const [SignupCred,setSignupCred] = useState({
    name: '',
    uniqueId: '',
    password: '',
    cpassword: '',
})
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i ;
const pattern = /[0-9]/g ;
const handleInput = (event) =>{
    console.log(event.target.name,event.target.value)
    setSignupCred({...SignupCred,[event.target.name]:event.target.value})
    switch(event.target.name){
        case "name":    nameAuthorizer(event.target.value);
        break;
        case "uniqueId":    UniqueIdAuthorizer(event.target.value);
        break;
        case "password":    passwordAuthorizer(event.target.value);
        break;
        case "cpassword":    cpasswordAuthorizer(event.target.value);
        break;
        default: return false;
    }
}

const nameAuthorizer = (value)=>{
    if(value.length < 5 ){
        setnameError("Enter full Name");
        setnameErrorVisible(true)
        setCheck({...Check,name: false})
        return false;
    }
    else{
        setCheck({...Check,name: true})
        setnameError("");
        setnameErrorVisible(false)
        return true;
    }
}
const UniqueIdAuthorizer = (value)=>{
    if(value.length < 6 || !regex.test(value)){
        setuniqueIdError("Enter correct Email ID");
        setuniqueIdErrorVisible(true);
        setCheck({...Check,uniqueId: false})      
        return false;  
    }
    else{
        setCheck({...Check,uniqueId: true})        
        setuniqueIdError("");
        setuniqueIdErrorVisible(false)
        return true;
    }

}
const passwordAuthorizer = (value)=>{
    if(!value.match(pattern) || !value.match('@') || value.length <= 9 || value >=38 ){
        setpassError("include @,A,a and a number");
        setpassErrorVisible(true)
        return false;
    }
    else{
        setCheck({...Check,password: true})        
        setpassError("");
        setpassErrorVisible(false)
        return true;
    }
}
const cpasswordAuthorizer = (value)=>{
    if( value !== SignupCred.password){
        setcpassError("Confirm password does not match!");
        setcpassErrorVisible(true)
        setCheck({...Check,cpassword: false})    
        return false;    
    }
    else{
        setCheck({...Check,cpassword: true})        
        setcpassError("");
        setcpassErrorVisible(false)
        return true;
    }
}
const allErrorsTrue = ()=>{
    setnameError("Enter name");
    setnameErrorVisible(true);
    setuniqueIdError("Enter Unique Id");
    setuniqueIdErrorVisible(true);
    setpassError("Enter password");
    setpassErrorVisible(true);
    setcpassError("Confirm password");
    setcpassErrorVisible(true);
}
const allErrorsFalse = ()=>{
    setnameError("");
    setnameErrorVisible(false);
    setuniqueIdError("");
    setuniqueIdErrorVisible(false);
    setpassError("");
    setpassErrorVisible(false);
    setcpassError("");
    setcpassErrorVisible(false);
}
const blankCheck = ()=>{
    if(SignupCred.name !== '' || SignupCred.uniqueId !== '' || SignupCred.password !== '' || SignupCred.cpassword !== ''){
        allErrorsFalse()
        return true;
    }
    else{
        allErrorsTrue()
        return false;
    }
}
/**
 * Check.name && Check.uniqueId && Check.cpassword && Check.password
 */
const PostRequest = async ()=>{
        try{
            setLoading(true);
            setButtonState("Sending OTP...")
            console.log(SignupCred)
            const response = await axios.post(`${path}/signup`,SignupCred)
            if(response.data.flag){
                //alert(response.data.token)
                setLoading(false)
                Navigate('/verifyotp',{state:{uniqueId: SignupCred.uniqueId}})
            }
            else{
                alert(response.data.message)
                setLoading(false)
                setButtonState("Join")
            }

        }catch(error){
            console.log("error in signup catch",error);
            setLoading(false);
            setButtonState("Join")
        }
}
const handleSignup = ()=>{        
        if(blankCheck()){
            console.log(Check)
            if(nameAuthorizer(SignupCred.name)){
                if(UniqueIdAuthorizer(SignupCred.uniqueId)){
                    if(passwordAuthorizer(SignupCred.password)){
                        if(cpasswordAuthorizer(SignupCred.cpassword)){
                            PostRequest();
                            allErrorsFalse();
                        }
                    }
                }
            }
    }

}
    return(
        <>
        {/** parent div for signup screen */}
            <div className="h-[100vh] w-[100vw] allCenter">
                {/** main container */}
                <div className="whiteCard h-fit self-center w-[95%] sm:w-[80%] md:max-w-[60vw] xl:w-[30%] anim">
                    <div className="h-[100%] flex flex-col justify-start">
                        <div className="h-[80px] flex flex-row justify-center bg-black opacity-80">
                            <img src={HalfLogo} className="h-[100%]" />
                        </div>
                        <div className="h-[80%]">
                            <div className="flex flex-row justify-center p-4">
                                <h1 className=" text-[1.5rem] ">Signup</h1>
                            </div>
                            {/** signup fields containter */}
                            <div className=" h-[100%] ">
                                <div className="h-[100%] flex flex-col justify-evenly ">
                                    {/** all input field container */}
                                    <div className="flex flex-col justify-center gap-5 h-[80%]">
                                        <div className="flex flex-col">
                                            <input 
                                                className="w-[80%] h-[45px] self-center bg-transparent inputBorder caret-[#FF5500] text-[1.1rem]" 
                                                placeholder={"Enter Your Full name"} 
                                                name="name"
                                                type="text"
                                                //onFocus={nameAuthorizer}
                                                //onBlur={nameAuthorizer}
                                                //onChange={(event)=>{nameAuthorizer();handleInput(event)}}
                                                onChange={handleInput}
                                            />
                                            <span style={{visibility: nameErrorVisible}} className="text-[red] self-center p-1">{nameError}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <input 
                                                className="w-[80%] h-[45px] self-center bg-transparent inputBorder caret-[#FF5500] text-[1.1rem]" 
                                                placeholder={"Enter Your Email id"} 
                                                name="uniqueId"
                                                type="email"
                                                onChange={handleInput}
                                            />
                                            <span style={{visibility: uniqueIdErrorVisible}} className="text-[red] self-center p-1">{uniqueIdError}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <input 
                                                className="w-[80%] h-[45px] self-center bg-transparent inputBorder caret-[#FF5500] text-[1.1rem]" 
                                                placeholder={"Enter Strong password"} 
                                                name="password"
                                                type="password"
                                                //onFocus={passwordAuthorizer}
                                                //onBlur={passwordAuthorizer}
                                                onChange={handleInput}
                                            />
                                            <span style={{visibility: passErrorVisible}} className="text-[red] self-center p-1">{passError}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <input 
                                                className="w-[80%] h-[45px] self-center bg-transparent inputBorder caret-[#FF5500] text-[1.1rem]" 
                                                placeholder={"Confirm password"} 
                                                name="cpassword"
                                                type="password"
                                                onChange={handleInput}
                                            />
                                            <span style={{visibility: cpassErrorVisible}} className="text-[red] self-center p-1">{cpassError}</span>
                                        </div>
                                    </div>

                                    {/** signup button field container */}
                                    <div className="allCenter justify-center my-5 h-[20%]">
                                    <button disabled={Loading} className="self-center p-1 text-[1.1rem] button" onClick={()=>{
                                        handleSignup()
                                    }}>
                                    {ButtonState}
                                    </button>
                                    {/** signup field and its link container */}
                                    <div className="w-[80%] h-[80px] p-6  self-center allCenter justify-center">
                                        <Link className="text-l  text-[#FF5500]" to="/login">Already have a account...</Link>
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

export default Signup;
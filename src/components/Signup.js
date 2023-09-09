import React from "react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import HalfLogo from "../assets/final_half_logo.png"
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from 'axios';
import path from '../path';
import { useNavigate } from "react-router-dom";

const Signup = ()=>{
    const signupInputStyle = {
        borderBottom: "5px solid #0f9690",
        outline: "none",
        caret: "#6da5c0"
    }
const Navigate = useNavigate();
const [Loading, setLoading] = useState(false);
const [allValid,setAllValid] = useState(false);

const auth = {
    headers: {
      "Access-Control-Allow-Origin": `${path}`,
      //Authorization: `Bearer ${token}`,
    }
  };
const [SignupCred,setSignupCred] = useState({
    name: '',
    uniqueId: '',
    password: '',
    cpassword: '',
})
const handleInput = (event) =>{
    setSignupCred({...SignupCred,[event.target.name]:event.target.value})
}

const handleSignup = async ()=>{
    //console.log(SignupCred)
    if(SignupCred.name === '' || SignupCred.uniqueId === '' || SignupCred.password === '' || SignupCred.cpassword === ''){
        alert("One of the field is empty");
        return false;
    }
    if(SignupCred.password !== SignupCred.cpassword){
        alert("password doesnot match");
        return false;
    }
        try{
            setLoading(true);
            console.log(SignupCred)
            const response = await axios.post(`${path}/signup`,SignupCred)
            if(response.data.flag){
                //alert(response.data.token)
                setLoading(false)
                Navigate('/login')
            }
            else{
                alert(response.data.message)
                setLoading(false)
            }

        }catch(error){
            console.log("error in signup catch",error);
            setLoading(false);
            
        }
    

}
    return(
        <>
        {/** parent div for signup screen */}
            <div className="h-[100vh] bg-[#05161a] flex flex-col justify-center">
                {/** main container */}
                <div className="bg-[#072e33] rounded-xl h-[90%] self-center w-[90vw] md:max-w-[60vw] xl:w-[30%]">
                    <div className="h-[100%] flex flex-col justify-between">
                        <div className="h-[20%] flex flex-row justify-center">
                            <img src={HalfLogo} className="h-[100%]" />
                        </div>
                        <div className="h-[80%]">
                            <div className="flex flex-row justify-center">
                                <h1 className="text-white text-2xl">Signup</h1>
                            </div>
                            {/** signup fields containter */}
                            <div className="-my-4 h-[100%]">
                                <div className="h-[100%] flex flex-col justify-evenly ">
                                    {/** all input field container */}
                                    <div className="flex flex-col justify-evenly  h-[100%] ">
                                        <div className="flex flex-col">
                                            <input 
                                                className="w-[80%] h-[45px] self-center bg-transparent placeho placeholder:text-white caret-[#6da5c0] text-[1.1rem] text-[#6da5c0]" style={signupInputStyle} 
                                                placeholder={"Enter Your Full name"} 
                                                name="name"
                                                type="text"
                                                onChange={handleInput}
                                            />
                                            <span style={{visibility: 'hidden'}} className="text-[red] self-center p-1">this is to genereate error</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <input 
                                                className="w-[80%] h-[45px] self-center bg-transparent placeho placeholder:text-white caret-[#6da5c0] text-[1.1rem] text-[#6da5c0]" style={signupInputStyle} 
                                                placeholder={"Enter Your Email id"} 
                                                name="uniqueId"
                                                type="email"
                                                onChange={handleInput}
                                            />
                                            <span style={{visibility: 'hidden'}} className="text-[red] self-center p-1">this is to genereate error</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <input 
                                                className="w-[80%] h-[45px] self-center bg-transparent placeho placeholder:text-white caret-[#6da5c0] text-[1.1rem] text-[#6da5c0]" style={signupInputStyle} 
                                                placeholder={"Enter Strong password"} 
                                                name="password"
                                                type="password"
                                                onChange={handleInput}
                                            />
                                            <span style={{visibility: 'hidden'}} className="text-[red] self-center p-1">this is to genereate error</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <input 
                                                className="w-[80%] h-[45px] self-center bg-transparent placeho placeholder:text-white caret-[#6da5c0] text-[1.1rem] text-[#6da5c0]" style={signupInputStyle} 
                                                placeholder={"Confirm password"} 
                                                name="cpassword"
                                                type="password"
                                                onChange={handleInput}
                                            />
                                            <span style={{visibility: 'hidden'}} className="text-[red] self-center p-1">this is to genereate error</span>
                                        </div>
                                    </div>

                                    {/** signup button field container */}
                                    <div className="flex flex-col justify-start ">
                                    <button disabled={Loading} style={{borderColor: "#6da5c0", backgroundColor: Loading?'black':'transparent'}} className="self-center w-[25%] h-[40px] text-white text-xl border-2 rounded-xl hover:bg-[#0f9690] hover:text-green" onClick={()=>{
                                        handleSignup()
                                    }}>
                                    {/** signup button animation icon and text */}
                                        {Loading?<>
                                        <div className="mx-6">
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
                                        </>:"Join"}
                                    </button>
                                    {/** signup field and its link container */}
                                    <div className="w-[80%] my-6 self-center">
                                        <Link className="text-l text-white hover:text-[#6da5c0]" to="/login">Already have a account...</Link>
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
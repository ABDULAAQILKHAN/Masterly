import React from "react";
import { useEffect, useState } from "react";
import {Link, Navigate} from 'react-router-dom';
import HalfLogo from "../../assets/final_half_logo.png"
import PacmanLoader from "react-spinners/PacmanLoader";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import path from '../../path';
import "../css/global.css";
import { useSelector, useDispatch } from 'react-redux';
const Login = ()=>{
const Navigate = useNavigate();
const dispatch = useDispatch();
const [Loading, setLoading] = useState(false);
const auth = {
    headers: {
    "Content-Type": "application/json",
      "Access-Control-Allow-Origin": `${path}`,
      //Authorization: `Bearer ${token}`,
    }
  };
  useEffect(()=>{
    let  data  = JSON.parse(localStorage.getItem("local"))
    data?.token&&Navigate("/home")
  },[])
const [LoginCred,setLoginCred] = useState({
    uniqueId: '',
    password: '',
})
const handleInput = (event) =>{
    setLoginCred({...LoginCred,[event.target.name]:event.target.value})
}
const handleLogin = async ()=>{
    //console.log(LoginCred)
    if(LoginCred.uniqueId === '' || LoginCred.password === ''){
        alert("Username or password missing")
    }
    else{
        try{
            setLoading(true);
            const response = await axios.post(`${path}/login`,LoginCred,auth)
            if(response.data.flag){
                //dispatch user info in redux
                //const {flag,user,token} = response.data;
                //console.log(flag,user,token)
                let local = {
                    user:response.data.user,token:response.data.token
                }
                //dispatch(updateUserDetails(local));
                localStorage.setItem("local",JSON.stringify(local))
                Navigate("/home")
                setLoading(false)
            }
            else{
                alert(response.data.message)
                setLoading(false)
            }
        }catch(error){
            alert("try again later")
            console.log("error in login catch",error);
            setLoading(false);
            
        }
    }

}
    return(
        <>
        {/** parent div for login screen */}
            <div className="h-[100vh] bg-primaryBG flex flex-col justify-center">
                {/** main container */}
                <div className="whiteCard rounded-xl h-[70%] self-center w-[90vw] md:max-w-[60vw] xl:w-[30%] anim">
                    <div className="h-[100%] flex flex-col justify-between">
                        <div className="h-[20%] flex flex-row justify-center bg-black opacity-80 z-10">
                            <img src={HalfLogo} className="z-15 h-[100%]" />
                        </div>
                        <div className="h-[80%] flex flex-col justify-between">
                            <div className="flex flex-row justify-center p-3">
                                <h1 className=" text-2xl">Login</h1>
                            </div>
                            {/** login fields containter */}
                            <div className=" h-[100%]">
                                <div className="h-[100%] flex flex-col justify-around ">
                                    {/** single input field container */}
                                    <div className="flex flex-col justify-start ">
                                        <input 
                                        className="w-[80%] h-[50px] self-center bg-transparent placeho placeholder: caret-[#FF5500] text-[1.1rem]  inputBorder" 
                                        placeholder="Enter Username or Email..." 
                                        name="uniqueId"
                                        onChange={handleInput}
                                        />
                                        <span style={{visibility: 'hidden'}} className="text-[red] self-center p-1">this is to genereate error</span>
                                    </div>
                                    {/** single input field container */}
                                    <div className=" flex flex-col justify-start ">
                                        <input className="w-[80%] h-[50px] self-center bg-transparent placeho placeholder: caret-[#FF5500] text-[1.1rem] inputBorder" 
                                        placeholder="Password..." 
                                        type="password"
                                        name="password"
                                        onChange={handleInput}
                                        />
                                        <span style={{visibility: 'hidden'}} className="text-[red] self-center p-1">this is to genereate error</span>
                                    </div>
                                    {/** Login button field container */}
                                    <div className="flex flex-col justify-start ">
                                    <button disabled={Loading} className=" self-center w-[25%] h-[40px]  text-xl button" onClick={()=>{
                                        handleLogin()
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
                                    <div className="w-[80%] my-6 self-center">
                                        <Link className="text-l  hover:text-[#FF5500]" to="/signup">Create account...</Link>
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
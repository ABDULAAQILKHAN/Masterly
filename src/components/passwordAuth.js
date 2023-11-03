import React, { useState } from "react";
import { useSelector } from 'react-redux'
import "./css/global.css";
import {X} from 'react-feather';
import path from "../path";
import axios from "axios";
//import AuthConfig from './authconfig';
const PasswordAuth = ({setConfirm,setConfirmbox}) => {
    const [input,setInput] = useState("")
    const user = useSelector((state)=> state.user)
    const [errors,setErrors] = useState('')
    const auth = {
        headers: {
        "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${path}`,
          Authorization: `Bearer ${user.token}`,
        }
      };
    const handleInput = (event) =>{
        setInput(event.target.value)
    }
    const handleAuthenticate = async ()=>{
        //console.log(user.token)
        if(input.length>0)
        try{
            let data = {
                id: user._id,
                uniqueId: user.uniqueId,
                pass: input
            }
            const response = await axios.post(`${path}/AuthenticatePassword`,data,auth)
            //console.log(response.data)
            if(response.data.flag){
                errors.length>0&&setErrors("");
                setConfirmbox(false)
                setConfirm(true)
            }
            else{
                setErrors(response.data.message)
                console.log(response.data.flag,response.data.message)
            }
        }catch(error){
            console.log(error)
        }
        else alert("Enter password!")
    }
    return(<>
        <div className="h-[90vh] w-[100vw] absolute left-0 backdrop-blur-sm allCenter">
            <div className="h-fit w-[90%] sm:w-[60%] bg-black secondaryCard self-center pb-4">
    
                <div className="w-[100%] border-2 border-b-ThemeBorder p-3 flex flex-row justify-between">
                    <h2 className="text-[1rem]">
                        Please Confirm
                    </h2>
                    <button onClick={()=>setConfirmbox(false)}>
                        <X />
                    </button>
                </div>
                <div className="allCenter h-[100%] p-4">
                <div className="h-fit w-[100%] allCenter">
                    <h2 className="w-fit self-start mx-4">Please enter password to verify!</h2>
                </div>
                <div className="h-fit w-[100%] my-3 allCenter">
                    <input
                    className="w-[95%] inputBorder self-center mx-4" 
                    placeholder="Enter password here"
                    onChange={handleInput}
                    type="password"
                    />
                    {errors.length>0&&<span className="pt-3 text-[1rem] text-red-600">{errors}</span>}
                </div>
                <div className="w-[100%] h-fit allCenter justify-start">
                    <button className="button h-[40px] w-[200px] self-center" onClick={handleAuthenticate}>Authenticate</button>
                </div>
                </div>
            </div>
        </div>
    </>)
}
export default PasswordAuth;
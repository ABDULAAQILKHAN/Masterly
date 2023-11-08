import React, { useState } from "react";
import { useSelector } from 'react-redux'
import "../css/global.css";
import {X} from 'react-feather';
import path from "../../path";
import axios from "axios";
const ResetPassAndEmail = ({setpassEmail}) => {
    const user = useSelector((state)=> state.user)
    const [input,setInput] = useState({
        uniqueId: user.uniqueId,
        newPassword: "",
        cnewPassword: "",
        otp: ""
    })
    //const [UniqueIdError,setUniqueIdError] = useState("");
    //const [UniqueIdErrorVisible,setUniqueIdErrorVisible] = useState(false);
    //const [passError,setpassError] = useState("");
    //const [passErrorVisible,setpassErrorVisible] = useState(false);
    const [LoadingState, setLoadingState] = useState("Change Password")
    const [newpassError,setnewpassError] = useState("");
    const [newpassErrorVisible,setnewpassErrorVisible] = useState(false);
    const [otpError, setOtpError] = useState("");
    const [OtpErrorVisible, setOtpErrorVisible] = useState(false);
    const [CnewPassError,setCnewPassError] = useState("");
    const [CnewPassErrorVisible,setCnewPassErrorVisible] = useState(false);
    const [errors,setErrors] = useState('')
    const pattern = /[0-9]/g ;
    //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i ;

    const auth = {
        headers: {
        "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${path}`,
          Authorization: `Bearer ${user.token}`,
        }
      };
      /*
      const uniqueIdAuthorizer = (value)=>{
        if(value.length < 6 || !regex.test(value)){
            setUniqueIdError("Enter correct Unique Id!");
            setUniqueIdErrorVisible(true)
        }
        else{
            setUniqueIdError("");
            setUniqueIdErrorVisible(false)
        }
    
    }
*/
    const newpasswordAuthorizer = (value)=>{
        if(!value.match(pattern) || !value.match('@') || value.length <= 9 || value >=38 ){
            setnewpassError("Enter Password according to criteria");
            setnewpassErrorVisible(true)
        }

        else{
            setnewpassError("");
            setnewpassErrorVisible(false)
        }
    }
    const CnewPassAuthorizer = (value)=>{
        if(value.length < 1 || value !== input.newPassword){
            setCnewPassError("Password does not match!");
            setCnewPassErrorVisible(true)
        }
        else{
            setCnewPassError("");
            setCnewPassErrorVisible(false)
        }
    }
    const handleInput = (event) =>{
        setInput({...input,[event.target.name]:event.target.value})
        switch(event.target.name){
            case "newPassword":    newpasswordAuthorizer(event.target.value);
            break;
            case "cnewPassword":    CnewPassAuthorizer(event.target.value);
            break;
            default: return false;
        }
    }
    const handleChangePassword = async ()=>{
        setLoadingState("Changing...")
        //console.log(user.token)
        if(input.uniqueId.length>0 && input.newPassword.length>0 && input.otp.length>0){
        try{
            let data = {
                uniqueId: user.uniqueId,
                password: input.newPassword,
                otp: input.otp
            }
            const response = await axios.post(`${path}/updatePassword`,data)
            //console.log(response.data)
            if(response.data.flag){
                setpassEmail(false)
                setOtpError("")
                setOtpErrorVisible(false)
                setLoadingState("Changed.")
            }
            else{
                if(response.data.type === "pass"){
                    setnewpassError(response.data.message);
                    setnewpassErrorVisible(true)
                }
                else{
                    setOtpError(response.data.message)
                    setOtpErrorVisible(true)
                }
                setLoadingState("Change Password")
                console.log(response.data.flag,response.data.message)
            }
        }catch(error){
            setLoadingState("Change Password")
            console.log(error)
        }}
        else{ alert("Enter password!")}
    }
    return(<>
        <div className="h-[90vh] w-[100vw] absolute left-0 backdrop-blur-sm allCenter">
            <div className="h-fit w-[90%] sm:w-[60%] bg-black secondaryCard self-center pb-4">
    
                <div className="w-[100%] border-2 border-b-ThemeBorder p-3 flex flex-row justify-between">
                    <h2 className="text-[1.2rem]">
                        Update Email | password
                    </h2>
                    <button onClick={()=>setpassEmail(false)}>
                        <X />
                    </button>
                </div>
                <div className="allCenter h-[100%] p-4">
                <div className="h-fit w-[100%] allCenter">
                    <h2 className="w-fit self-start mx-4 text-[1.1rem]">Please enter all the fields carefully!</h2>
                </div>
                <div className="allCenter gap-2 my-4">
                    {
                        /**
                         * 
                <div className="flex flex-col">
                    <input 
                        className="w-[80%] h-[45px] self-center bg-transparent inputBorder caret-[#FF5500] text-[1.1rem]" 
                        placeholder={input.newUniqueId} 
                        name="newUniqueId"
                        type="text"
                        onChange={handleInput}
                    />
                    <span style={{visibility: UniqueIdErrorVisible}} className="text-[red] self-center p-1">{UniqueIdError}</span>
                </div>
                <div className="flex flex-col">
                    <input 
                        className="w-[80%] h-[45px] self-center bg-transparent inputBorder caret-[#FF5500] text-[1.1rem]" 
                        placeholder={"Enter old password"} 
                        name="password"
                        type="password"
                        onChange={handleInput}
                    />
                    <span style={{visibility: passErrorVisible}} className="text-[red] self-center p-1">{passError}</span>
                </div>
                    */
               }
                <div className="flex flex-col">
                    <input 
                        className="w-[80%] h-[45px] self-center bg-transparent inputBorder caret-[#FF5500] text-[1.1rem]" 
                        placeholder={"Enter new password"} 
                        name="newPassword"
                        type="password"
                        onChange={handleInput}
                    />
                    <span style={{visibility: newpassErrorVisible}} className="text-[red] self-center p-1">{newpassError}</span>
                </div>
                <div className="flex flex-col">
                    <input 
                        className="w-[80%] h-[45px] self-center bg-transparent inputBorder caret-[#FF5500] text-[1.1rem]" 
                        placeholder={"confirm new password"} 
                        name="cnewPassword"
                        type="password"
                        onChange={handleInput}
                    />
                    <span style={{visibility: CnewPassErrorVisible}} className="text-[red] self-center p-1">{CnewPassError}</span>
                </div>
                <div className="flex flex-col">
                    <input 
                        className="w-[80%] h-[45px] self-center bg-transparent inputBorder caret-[#FF5500] text-[1.1rem]" 
                        placeholder={"Enter OTP"} 
                        name="otp"
                        type="number"
                        onChange={handleInput}
                    />
                    <span style={{visibility: OtpErrorVisible}} className="text-[red] self-center p-1">{otpError}</span>
                </div>
                </div>
                <div className="w-[100%] my-4 h-fit allCenter justify-start">
                    <button className="button h-[40px] w-[200px] self-center" onClick={handleChangePassword}>{LoadingState}</button>
                </div>
                </div>
            </div>
        </div>
    </>)
}
export default ResetPassAndEmail;
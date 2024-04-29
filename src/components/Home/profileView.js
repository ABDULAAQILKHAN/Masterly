import React from "react";
import { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import '../css/global.css';
import { useSelector } from 'react-redux'
import { Star, LogOut, ArrowUpRight, ArrowRight, FilePlus, FileText, Edit3, BookOpen, Home } from "react-feather";
import axios from "axios";
import path from "../../path";
import ConfirmBox from "../confirmbox";

const ProfileView = ({setProfileToggle})=>{
    let user = useSelector(state=> state.user)
    const Navigate = useNavigate();
    const [confirmBox,setConfirmbox] = useState(false);
    const [confirm,setConfirm] = useState(false);
    const [confirmMessage,setConfirmMessage] = useState("")
    useEffect(()=>{
        //console.log("profile view",user)
    },[user])
    
    const auth = {
        headers: {
        "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${path}`,
          Authorization: `Bearer ${user.token}`,
        }
      };
      
    const tobase64converter = (file)=>{
        return new Promise((resolve, reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () =>{
                resolve(fileReader.result)
            };
            fileReader.onerror = (error)=>{
                reject(error)
            }
        })
    } 
    const handleProfileImageUpload = async (event)=>{
        const file = event.target.files[0];
        if(!file){
        }else{   }         
            const base64 = await tobase64converter(file);
            console.log(base64);
            try{
                const response = await axios.post(`${path}/uploadProfile`,base64,auth)
                if(response.data.flag){
                    console.log("res data",response.data.ResponseData)
                    /*dispatch(updateUserDetails({user:response.data.ResponseData})) 
                    let local = {
                        user:response.data.ResponseData,token:user.token
                    }                
                    localStorage.setItem("local",JSON.stringify(local))
                    setUpdateingState("Updated")*/
                }else{
                    alert("some error occured check after some time")
                    //setUpdateingState("Updated")
                }
            }catch(error){
                console.log(error)
                //setUpdateingState("Updated")
            }
    }
    const handleLogout = ()=>{
        setConfirmMessage("Are you sure you want to Logout of this account?")
        setConfirmbox(true)

    }
    useEffect(()=>{
        setConfirmMessage("")
        setConfirmbox(false)
        //console.log(confirm)
        if(confirm){

        setProfileToggle(false)
        localStorage.removeItem("local");
        localStorage.removeItem('persist:root')
        //Navigate("/login");
        window.location.reload(false);
    }
    },[confirm])
    return(
        <>
        {/** parent div for profileView screen */}
        <div className="h-[100%] w-[100%] sm:w-[95%] homeContainers self-center flex flex-col gap-1">
        {
            //confirm dialog box
        }
        {confirmBox&&<ConfirmBox
                        confirmMessage={confirmMessage} 
                        setConfirm={setConfirm}
                        setConfirmbox={setConfirmbox}
                        />
        }
        {
            //first section
        }
            <div className="rounded-xl border-2 border-b-ThemeBorder pb-3  flex-1">
            <div className="allCenter justify-around gap-4 h-[100%]">
            <div className="flex flex-row justify-evenly p-2">
                <h1 className="text-xl">My profile</h1>
            </div>
            {
                //profile image
            }
            <div className="w-[100%] flex flex-col justify-center p-2">
                <div className="h-[190px] w-[190px] rounded-full self-center border border-[#FF5500] allCenter overflow-hidden">
                    <input 
                        type="file"
                        lable="Image"
                        name="profileImage"
                        id="imageUpload"
                        accept=".jpeg, .png, .jpg"
                        className="h-0 w-0 hidden"
                        onClick={handleProfileImageUpload}
                    />
                        <label htmlFor="imageUpload" >

                            <img 
                            src={require('../profile/selfie.png')}
                            className="h-[100%] w-[100%] object-cover"/>
                         </label>
                </div>
            </div>
            <div className="allCenter justify-center h-[100%] w-[100%]">
            <div className="flex flex-row justify-around w-[100%]">
                <div className=" h-[100%] w-[60%] allCenter">
                    <div className="flex flex-row justify-evenly ">
                        <Star color="gold"/>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>
            <button className="w-[200px] h-[40px] self-center button"
                onClick={()=>{
                    setProfileToggle(false)
                    Navigate("/EditProfile")}}>
                    Edit Profile
            </button>
            </div>
            </div>
            </div>
            </div>
            {
                //second section
            }
            <div className="border-2 border-t-ThemeBorder rounded-xl  flex-1">
            <div className="allCenter h-[100%]">
            <div className="w-[100%] h-[100%] flex flex-col gap-1">
                <div className="h-fit w-[100%] flex flex-row justify-center p-2 hover:bg-[grey] cursor-pointer hover:text-[#FF5500]" 
                onClick={()=>{
                    Navigate("/")
                    setProfileToggle(false)
                    }}>
                    <div className="self-center w-[90%] flex flex-row justify-between">

                    <p className="self-center text-[1.2rem]">
                            Home
                    </p>
                    <Home />
                    </div>

                </div>
                <div className="h-fit w-[100%] flex flex-row justify-center p-2 hover:bg-[grey] cursor-pointer hover:text-[#FF5500]" 
                onClick={()=>{
                    Navigate("/CreateResume")
                    setProfileToggle(false)
                    }}>
                    <div className="self-center w-[90%] flex flex-row justify-between">

                    <p className="self-center text-[1.2rem]">
                            Create Resume
                    </p>
                    <FilePlus />
                    </div>

                </div>
                <div className="h-fit w-[100%] flex flex-row justify-center p-2 hover:bg-[grey] cursor-pointer hover:text-[#FF5500]"
                onClick={()=>{
                    setProfileToggle(false)
                    Navigate("/MyResume")
                    }}>
                    <div className="self-center w-[90%] flex flex-row justify-between">
                        
                        <p className="self-center text-[1.2rem]">
                                My Resume
                        </p>
                        <FileText />
                    </div>

                </div>
                <div className="h-fit w-[100%] flex flex-row justify-center p-2 hover:bg-[grey] cursor-pointer hover:text-[#FF5500]">
                    <div className="self-center w-[90%] flex flex-row justify-between">

                        <p className="self-center text-[1.2rem]">
                                Create Quiz
                        </p>
                        <Edit3 />
                    </div>
                </div>
                <div className="h-fit w-[100%] flex flex-row justify-center p-2 hover:bg-[grey] cursor-pointer hover:text-[#FF5500]">
                <div className="self-center w-[90%] flex flex-row justify-between">
                    <p className="self-center text-[1.2rem]">
                            Take a Quiz
                    </p>
                    <BookOpen />
                </div>
                </div>
                <div className="h-fit w-[100%] flex flex-row 
                justify-center p-2 hover:bg-[grey] cursor-pointer hover:text-[#FF5500]" 
                 onClick={handleLogout}>
                <div className="self-center w-[90%] flex flex-row justify-between">

                    <p className="self-center text-[1.2rem]">
                            Logout
                    </p>
                    <LogOut color="red"/>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        </>

    )
}

export default ProfileView;
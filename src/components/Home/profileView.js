import React from "react";
import { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import '../css/global.css';
import { useSelector } from 'react-redux'
const ProfileView = ()=>{
    let user = useSelector(state=> state.user)
    useEffect(()=>{
        console.log("profile view",user)
    },[user])
    const Navigate = useNavigate();

    return(
        <>
        {/** parent div for profileView screen */}
        <div className="h-[100%] w-[95%] homeContainers self-center flex flex-col justify-evenly">
            <div className="flex flex-row justify-center p-2">
                <h1 className="text-xl">My profile</h1>
            </div>
            {
                //profile image
            }
            <div className="w-[100%] flex flex-col justify-center p-2">
                <div className="h-[225px] w-[225px] rounded-full self-center border border-[#FF5500] overflow-hidden">

                    <img src={require('../profile/selfie.png')} className="h-[100%] w-[100%] object-cover"/>

                </div>
            </div>
            {
                //user information
            }
            <div className="max-h-[45%] min-h-[15%] w-[95%] border border-[#FF5500] scrollDiv self-center rounded-lg flex flex-col justify-evenly ">
                <div>
                    <h3 className="text-start p-2 sm:text-[1.2rem]">{user.name}</h3>
                </div>
                <div>
                    <h3 className="text-start p-2 sm:text-[1.2rem]">{user.uniqueId}</h3>
                </div>
            </div>
            <div className="w-[100%] flex flex-col">
                <button className="w-[180px] self-center button"
                onClick={()=>Navigate("/EditProfile")}>
                    Edit Profile
                </button>
                <button className="w-[180px] self-center button"
                onClick={()=>Navigate("/CreateResume")}>
                    CreateResume
                </button>
                <button className="w-[180px] self-center button"
                onClick={()=>Navigate("/CreateResume")}>
                    Create Quiz
                </button>
            </div>
        </div>
        </>

    )
}

export default ProfileView;
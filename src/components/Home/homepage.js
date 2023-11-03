import React from "react";
import { useState, useEffect } from "react";

import {Link, useNavigate} from 'react-router-dom';
import { User } from "react-feather";
import '../css/global.css';
import { useSelector, useDispatch } from 'react-redux'
import ProfileView from "./profileView";
import MainView from "./MainView";
import {updateUserDetails} from "../../redux/userReducer";

const Homepage = ()=>{

    const [ProfileToggle, setProfileToggle] = useState(false);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    useEffect(()=>{
        console.log("reloded")
    let data = JSON.parse(localStorage.getItem("local"))
    let local = {
        user:data?.user,
        token:data?.token
    }
    data?.token?dispatch(updateUserDetails(local)):Navigate("/login")
    },[])
    const handleToggle = ()=>{
        setProfileToggle(prev=>!prev)}
    useEffect(()=>{
        console.log(ProfileToggle)
    },[ProfileToggle])

    return(
        <>
        {/** parent div for homepage screen */}
            <div className="h-[100vh] w-[100vw] scrollDiv justify-start bg-transparent">
                {
                    //header view div
                }
                <div className="h-fit w-[100%] allCenter mb-4 bg-black opacity-80  py-3 ">
                    <div className="flex flex-row justify-between">
                        <div className="h-[40px] w-[200px]">
                            <img src={require('../../assets/final_half_logo.png')} className="h-[100%] w-[100%] object-cover"/>
                        </div>
                        <div className="mx-3 allCenter">
                            <button style={{color:"white"}}
                            type="button"
                             onClick={handleToggle}>
                                <User />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] h-[100%]">
                <div className="h-[100%] w-[100%] allCenter self-center">
                    <MainView/>
                </div>
                    {
                    ProfileToggle?
                    (<div className="absolute top-[10%] w-[100%] h-auto allCenter backdrop-blur-lg">
                        <div className="h-[100%] w-[100%] z-10 sm:w-[80%] lg:w-[25%] mb-2  justify-center allCenter self-end">
                        <ProfileView />
                        </div>
                    </div>):""
            }

                </div>

            </div>
        </>

    )
}

export default Homepage;
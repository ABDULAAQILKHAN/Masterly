import React from "react";
import { useState, useEffect, useRef, useCallback  } from "react";

import {Link, useNavigate} from 'react-router-dom';
import { User } from "react-feather";
import '../css/global.css';
import { useSelector, useDispatch } from 'react-redux'
import ProfileView from "./profileView";
import MainView from "./MainView";
import OtherView from "./OtherView";
import {updateUserDetails} from "../../redux/userReducer";

const Homepage = ()=>{
    const windowWidth = useRef(window.innerWidth);
    const dispatch = useDispatch()
    const [ProfileViewVisiblity,setProfileViewVisiblity] = useState(false);
    useEffect(()=>{

    let data = JSON.parse(localStorage.getItem("local"))
    let local = {
        user:data?.user,
        token:data?.token
    }
    data?.token?dispatch(updateUserDetails(local)):Navigate("/login")
    //!data?.token&&Navigate("/login")
        //console.log(user)
    },[])
    useEffect(()=>{
        //console.log(windowWidth.current)
        windowWidth.current>=900&&setProfileViewVisiblity(true)
    },[windowWidth])

const Navigate = useNavigate();


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
                            <button style={{color:ProfileViewVisiblity?"#FF5500":"white"}} onClick={()=>setProfileViewVisiblity(prev=>!prev)}>
                                <User />
                            </button>
                        </div>
                    </div>
                </div>
                {
                    //div for all the views
                    /**
                     * 1 div with main view
                     *                 <div className="resumeResponsiveness w-[100%] h-[100%]">
                <div className="h-[100%] allCenter self-center justify-center w-[100%] md:w-[100%] lg:w-[75%] mb-2">
                    <MainView/>
                </div>
                     */
                }
                <div className="w-[100%] h-[100%]">
                <div className="h-[100%] w-[100%] allCenter self-center">
                    <MainView/>
                </div>
                    {ProfileViewVisiblity&&(
                    <div className="absolute top-[10%] w-[100%] h-auto allCenter backdrop-blur-lg">
                        <div className="h-[100%] w-[100%] z-10 sm:w-[80%] lg:w-[25%] mb-2  justify-center allCenter self-end">
                        <ProfileView />
                        </div>
                    </div>    
                        )
                    }
                {
                    /**
                     * 
                <div className="h-[100%] sm:w-[25%] flex flex-col justify-center mb-2">
                    <OtherView/>
                </div>
                    */
               }
                </div>

            </div>
        </>

    )
}

export default Homepage;
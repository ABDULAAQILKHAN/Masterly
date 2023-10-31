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
                <div className="h-fit w-[100%] allCenter mb-4 bg-black opacity-80 headerVisiblity py-3 ">
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
                }
                <div className="resumeResponsiveness w-[100%] h-[100%]">
                    {ProfileViewVisiblity&&
                    <div className="h-[100%] w-[100%] sm:w-[80%] lg:w-[25%] self-center mb-2 justify-center allCenter">
                        <ProfileView />
                    </div>
                    }
                <div className="h-[100%] flex flex-col justify-center w-[100%] sm:w-[80%] lg-[50%] mb-2">
                    <MainView/>
                </div>
                <div className="h-[100%] sm:w-[25%] flex flex-col justify-center mb-2">
                    <OtherView/>
                </div>
                </div>

            </div>
        </>

    )
}

export default Homepage;
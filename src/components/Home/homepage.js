import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { User } from "react-feather";
import '../css/global.css';
import { useSelector, useDispatch } from 'react-redux'
import ProfileView from "./profileView";
import MainView from "./MainView";
import OtherView from "./OtherView";
import {updateUserDetails} from "../../redux/userReducer";
const Homepage = ()=>{
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

const Navigate = useNavigate();


    return(
        <>
        {/** parent div for login screen */}
            <div className="h-[100vh] w-[100vw] scrollDiv bg-primaryBG justify-start">
                {
                    //header view div
                }
                <div className="h-fit w-[100%] allCenter bg-black opacity-50 mb-4 headerVisiblity py-3">
                    <div className="flex flex-row justify-between">
                        <div className="h-[40px] w-[200px]">
                            <img src={require('../../assets/final_half_logo.png')} className="h-[100%] w-[100%] object-cover"/>
                        </div>
                        <div className="mx-3 allCenter">
                            <button style={{color:ProfileViewVisiblity?"#FF5500":"white"}} className="text-2xl" onClick={()=>setProfileViewVisiblity(prev=>!prev)}>
                                <User />
                            </button>
                        </div>
                    </div>
                </div>
                {
                    //div for all the views
                }
                <div className="resumeResponsiveness w-[100%]">
                <div className="h-[100%] sm:w-[25%] flex flex-col justify-center mb-2">
                    {ProfileViewVisiblity&&<ProfileView />}
                </div>
                <div className="h-[100%] flex flex-col justify-center sm:w-[60%] mb-2">
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
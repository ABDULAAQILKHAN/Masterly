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
            <div className="h-[100vh] scrollDiv bg-primaryBG  justify-start">
                {
                    //header view div
                }
                <div className="h-fit w-[100%] allCenter bg-black opacity-50 fixed">
                    <div className="flex flex-row justify-between">
                        <div className="h-fit w-[50%]">
                            <img src={require('../../assets/final_half_logo.png')} className="h-[100%] w-[100%] object-cover"/>
                        </div>
                        <div className="text-white mx-3 allCenter">
                            <button onClick={()=>setProfileViewVisiblity(prev=>!prev)}>
                                <User />
                            </button>
                        </div>
                    </div>
                </div>
                {
                    //div for all the views
                }
                <div className="resumeResponsiveness ">
                <div className=" h-[100%] sm:w-[25%] flex flex-col justify-center">
                {ProfileViewVisiblity&&<ProfileView />}
                </div>
                <div className=" h-[100%] flex flex-col justify-center sm:w-[60%] ">
                    <MainView/>
                </div>
                <div className=" h-[100%] sm:w-[25%] flex flex-col justify-center">
                    <OtherView/>
                </div>
                </div>

            </div>
        </>

    )
}

export default Homepage;
import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import HalfLogo from "../../assets/final_half_logo.png"
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import { useSelector, useDispatch } from 'react-redux'
import ProfileView from "./profileView";
import MainView from "./MainView";
import OtherView from "./OtherView";
const Homepage = ()=>{
    const user = useSelector(state=> state.user)
    useEffect(()=>{
    !user.token&&Navigate("/login")
        console.log(user)
    },[])

const Navigate = useNavigate();


    return(
        <>
        {/** parent div for login screen */}
            <div className="h-[100vh] bg-primaryBG flex flex-row ">
                {/** main container */}
                <div className=" h-[100%] w-[25%] flex flex-col justify-center">
                    <ProfileView/>
                </div>
                <div className=" h-[100%] flex flex-col justify-center w-[50%] ">
                    <MainView/>
                </div>
                <div className=" h-[100%] w-[25%] flex flex-col justify-center">
                    <OtherView/>
                </div>
            </div>
        </>

    )
}

export default Homepage;
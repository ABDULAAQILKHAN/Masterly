import React from "react";
import { useState, useEffect } from "react";

import {Link, useNavigate} from 'react-router-dom';
import '../css/global.css';
import { useSelector, useDispatch } from 'react-redux'
import ProfileView from "./profileView";
import MainView from "./MainView";
import {updateUserDetails} from "../../redux/userReducer";

const Homepage = ()=>{

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

    return(
        <>
        {/** parent div for homepage screen */}
            <div className="h-fit w-[100vw] justify-start">
                {
                    //header view div
                }
                <div className="w-[100vw] h-fit">
                <div className="h-[100%] w-[100%] allCenter self-center">
                    <MainView/>
                </div>


                </div>

            </div>
        </>

    )
}

export default Homepage;
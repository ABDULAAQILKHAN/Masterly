import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import HalfLogo from "../../assets/final_half_logo.png"
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import { useSelector, useDispatch } from 'react-redux'
const MainView = ()=>{
    const user = useSelector(state=> state.user)
    useEffect(()=>{
    !user.token&&Navigate("/login")
        console.log(user)
    },[])

const Navigate = useNavigate();


    return(
        <>
        {/** parent div for profileView screen */}
        <div className="h-[90%] w-[95%] bg-white whiteCard  self-center">
            <div className="flex flex-row justify-center">
                <h1 className="">Main view</h1>
            </div>
        </div>
        </>

    )
}

export default MainView;
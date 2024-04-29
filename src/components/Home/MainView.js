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
    //console.log("mainview",user)

    const Navigate = useNavigate();


    return(
        <>
        {/** parent div for profileView screen 
         * 
        */}
        <div className="h-[100%] w-[100%] self-center">
        <div className="w-[100%] h-[100%] flex flex-row justify-center gap-3">
            <div className="w-[30%] bg-red-600 h-[100%]">

            </div>
            <div className="w-[70%] bg-green-600 h-[100%]">

            </div>
        </div>
        </div>
        </>

    )
}

export default MainView;
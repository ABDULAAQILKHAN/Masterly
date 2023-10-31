import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import HalfLogo from "../../assets/final_half_logo.png"
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import { useSelector, useDispatch } from 'react-redux'
const OtherView = ()=>{
    const user = useSelector(state=> state.user)


const Navigate = useNavigate();


    return(
        <>
        {/** parent div for profileView screen */}
        <div className="h-[100%] w-[98%] bg-white homeContainers  self-center">
        <div className="flex flex-row justify-evenly">
                <h1 className="">Others View</h1>
            </div>
                <div className=" bg-white allCenter">
                    <button className="button" onClick={()=>{
                        localStorage.removeItem("local");
                        Navigate("/login")
                        }}>
                        Logout
                    </button>
                </div>
        </div>
        </>

    )
}

export default OtherView;
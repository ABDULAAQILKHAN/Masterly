import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import { useSelector, useDispatch } from 'react-redux'
const EditProfile = ()=>{
    const user = useSelector(state=> state.user)


const Navigate = useNavigate();


    return(
        <>
        {/** parent div for profileView screen */}
        <div className="h-[100vh] w-[100%] bg- self-center">
            <div className="flex flex-row justify-center gap-3">
                {
                    //left profile div
                }
                <div className="h-[100vh] w-[50%] homeContainers flex flex-col justify-center gap-2">
                {
                    //basic profile card 
                }
                    <div className=" secondaryCard p-5 w-[95%] self-center flex flex-row justify-between">

                        <div className="h-[225px] w-[225px] rounded-full self-center border border-[#FF5500] overflow-hidden ">
                            <img src={require('../profile/selfie.png')} className="h-[100%] w-[100%] object-cover"/>
                        </div>
                        {
                            //card side edit details
                        }
                        <div className="flex flex-col justify-center w-[55%]">
                        <div className=" border border-[#FF5500] h-fit flex flex-col justify-evenly">
                        <div>
                        <input 
                            className="w-[100%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder={user.name} 
                            name="name"
                            //onChange={handleInput}
                        />
                        </div>
                        <div>
                        <input 
                            className="w-[100%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder={user.uniqueId} 
                            name="uniqueId"
                            //onChange={handleInput}
                        />
                        </div>
                        <div>
                        <input 
                            className="w-[100%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder="********************" 
                            name="password"
                            //onChange={handleInput}
                        />
                        </div>
                        </div>
                        </div>
                    </div>
                    {
                        //other details start
                    }
                    <div className="min-h-[60%] w-[95%] bg-black self-center secondaryCard scrollDiv">

                    </div>
                </div>
                {
                    //right resume div
                }
                <div className="h-[100vh] w-[50%] homeContainers">
                    hellow world
                </div>
            </div>
        </div>
        </>

    )
}

export default EditProfile;
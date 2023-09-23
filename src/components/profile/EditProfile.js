import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import { useSelector, useDispatch } from 'react-redux'
const EditProfile = ()=>{
    const user = useSelector((state)=> state.user)
    console.log(user)

const Navigate = useNavigate();


    return(
        <>
        {/** parent div for profileView screen */}
        <div className="h-[100vh] w-[100%] bg-white self-center ">
            <div className="flex flex-row justify-center gap-3">
                {
                    //edit details div
                }
                <div className="h-[100vh] w-[50%] homeContainers flex flex-col gap-2 scrollDiv">
                {
                    //basic profile card 
                }
                    <div className="secondaryCard min-h-[35vh] p-5 w-[95%] self-center flex flex-row justify-between">

                        <div className="h-[225px] w-[225px] rounded-full self-center border border-[#FF5500] overflow-hidden ">
                            <img src={require('../profile/selfie.png')} className="h-[100%] w-[100%] object-cover overflow-hidden"/>
                        </div>
                        {
                            //card side edit details
                        }
                        <div className="allCenter w-[55%]">
                        <div className=" border-[#FF5500] h-fit flex flex-col justify-evenly">
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
                            placeholder="Change password!" 
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
                    <div className="w-[95%] bg-black self-center flex flex-col justify-evenly secondaryCard items-center gap-5">
                        {
                            //number & alternate email div
                        }
                        <div className="cardBorder w-[95%] py-5">
                        <div className="flex flex-row justify-evenly ">
                        <div>
                        <input 
                            className="w-[100%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder="Enter Contact number" 
                            name="password"
                            //onChange={handleInput}
                        />
                        </div>
                        <div>
                        <input 
                            className="w-[100%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder="Alternate Email address" 
                            name="password"
                            //onChange={handleInput}
                        />
                        </div>
                        </div>
                        <div className="w-[100%] h-[100%] allCenter items-center">
                            <button className="mx-5 button">
                                submit
                            </button>
                        </div>
                    </div>
                    {
                        //education details div
                    }
                    <div className="cardBorder w-[95%] py-5">
                        <div className="flex flex-row justify-evenly ">
                    education
                        </div>
                        <div className="w-[100%] h-[100%] allCenter items-center">
                            <button className="mx-5 button">
                                submit
                            </button>
                        </div>
                    </div>
                    {
                        //Experience div start
                    }
                    <div className="cardBorder w-[95%] py-5">
                        <div className="flex flex-row justify-evenly ">
                    experience
                        </div>
                        <div className="w-[100%] h-[100%] allCenter items-center">
                            <button className="mx-5 button">
                                submit
                            </button>
                        </div>
                    </div>
                    {
                        //skills
                    }
                    <div className="cardBorder w-[95%] py-5">
                        <div className="flex flex-row justify-evenly ">
                    skills
                        </div>
                        <div className="w-[100%] h-[100%] allCenter items-center">
                            <button className="mx-5 button">
                                submit
                            </button>
                        </div>
                    </div>
                    {
                        //summary
                    }
                    <div className="cardBorder w-[95%] py-5">
                        <div className="flex flex-row justify-evenly ">
                    summary
                        </div>
                        <div className="w-[100%] h-[100%] allCenter items-center">
                            <button className="mx-5 button">
                                submit
                            </button>
                        </div>
                    </div>
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
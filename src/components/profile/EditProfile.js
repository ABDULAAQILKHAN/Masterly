import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import { ArrowLeft } from "react-feather";

import { useSelector, useDispatch } from 'react-redux'
const EditProfile = ()=>{

   
    
    const user = useSelector((state)=> state.user)
    console.log(user)

const Navigate = useNavigate();


    return(
        <>
        {/** parent div for profileView screen */}
        <div className="h-[100vh] w-[100vw] allCenter">

                {
                    //edit details div
                }
                <div className="min-h-[60%] flex flex-col justify-around self-center gap-2 w-[90%] md:max-w-[60%]">
                {
                    //basic profile card 
                }
                    <div className=" w-[95%] secondaryCard self-center flex flex-row justify-between">
                    <div className="allCenter mx-4">

                        <button className="rounded-xl border-2 border-[#FF5500] w-fit p-1 h-fit" onClick={()=>Navigate("/home")}>
                        <ArrowLeft />
                        </button>
                    </div>
                        <h2 className="py-4 text-xl mx-4">Edit Profile</h2>
                    </div>
                    <div className="secondaryCard p-5 w-[95%] self-center resumeResponsiveness justify-around ">

                        <div className="h-[120px] w-[120px] rounded-full self-center border border-[#FF5500] overflow-hidden ">
                            <img src={require('../profile/selfie.png')} className="h-[100%] w-[100%] object-cover overflow-hidden"/>
                        </div>
                        {
                            //card side edit details
                        }
                        <div className="allCenter">
                        <div className=" border-[#FF5500] h-fit flex flex-col justify-evenly self-center">
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
                        <div className="cardBorder w-[95%] py-5 my-3">
                        <div className="flex flex-wrap gap-6">
                        <div style={{flexGrow:1}} 
                        className="flex flex-row justify-center">
                        <input 
                            className="w-[80%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder="Enter Contact number" 
                            name="password"
                            //onChange={handleInput}
                        />
                        </div>
                        <div style={{flexGrow:1,}} className="flex flex-row justify-center">
                        <input 
                            className="w-[80%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder="Alternate Email address" 
                            name="password"
                            //onChange={handleInput}
                        />
                        </div>
                        </div>
                        <div className="w-[100%] allCenter items-center">
                            <button className="mx-5 button">
                                Save
                            </button>
                        </div>
                    </div>

                {
                    //right resume div
                }
                </div>
               
                </div>

            </div>
        </>

    )
}

export default EditProfile;
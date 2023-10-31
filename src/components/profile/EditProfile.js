import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import { ArrowLeft } from "react-feather";
import { updateUserDetails } from "../../redux/userReducer";
import { useSelector, useDispatch } from 'react-redux'
const EditProfile = ()=>{
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const user = useSelector((state)=> state.user)
    const [data,setData] = useState({
        _id: user.userId,
        name: user.name,
        uniqueId: user.uniqueId,
    })
    const handleInput = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    useEffect(()=>{console.log("edit profile",user)},[user])
    const auth = {
        headers: {
        "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${path}`,
          Authorization: `Bearer ${user.token}`,
        }
      };
    const handleUpdate = async ()=>{
        try{
            const response = await axios.post(`${path}/updateAccount`,data,auth)
            if(response.data.flag){
                dispatch(updateUserDetails({user:response.data.ResponseData})) 
                let local = {
                    user:response.data.ResponseData,token:user.token
                }                
                localStorage.setItem("local",JSON.stringify(local))
            }else{
                alert("some error occured check after some time")
            }
        }catch(error){
            console.log(error)
        }
    }


    return(
        <>
        {/** parent div for profileView screen */}
        <div className="h-[100vh] w-[100vw] allCenter">
                {
                    //edit details div
                }
                <div className="sm:min-h-[60%] min-h-[100%] flex flex-col self-center gap-2 sm:w-[100%] md:w-[70%] xl:w-[60%] p-5">
                {
                    //basic profile card 
                }
                    <div className="w-[100%] secondaryCard self-center flex flex-row justify-between">
                    <div className="allCenter mx-4 w-[50px]">

                        <button className="self-center text-[#FF5500] w-fit h-fit" onClick={()=>Navigate("/home")}>
                        <ArrowLeft />
                        </button>
                    </div>
                    <div className="allCenter mx-4">
                        <h2 className="py-4 text-[1rem] ">Edit Profile</h2>
                    </div>
                    </div>
                    <div className="secondaryCard w-[100%] self-center h-fit allCenter">
                        <div className="resumeResponsiveness p-5 overflow-hidden w-[100%] justify-evenly self-center h-fit">

                        <div className="h-[120px] w-[120px]  sm:h-[210px] sm:w-[210px]  rounded-full self-center border border-[#FF5500] overflow-hidden">
                            <img src={require('../profile/selfie.png')} className="h-[100%] w-[100%] object-cover overflow-hidden"/>
                        </div>
                        {
                            //card side edit details
                        }
                        <div className="allCenter h-fit">
                        <div className="flex flex-col justify-evenly self-center" style={{flexGrow:1}}>
                        <div>
                        <input 
                            className="w-[100%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder={user.name} 
                            name="name"
                            onChange={handleInput}
                        />
                        </div>
                        <div>
                        <input 
                            className="w-[100%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder={user.uniqueId} 
                            name="uniqueId"
                            onChange={handleInput}
                        />
                        </div>
                        <div>
                        <input 
                            className="w-[100%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder="Change password!" 
                            name="password"
                            onChange={handleInput}
                        />
                        </div>
                        <button className="button rounded-xl self-center my-5 border-2 border-[#FF5500] w-fit p-1" onClick={handleUpdate}>
                        Update
                        </button>
                        </div>
                        </div>
                        </div>

                    </div>
                    {
                        //other details start
                    }
                    <div className="w-[100%] bg-black self-center flex flex-col justify-evenly secondaryCard items-center gap-5 pb-4">
                        {
                            //number & alternate email div
                        }
                        <div className=" w-[95%] py-5 my-3">
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
                                Add
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
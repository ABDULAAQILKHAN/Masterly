import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import { ArrowLeft } from "react-feather";
import { updateUserDetails } from "../../redux/userReducer";
import { useSelector, useDispatch } from 'react-redux'
import PasswordAuth from "../passwordAuth";
//import Star from 'react-native-vector-icons/FontAwesome';

const EditProfile = ()=>{
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const user = useSelector((state)=> state.user)
    const [data,setData] = useState({
        _id: user.userId,
        name: user.name,
        uniqueId: user.uniqueId,
        mobile: user.mobile,
        altEmail: user.altEmail,
        profession: user.profession,
    });
    const [updateLoading, setUpdateLoading] = useState(false);
    const [updateingState, setUpdateingState] = useState("Update");
    const [confirmBox,setConfirmbox] = useState(false);
    const [confirm,setConfirm] = useState(false);
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
    //const HalfStar = <Star name="star-half" size={30} color="#900" />
    //const FullStar = <Star name="star" size={30} color="#900" />

    useEffect(()=>{
        updateingState==="Updated"&&
        setInterval(() => {
            setUpdateingState("Update")
        }, 3000);
    },[updateingState])
    useEffect(()=>{
        setConfirmbox(false)
        confirm&&handleUpdate()
    },[confirm])
    const openPassAuth = ()=>{
        setConfirmbox(true)
    }
    const handleUpdate = async ()=>{
        setUpdateingState("Updating...")
        try{
            const response = await axios.post(`${path}/updateAccount`,data,auth)
            if(response.data.flag){
                console.log("res data",response.data.ResponseData)
                dispatch(updateUserDetails({user:response.data.ResponseData})) 
                let local = {
                    user:response.data.ResponseData,token:user.token
                }                
                localStorage.setItem("local",JSON.stringify(local))
                setUpdateingState("Updated")
            }else{
                alert("some error occured check after some time")
                setUpdateingState("Updated")
            }
        }catch(error){
            console.log(error)
            setUpdateingState("Updated")
        }
    }


    return(
        <>
        {/** parent div for profileView screen */}
        <div className="h-[100vh] w-[100vw] allCenter">
                {
                    //edit details div
                }
                {
                    //auth dialog box
                }
                {confirmBox&&<PasswordAuth
                    setConfirm={setConfirm}
                    setConfirmbox={setConfirmbox}
                />}
                <div className="sm:min-h-[60%] max-h-[100%] allCenter  self-center gap-2 sm:w-[100%] md:w-[70%] xl:w-[60%] p-5  justify-center">
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
                        <div className="sm:w-[50%] self-center allCenter">
                        <div className="h-[120px] w-[120px]  sm:h-[210px] sm:w-[210px]  rounded-full self-center border border-[#FF5500] overflow-hidden">
                            <img src={require('../profile/selfie.png')} className="h-[100%] w-[100%] object-cover overflow-hidden"/>
                        </div>
                        </div>
                        {
                            //card side edit details
                        }
                        <div className="allCenter justify-center h-fit md:w-[50%] w-[100%]">
                        <div className="flex flex-wrap gap-6 self-center w-[90%]">

                        <div  style={{flexGrow:1}}>
                        <input 
                            className="w-[100%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder={user.uniqueId} 
                            name="uniqueId"
                            onChange={handleInput}
                        />
                        </div>
                        <div  style={{flexGrow:1}}>
                        <input 
                            className="w-[100%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder="Change password!" 
                            name="password"
                            onChange={handleInput}
                        />
                        </div>
                        <div className="w-[100%]">
                        <button className="button rounded-xl self-center my-5 border-2 border-[#FF5500] w-fit p-1" onClick={()=>alert("cannot change these fields now.")}>
                        {"Disabled"}
                        </button>
                        </div>
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
                        <div className="w-[95%] mt-4 allCenter gap-5">
                        <div className="flex flex-wrap gap-6">
                        <div style={{flexGrow:1}}>
                        <input 
                            className="w-[80%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder={user.name} 
                            name="name"
                            onChange={handleInput}
                        />
                        </div>

                        <div style={{flexGrow:1,}} className="flex flex-row justify-center">
                        <input 
                            className="w-[80%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder={user.altEmail}
                            name="altEmail"
                            onChange={handleInput}
                            />
                        </div>
                        <div style={{flexGrow:1}}
                        className="flex flex-row justify-center">
                        <input 
                            className="w-[80%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder={user.mobile}
                            name="mobile"
                            onChange={handleInput}
                            />
                        </div>
                        <div style={{flexGrow:1}}>
                        <input 
                            className="w-[80%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder={user.profession} 
                            name="profession"
                            onChange={handleInput}
                        />
                        </div>
                        </div>
                        {
                            /**
                             * 
                        <div className="flex flex-wrap gap-6">
                        <div style={{flexGrow:1}} 
                        className="flex flex-row justify-center">
                        <input 
                            className="w-[80%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder="Enter Contact number" 
                            name="mobile"
                            //onChange={handleInput}
                        />
                        </div>
                        {
                            //level and links
                        }
                        <div style={{flexGrow:1,}} className="flex flex-row justify-center">
                        <input 
                            className="w-[80%] h-[50px] self-center bg-transparent placeholder: caret-[#FF5500] text-[1.1rem] placeholder:text-center inputBorder" 
                            placeholder="Alternate Email address" 
                            name="altEmail"
                            //onChange={handleInput}
                        />
                        </div>
                        </div>
                        */
                   }
                        <div className="w-[100%] allCenter items-center">
                            <button className="mx-5 button" onClick={openPassAuth}>
                                {updateingState}
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
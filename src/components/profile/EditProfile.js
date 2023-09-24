import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import { useSelector, useDispatch } from 'react-redux'
import EducationCard from "./EducationCard";
const EditProfile = ()=>{
    const [ModalVisiblity, setModalVisiblity] = useState("hidden")
    const [addEducationModalVisiblity,setaddEducationModalVisiblity] = useState("hidden");
    const [InstituteDetails, setInstituteDetails] = useState({
        InstituteName: String,
        CourseName: String,
        StartDate: Date,
        EndDate: Date,
        current: false,
        Experience: String,
    })
    const [InstituteArray,setInstituteArray] = useState([])
    const user = useSelector((state)=> state.user)
    console.log(user)
    const handleEducationInput = (event)=>{
        setInstituteDetails({...InstituteDetails,[event.target.name]:event.target.value})
    }
    const handleEducationInputCheckbox = (event)=>{
        alert(event.target.value)
        setInstituteDetails({...InstituteDetails,current:event.target.value})
    }
    const handleEducationDetailSave = async()=>{
        console.log(InstituteDetails)
        setInstituteArray((prev)=>{return [...prev,InstituteDetails]})
    }
    useEffect(()=>{
        
        console.log(InstituteArray)
    },[InstituteArray])
const Navigate = useNavigate();


    return(
        <>
        {/** parent div for profileView screen */}
        <div className="h-[100vh] w-[100%] bg-white self-center ">
            {
                //add items screen start
            }
            <div className="h-[100%] w-[100%]  absolute  top-0 left-0 allCenter" style={{visibility: ModalVisiblity}}>
                <div className="h-[60%] w-[50%] self-center secondaryCard cardBorder overflow-hidden" style={{visibility: addEducationModalVisiblity}}>
                    {
                        //modal header title  & x button
                    }
                    <div className="flex flex-row justify-between">
                        <h3 className=" p-4 text-xl ">Enter education details below</h3>
                        <p className="float-right p-4 text-red-500 text-2xl cursor-pointer hover:bg-red-500 hover:text-white" onClick={()=>{
                        setModalVisiblity("hidden")
                        setaddEducationModalVisiblity("hidden")
                        }}>X</p>
                    </div>
                    <div className="w-[100%] h-[80%]  flex flex-col justify-between self-center">
                        
                            <input className="w-[95%] p-1 self-center h-[35px] ResumeInput" placeholder="Institute name." name="InstituteName" onChange={handleEducationInput} value={InstituteDetails.InstituteName}/>

                            <input className="w-[95%] p-1 self-center h-[35px] ResumeInput" placeholder="Opted course." name="CourseName" onChange={handleEducationInput} value={InstituteDetails.CourseName}/>
                            {
                                //date select
                            }
                            <div className="flex flex-row justify-around">

                                <div className="allCenter">
                                <label className="mx-1">start Date.</label>
                                <input className="w-[100%] self-center h-[35px] ResumeInput" type="date" placeholder="Opted course." name="StartDate" onChange={handleEducationInput} value={InstituteDetails.StartDate}/>
                                </div>

                                <div className="allCenter">
                                <label className="mx-1">End Date.</label>
                                <input className="w-[100%] self-center h-[35px] ResumeInput" type="date" placeholder="Opted course." name="EndDate" onChange={handleEducationInput} value={InstituteDetails.EndDate}/>                                
                                </div>

                                <div className="flex flex-row h-[100%] ">
                                <input className="w-[100%] self-center ResumeInput" type="checkbox" placeholder="Opted course." name="current" onChange={handleEducationInputCheckbox} value={"Ongoing"}/>    
                                <div className="allCenter  p-2">
                                    <label className="mx-1self-center">Current.</label>
                                </div>                            
                                </div>
                            </div>
                            {
                                //summary section
                            }
                            <div className="h-[35%] flex flex-row justify-evenly ">
                                <div className="w-[70%] h-[100%] ">
                                    <textarea className="w-[100%] h-[100%] p-2 ResumeInput" placeholder="Experience..." name="Experience" onChange={handleEducationInput} value={InstituteDetails.Experience}/>
                                </div>
                            <div className="flex flex-col justify-evenly">
                                <button className="button" onClick={()=>{setInstituteDetails({
                                    InstituteName: String,
                                    CourseName: String,
                                    StartDate: Date,
                                    EndDate: Date,
                                    current: false,
                                    Experience: String,
                                    })}}>
                                    Reset
                                </button>
                                <button className="button" onClick={handleEducationDetailSave}>
                                    Save
                                </button>
                            </div>
                            </div>

                    </div>
                </div>
            </div>
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
                        <div className="cardBorder w-[95%] py-5 my-3">
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
                                Save
                            </button>
                        </div>
                    </div>
                    {
                        //education details div
                    }
                    <div className="cardBorder w-[95%] py-5 flex flex-col justify-evenly">
                        <div className="flex flex-row justify-evenly ">
                            {InstituteArray.length<0?
                            <><h3>Add Education details.</h3></>:
                            <>
                            <div className="flex flex-col justify-around gap-4 w-[95%]">
                                {
                                    InstituteArray.map(item=>{
                                        console.log("tada",item)
                                        return<>
                                            <EducationCard data={item}/>
                                        </>
                                    })
                                }
                            </div>
                            </>
                            }
                        </div>
                        <div className="w-[100%] h-[100%] allCenter items-center">
                            <button className="button" onClick={()=>{
                                setModalVisiblity("visible");
                                setaddEducationModalVisiblity("visible")
                                }}>
                                +
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
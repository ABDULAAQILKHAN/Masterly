import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import { useSelector, useDispatch } from 'react-redux'
import EducationCard from "./EducationCard";
import EnterDetailsCard from "./EnterDetailCard";
import EnterExperience from "./EnterExperienc";
const EditProfile = ()=>{
    const [ModalVisiblity, setModalVisiblity] = useState("hidden")
    const [addEducationModalVisiblity,setaddEducationModalVisiblity] = useState("hidden");
    const [addExperienceModalVisiblity,setaddExperienceModalVisiblity] = useState("hidden");

    const [InstituteArray,setInstituteArray] = useState([])
    const [ExperienceArray,setExperienceArray] = useState([])

    const user = useSelector((state)=> state.user)
    console.log(user)

    useEffect(()=>{
        console.log(InstituteArray)
    },[InstituteArray])
const Navigate = useNavigate();


    return(
        <>
        {/** parent div for profileView screen */}
        <div className="h-[100vh] w-[100vw] bg-white self-center ">
        <div className="h-[100%] w-[100%]  absolute top-0 left-0" 
            style={{visibility: ModalVisiblity}}>
                <div className="h-[100%] w-[100%] allCenter ">

        <EnterDetailsCard ModalVisiblity={ModalVisiblity}
            addEducationModalVisiblity={addEducationModalVisiblity} 
            setModalVisiblity={setModalVisiblity}
            setaddEducationModalVisiblity={setaddEducationModalVisiblity}
            setInstituteArray={setInstituteArray}
            />
        <EnterExperience ModalVisiblity={ModalVisiblity}
            addExperienceModalVisiblity={addExperienceModalVisiblity} 
            setModalVisiblity={setModalVisiblity}
            setaddExperienceModalVisiblity={setaddExperienceModalVisiblity}
            setExperienceArray={setExperienceArray}
            />
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
                        //education details div
                    }
                    <div className="cardBorder w-[95%] py-5 flex flex-col justify-evenly">
                        <div className="flex flex-row justify-evenly ">
                            {InstituteArray.length===0?
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
                    <div className="cardBorder w-[95%] py-5 flex flex-col justify-evenly">
                        <div className="flex flex-row justify-evenly ">
                        {ExperienceArray.length===0?
                            <><h3>Internship's & Job's</h3></>:
                            <>
                            <div className="flex flex-col justify-around gap-4 w-[95%]">
                                {
                                    ExperienceArray.map(item=>{
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
                                setaddExperienceModalVisiblity("visible")
                                }}>
                                +
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
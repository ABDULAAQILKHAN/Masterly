import React from "react";
import { useState, useEffect, useRef } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import Editor from './Editor/Editor'
import Resume from './Resume/Resume'
import { useSelector, useDispatch } from 'react-redux'
const EditProfile = ()=>{

    const resumeRef = useRef();

    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
      };
      const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          details: [],
        },
        [sections.project]: {
          id: sections.project,
          sectionTitle: sections.project,
          details: [],
        },
        [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          details: [],
        },
        [sections.achievement]: {
          id: sections.achievement,
          sectionTitle: sections.achievement,
          points: [],
        },
        [sections.summary]: {
          id: sections.summary,
          sectionTitle: sections.summary,
          detail: "",
        },
        [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
      });
    
    const user = useSelector((state)=> state.user)
    console.log(user)

const Navigate = useNavigate();


    return(
        <>
        {/** parent div for profileView screen */}
        <div className="h-[100vh] w-[100vw] bg-white self-center ">

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
                    //right resume div
                }
                </div>
                <div className="w-[95%] self-center secondaryCard my-5">
                    <div className="flex flex-row justify-center w-[100%] border-b-2 border-[#FF5500]">
                        <h2 className="py-4 text-xl self center">Create|Edit Resume</h2>
                    </div>
                    <Editor
                        sections={sections}
                        information={resumeInformation}
                        setInformation={setResumeInformation}
                        />
                    </div>
                </div>
                <div className="h-[100vh] w-[50%] homeContainers">
                <Resume
                    ref={resumeRef}
                    sections={sections}
                    information={resumeInformation}
                    //activeColor={activeColor}
                />
                </div>
            </div>
        </div>
        </>

    )
}

export default EditProfile;
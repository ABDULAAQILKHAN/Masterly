import React from "react";
import { useState, useEffect, useRef } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import path from '../../path';
import '../css/global.css';
import Editor from './Editor/Editor'
import Resume from './Resume/Resume'
import ReactToPrint from "react-to-print";
import { Save } from "react-feather";
import { ArrowDown } from "react-feather";
import { ArrowLeft } from "react-feather";

import { useSelector, useDispatch } from 'react-redux'
const CreateResume = ()=>{

    const resumeRef = useRef();
    const windowWidth = useRef(window.innerWidth);
    const [ResumeViewbtn, setResumeViewbtn] = useState(false)
    useEffect(()=>{
        windowWidth.current<1080&&setResumeViewbtn(true)
    },[windowWidth])
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
    //console.log(user)

const Navigate = useNavigate();


    return(
        <>
        {/** parent div for Resume screen */}
        <div className="h-[100vh] w-[100vw]">

            <div className="resumeResponsiveness h-[100%] w-[100%] justify-evenly gap-4 p-1 sm:p-4">
                {
                    //edit details div
                }
                <div className="scrollDiv self-center secondaryCard h-[100%] w-[100%]">
                {
                    //header
                }
                <div className="p-3 flex flex-row justify-between w-[100%] border-b-2 border-[#FF5500]">
                <div className="allCenter">
                    <button className="w-fit h-fit self-start p-1 mx-4" onClick={()=>Navigate("/home")}>
                        <ArrowLeft />
                    </button>
                </div>
                <div className="flex flex-row justify-center">
                <div className="allCenter sm:mx-4">
                    <h2 className="text-[1.2rem]">Create Resume</h2>
                </div>

                {
                    ResumeViewbtn&&(
                        <div className="allCenter mx-4">
                            <button className="rounded-lg p-2 border bg-ThemeBorder text-white" style={{borderColor: "#FF5500"}} onClick={()=>Navigate("/home")}>
                                Preview
                            </button>
                        </div>
                    )
                }
                </div>
                </div>
                <div className="h-auto w-[100%]">
                    <Editor
                        sections={sections}
                        information={resumeInformation}
                        setInformation={setResumeInformation}
                        />
                </div>
                </div>
                {
                    //Resume preview div
                }
                {
                    !ResumeViewbtn&&(
                <div className=" h-[100%] md:w-[45%] self-center scrollDiv secondaryCard ">
                    <div className="resumeResponsiveness justify-between w-[100%] border-b-2 border-[#FF5500]">
                        <div className="allCenter self-center">
                            <h2 className="text-xl mx-4">
                                Preview
                            </h2>
                        </div>
                        <div className="allCenter py-2 self-center mx-4">
                            <div className="flex flex-row gap-4">
                            <button className="flex flex-row p-2 text-[#FF5500] bg-white rounded-lg self-end text-lg"
                            onClick={()=>{console.log(resumeRef.current)}}
                            >
                                        Save <Save />
                            </button>
                            <ReactToPrint
                                trigger={() => {
                                    return (
                                        <button className="flex flex-row p-2 bg-[#FF5500] text-white rounded-lg self-end text-lg">
                                        Download <ArrowDown />
                                    </button>
                                    );
                                }}
                                content={() => resumeRef.current}
                                />
                            </div>
                            </div>
                    </div>
                    <Resume
                        ref={resumeRef}
                        sections={sections}
                        information={resumeInformation}
                        //activeColor={activeColor}
                    />
                </div>
                    )
                }
            </div>
        </div>
        </>

    )
}

export default CreateResume;
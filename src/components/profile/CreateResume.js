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
        {/** parent div for Resume screen */}
        <div className="h-[100vh] w-[100vw] bg-white self-center ">

            <div className="resumeResponsiveness gap-5 scrollDiv allCenter p-5">
                {
                    //edit details div
                }
                <div className="allCenter">

                <div className="w-[95%] scrollDiv self-center secondaryCard h-[100%]">

                <div className="flex flex-row justify-between w-[100%] border-b-2 border-[#FF5500]">
                <div className="allCenter ">
                    <button className="rounded-xl border-2 border-[#FF5500] w-fit h-fit self-start p-1 mx-4" onClick={()=>Navigate("/home")}>
                        <ArrowLeft />
                    </button>
                </div>
                    <h2 className="py-4 text-xl mx-4">Create|Edit Resume</h2>
                </div>
                <div className="h-[100%] w-[100%]">
                    <Editor
                        sections={sections}
                        information={resumeInformation}
                        setInformation={setResumeInformation}
                        />
                </div>
                </div>
                </div>
                <div className="h-[100vh] w-[100%] allCenter">
                <div className="w-[100%] self-center scrollDiv secondaryCard">
                    <div className="resumeResponsiveness gap-4 justify-between py-4">
                        <div className="allCenter self-center">
                            <h2 className="text-xl">
                                Resume Preview
                            </h2>
                        </div>
                        <div className="allCenter self-center">
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
                </div>
            </div>
        </div>
        </>

    )
}

export default CreateResume;
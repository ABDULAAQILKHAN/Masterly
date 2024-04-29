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
import {X} from 'react-feather';
import { useSelector, useDispatch } from 'react-redux'
import ScaleLoader from "react-spinners/ScaleLoader";

const CreateResume = ()=>{
    
    const resumeRef = useRef();
    const windowWidth = useRef(window.innerWidth);
    const [ResumeViewbtn, setResumeViewbtn] = useState(false)
    const [mobileResumePreview, setMobileResumePreview] = useState(false)
    const [ResumeName, setResumeName] = useState('')
    const [EnterNameVisible, setEnterNameVisible] = useState(false);
    const [Loading, setLoading] = useState(false)
    const [errors,setErrors] = useState("")
    const [saveState, setSaveState] = useState("Save")
    const Navigate = useNavigate();


    useEffect(()=>{
        //windowWidth.current<1080&&setResumeViewbtn(true)
    },[windowWidth])
    const user = useSelector((state)=> state.user);
    const auth = {
        headers: {
        "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${path}`,
          Authorization: `Bearer ${user.token}`,
        }
      };
      useEffect(()=>{
        if(saveState === "Saved"){
            setTimeout(()=>{
                setSaveState("Save")
            },3000)
        }
      },[saveState])
    const handleInput = e => {
        setResumeName(e.target.value)
    }
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
    
    const handleSave = async()=>{
        setLoading(true);
        if(ResumeName.length==0||ResumeName.length<5){
            setLoading(false);
            setErrors("Enter Resume name with +5 characters");
        }
        else{
            setErrors("");
        const data = {
            ResumeName,
            userId: user.userId,
            resumeInformation
        }
        console.log(data)
        try{
            const response = await axios.post(`${path}/saveResume`,data,auth)
            if(response.data.flag){
                setLoading(false);
                setEnterNameVisible(false)
                setSaveState("Saved")
                //alert(response.data.msg)
                console.log("saved ",response.data.Saved)
            }
            else{
                setLoading(false);
                setEnterNameVisible(false)
                alert(response.data.msg)
            }
        }catch(error){
            console.log(error)
        }
    }
    }
    //console.log(user)
    const ResumePreview = <>
    <div className="flex flex-row justify-center relative z-10">
    <div className="h-[100%] md:w-[45%] secondaryCard self-center">
    <div className="flex flex-row justify-around w-[100%] border-b-2 border-[#FF5500]">
        {mobileResumePreview&&(<div className="allCenter ">
            <button className="w-fit h-fit self-start p-1 mx-4 hover:text-[#FF5500]" onClick={()=>setMobileResumePreview(false)}>
                <ArrowLeft />
            </button>
        </div>)}
        <div className="allCenter self-center">
            <h2 className="text-xl">
                Preview
            </h2>
        </div>
        <div className="allCenter py-2 self-center mx-4">
            <div className="flex flex-row gap-4">
            <button className="flex flex-row p-2 text-[#FF5500] bg-white rounded-lg self-end text-lg"
            onClick={()=>setEnterNameVisible(true)}
            >
                        Save <Save />
            </button>
            <ReactToPrint
                trigger={() => {
                    return (
                    <button className="rounded-lg p-2 border bg-ThemeBorder text-white flex flex-row">
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
        live={true}
        //activeColor={activeColor}
    />
</div>
</div>
</>

    return(
        <>
        {/** parent div for Resume screen */}
        <div className="h-[100vh] w-[100vw]">
            {
                //resume name enter modal
            }
            {
            EnterNameVisible&&(<div className="h-[90vh] w-[100vw] absolute left-0 backdrop-blur-sm allCenter">
            <div className="h-fit w-[90%] sm:w-[60%] bg-black secondaryCard self-center pb-4 ">
    
                <div className="w-[100%] border-2 border-b-ThemeBorder flex flex-row justify-between p-3">
                    <h2 className="text-[1rem]">
                        Save Resume.
                    </h2>
                    <button onClick={()=>setEnterNameVisible(false)}>
                        <X />
                    </button>
                </div>
                <div className="allCenter h-[100%] p-4 ">
                <div className="h-fit w-[100%] allCenter">
                    <h2 className="w-fit self-start mx-4">{"Enter an appropriate Resume name."}</h2>
                </div>
                <div className="w-[100%] h-[100%] allCenter justify-start pb-4">
                <div className="h-fit w-[100%] my-3 allCenter">
                    <input
                    className="w-[95%] inputBorder self-center mx-4" 
                    placeholder="Enter Name here"
                    onChange={(e)=>setResumeName(e.target.value)}
                    type="text"
                    />
                    {errors.length>0&&<span className="pt-3 text-[1rem] text-red-600">{errors}</span>}
                </div>
                    <button className="button text-white h-[40px] w-[200px] self-center " 
                    style={{backgroundColor: Loading?"#FF5500":"white"}}
                    onClick={handleSave}>
                    {Loading?<>
                    <div className="text-white">
                        <ScaleLoader
                            color={"white"}
                            size={10}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    </>:saveState}
                    </button>
                </div>
                </div>
            </div>
        </div>)
            }
            <div className="h-fit w-[100%]">
                {
                    //edit details div
                }
                <div className="self-center secondaryCard h-[100%] sscrollDiv w-[100%]">
                {
                    //header
                }
                <div className="p-3 flex flex-row justify-between w-[100%] border-b-2 border-[#FF5500]">
                <div className="allCenter">
                    <button className="w-fit h-fit self-start p-1 mx-4 hover:text-[#FF5500]" onClick={()=>Navigate("/home")}>
                        <ArrowLeft />
                    </button>
                </div>
                <div className="flex flex-row justify-center">
                <div className="allCenter sm:mx-4">
                    <h2 className="text-[1.2rem]">Create Resume</h2>
                </div>
                <div className="allCenter mx-4">
                    <button className="rounded-lg p-2 border bg-ThemeBorder text-white" style={{borderColor: "#FF5500"}} onClick={()=>setMobileResumePreview(true)}>
                        Preview
                    </button>
                </div>
                </div>
                </div>
                {
                    //!mobileResumePreview&&  
                
                    <Editor
                        sections={sections}
                        information={resumeInformation}
                        setInformation={setResumeInformation}
                        />
                    }
                {mobileResumePreview&&
                <div className="absolute top-0 left-0 p-5 z-15 w-[100%] h-[100vh] backdrop-blur-sm allCenter">
                    {ResumePreview}
                </div>}

                </div>
            </div>
        </div>
        </>

    )
}

export default CreateResume;
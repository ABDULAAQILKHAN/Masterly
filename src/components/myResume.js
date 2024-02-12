import React, { useEffect, useRef, useState } from "react";
import path from "../path";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import Resume from "./profile/Resume/Resume"
import { ArrowLeft, Trash } from "react-feather";
import {Link, useNavigate} from 'react-router-dom';
import ConfirmBox from "./confirmbox";
import HashLoader from "react-spinners/HashLoader";

const MyResume = () => {
    const [information, setInformation] = useState({});
    const [ResumeName, setResumeName] = useState("");
    const [found,setFound] = useState(false)
    const user = useSelector((state)=> state.user)
    const Navigate = useNavigate();
    const [confirmBox,setConfirmbox] = useState(false)
    const [Confirm, setConfirm] = useState(false);
    const [loader,setLoader] = useState(false)
    const auth = {
        headers: {
        "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${path}`,
          Authorization: `Bearer ${user.token}`,
        }
      };
    const getData = async ()=>{
      //console.log(user.userId)
      setLoader(true)
      try{
        let response = await axios.post(`${path}/GetMyResume`,{userId: user.userId});
        if(response.data.flag){
          setInformation(response?.data?.Info[0].resumeInformation)
          setResumeName(response?.data?.Info[0].ResumeName)
          setFound(true)
          setLoader(false)

        }else{
          alert(response.data.Msg)
          setLoader(false)
          Navigate("/home")
        }
        

      }catch(error){console.log("catched error", error)}
    }
    useEffect(()=>{
      getData();
    },[])
    useEffect(()=>{
      setConfirmbox(false)
      Confirm&&handleDeleteResume()
    },[Confirm])

  const handleDeleteResume = async () =>{
    setLoader(true)
    try{
        let response = await axios.post(`${path}/DeleteResume`,{userId: user.userId})
        //console.log(response.data)
        if(response.data.flag){
          //alert("deleted")
          setLoader(false)
          Navigate("/home")
        }else{
          alert("Error while deletion try again later!")
          setLoader(false)
        }
    }catch(error){
      console.log("catched error",error)
      setLoader(false)
    }
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
  const containerRef = useRef();
  const resumeRef = useRef();

  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

    return (
      <>
      {
        confirmBox&&(
          <ConfirmBox 
            setConfirmbox={setConfirmbox}
            setConfirm={setConfirm}
            confirmMessage={"Are you sure you want to delete this Resume!"}
          />
        )
        }
        {loader&&
          <div className="h-[100vh] bg-transparent w-[100%] allCenter justify-center">
            <HashLoader
              className="self-center"
              color={"#FF5500"}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
              />
            <h1 className="p-3 text-[1.2rem]">{
            //Deleteing Resume...
          }</h1>
          </div>
          }
          {
          found&& 
                <div className="h-[100%] w-[100%] allCenter justify-center">                    

                  <div className="self-center h-[100%] w-[95%]
                  sm:w-[80%] md:w-[65%] lg:w-[60%] bg-white">
                    <div className="w-[100%] secondaryCard self-center flex flex-row justify-between h-[50px]">
                  <div className="allCenter mx-4 w-[50px]">

                      <button className="self-center text-[#FF5500] w-fit h-fit" onClick={()=>Navigate("/home")}>
                      <ArrowLeft />
                      </button>
                  </div>

                  <div className=" h-[100%] allCenter mx-4">
                  <div className="flex flex-row gap-4 w-[100%]">
                    <div className="h-[100%] allCenter text-red-500 cursor-pointer" onClick={()=>{
                      setConfirmbox(true)
                    }}>
                      <Trash />
                    </div>
                      <h2 className="py-4 text-[1.1rem]">{ResumeName}</h2>
                  </div>
                  </div>
                  </div>
                    <Resume
                      ref={resumeRef}
                      sections={sections}
                      information={information}
                      live={true}
                      //activeColor={activeColor}
                      />
                  </div>
                </div>
        }
      </>
    )
};

export default MyResume;

import React from "react";
import { useState, useEffect } from "react";
import '../css/global.css';

    const EnterDetailsCard   =                                                                                 ({    
        setModalVisiblity,                                        addEducationModalVisiblity,
            setaddEducationModalVisiblity,
            setInstituteArray})=>{
    const [InstituteDetails, setInstituteDetails] = useState({
    InstituteName: String,
    CourseName: String,
    StartDate: Date,
    EndDate: Date,
    current: false,
    Experience: String,
    })
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
    return <>            

            <div className="h-[95%] md:max-h-[60vh] w-[90vw] md:max-w-[50vw] xl:w-[40vw] secondaryCard cardBorder overflow-hidden self-center absolute"
                style={{visibility: addEducationModalVisiblity}}>
                    <div className="flex flex-row justify-between">
                        <h3 className=" p-4 text-xl ">Enter education details below</h3>
                        <p className="float-right p-4 text-red-500 text-2xl cursor-pointer hover:bg-red-500 hover:text-white" onClick={()=>{
                        setModalVisiblity("hidden")
                        setaddEducationModalVisiblity("hidden")
                        }}>X</p>
                    </div>
                    <div className="w-[100%] h-[80%]  flex flex-col justify-between self-center">
                        <input className="w-[95%] p-1 self-center h-[35px] ResumeInput"   
                            placeholder="Institute name." 
                            name="InstituteName" 
                            onChange={handleEducationInput} 
                            value={InstituteDetails.InstituteName}
                        />
                        <input className="w-[95%] p-1 self-center h-[35px] ResumeInput" 
                            placeholder="Opted course." 
                            name="CourseName" 
                            onChange={handleEducationInput} 
                            value={InstituteDetails.CourseName}
                        />
                            {
                                //date select
                            }
                            <div className="flex flex-wrap gap-6 px-5">

                                <div className="allCenter grow">
                                    <label className="mx-1">start Date.</label>
                                    <input className="w-[100%] self-center h-[35px] ResumeInput" 
                                        type="date" 
                                        placeholder="Opted course." 
                                        name="StartDate" 
                                        onChange={handleEducationInput} 
                                        value={InstituteDetails.StartDate}
                                    />
                                </div>
                                <div className="allCenter grow">
                                    <label className="mx-1">End Date.</label>
                                    <input className="w-[100%] self-center h-[35px] ResumeInput" 
                                        type="date" 
                                        placeholder="Opted course." 
                                        name="EndDate" 
                                        onChange={handleEducationInput} 
                                        value={InstituteDetails.EndDate}
                                    />                                
                                </div>
                            {
                                /*
                                <div className="flex flex-row">
                                    <input className="w-[100%] self-center ResumeInput" 
                                    type="checkbox" 
                                    placeholder="Opted course." 
                                    name="current" 
                                    onChange={handleEducationInputCheckbox} 
                                    value={"Ongoing"}
                                />    
                                <div className="allCenter  p-2">
                                    <label className="mx-1self-center">Current.</label>
                                </div>                            
                                </div>
                                    */
                                }
                            </div>
                            {
                                //summary section
                            }
                            <div className="h-[35%] flex flex-row justify-evenly ">
                                <div className="w-[70%] h-[100%] ">
                                    <textarea className="w-[100%] h-[100%] p-2 ResumeInput"     
                                        placeholder="Experience..." 
                                        name="Experience" 
                                        onChange={handleEducationInput} 
                                        value={InstituteDetails.Experience}
                                    />
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
    </>
}

export default EnterDetailsCard;
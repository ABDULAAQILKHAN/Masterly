import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import ProfileView from "./Home/profileView";
import { Bell, Menu } from "react-feather";
import { useSelector } from 'react-redux'
import { Search } from "react-feather";
import SearchResult from "./SearchResult";
import Notifications from "./Notifications"

const Navbar = ({setNavVisible})=>{
    const [ProfileToggle, setProfileToggle] = useState(false);
    const Navigate = useNavigate();
    const [Searchres, setSearch] = useState(false);
    const [active,setActive] = useState("");
    const [notificationVisibility,setNotificationVisibility] = useState(false);
    const user = useSelector(state=> state.user)

    const handleToggle = ()=>{
        setProfileToggle(prev=>!prev)
    }
    return <> 
        
        <div className={`h-[8vh] w-[100vw] allCenter bg-[#141316]`} style={{
            visibility: user.token?"visible":"hidden"
        }}
            >
                    <div className="flex flex-row gap-3 justify-between">
                        <div className="h-[40px] w-[200px]" onClick={()=>{  
                            Navigate("/home")
                            setProfileToggle(false)
                        }}>
                            <img src={require('../assets/final_half_logo.png')} className="h-[100%] w-[100%] object-cover cursor-pointer"
                            alt="Masterly"
                            />
                        </div>
                        <div className="w-[50%] h-[fit] flex flex-row gap-2 justify-end mx-4" >
                            <div className="allCenter cursor-pointer"
                                 onClick={()=>{
                                    setNotificationVisibility(true)
                                }}>
                                <Bell 
                                    className="hover:text-red-500"
                                    color="white" />
                            </div>                        
                            <div className="allCenter cursor-pointer"
                                 onClick={()=>{
                                 setSearch(true)
                                 setProfileToggle(false)
                            }}>
                                <Search color="white" />
                            </div>
                                {               
                                Searchres&&<SearchResult 
                                setSearch={setSearch}/>   
                                }

                        <div className="mx-3 allCenter">
                            <button className=" self-end" style={{color:"white"}}
                            type="button"
                            onClick={handleToggle}>
                                <Menu 
                                color={ProfileToggle?"#ff5500":"white"}
                                />
                            </button>
                        </div>
                        </div>

                    </div>
                </div>
                {
                notificationVisibility&&
                    (
                        <Notifications 
                        setNotificationVisibility={setNotificationVisibility} />
                    )

                    }
                {
                ProfileToggle?
                    (<div className="absolute top-[8%] w-[100%] h-[92%] allCenter backdrop-blur-sm">
                        <div className="h-[100%] w-[100%] z-10 sm:w-[80%] md:w-[45%] lg:w-[25%] sm:mb-2  justify-center allCenter self-end">
                        <ProfileView 
                        active={active}
                        setActive={setActive}
                        setProfileToggle={setProfileToggle} />
                        </div>
                    </div>):""
                    }

        
    </>
}
export default Navbar;
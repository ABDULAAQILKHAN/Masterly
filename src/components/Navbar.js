import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate, useLocation} from 'react-router-dom';
import ProfileView from "./Home/profileView";
import { User } from "react-feather";
import { useSelector } from 'react-redux'

const Navbar = ({setNavVisible})=>{
    const [ProfileToggle, setProfileToggle] = useState(false);
    const [navbarView,setNavbarView] = useState(true);
    const Navigate = useNavigate();

    let user = useSelector(state=> state.user)
    useEffect(()=>{
        if(localStorage.getItem("local")){
            user = JSON.parse(localStorage.getItem("local"))
            console.log("local user",user)
        }

    },[localStorage.getItem("local")])
    const handleToggle = ()=>{
        setProfileToggle(prev=>!prev)
    }
    return <> 
        
        <div className={`h-fit w-[100%] allCenter bg-[#141316] py-3`} style={{
            visibility: user.token?"visible":"hidden"
        }}
            >
                    <div className="flex flex-row justify-between">
                        <div className="h-[40px] w-[200px]" onClick={()=>{  
                            Navigate("/home")
                            setProfileToggle(false)
                        }}>
                            {
                                /**
                                 * 
                            <Link to="https://abdulaaqilkhan.github.io/MasterlyLanding/">
                            </Link>
                                */
                            }
                            <img src={require('../assets/final_half_logo.png')} className="h-[100%] w-[100%] object-cover cursor-pointer"/>
                        </div>
                        <div className="mx-3 allCenter">
                            <button style={{color:"white"}}
                            type="button"
                             onClick={handleToggle}>
                                <User />
                            </button>
                        </div>
                    </div>
                </div>

                {
                    ProfileToggle?
                    (<div className="absolute top-[10%] w-[100%] h-[90%] allCenter backdrop-blur-lg">
                        <div className="h-[100%] w-[100%] z-10 sm:w-[80%] md:w-[45%] lg:w-[25%] mb-2  justify-center allCenter self-end">
                        <ProfileView 
                        setProfileToggle={setProfileToggle} />
                        </div>
                    </div>):""}

        
    </>
}
export default Navbar;
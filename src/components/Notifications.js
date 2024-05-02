import React,{useEffect, useState} from "react";
import "./css/global.css";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
//import {  useDispatch } from 'react-redux';
import MoonLoader from "react-spinners/MoonLoader";
import path from "../path";
import { XCircle} from 'react-feather';
//import { updateUserDetails } from "../redux/userReducer";

const Notifications = ({setNotificationVisibility}) => {
    const user = useSelector((state)=> state.user)
    const [notifications, setNotifications] = useState([])
    const [loader, setLoader] = useState(false);
    const [notFound, setNotFound] = useState()
/**
 * 
const auth = {
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": `${path}`,
        Authorization: `Bearer ${user.token}`,
    }
};
*/
useEffect(()=>{
    console.log("notifications",notifications)
},[notifications])
    const getNotifications = async () => {
    
        try{
            const res = await axios.post(`${path}/getNotifications`,{userId: user.userId});
            //console.log(res)
            if(res.data.flag){
                console.log(res.data.notifications)
                setNotifications(prev=>[...prev,res.data.notifications])
                setLoader(false)
                setNotFound("")
            }else{
                setNotFound(res.data.message)
                setLoader(false)
            }
        }catch(error){
            console.log(error)
            setLoader(false)
        }

    }
    useEffect(()=>{
        setLoader(true)
        getNotifications()
    },[])
    return(<>
        <div className="h-[100vh] w-[100vw] left-0 top-0 absolute flex flex-row justify-center backdrop-blur-sm">

            <div className="h-[90%] w-[95%] sm:w-[80%] md:w-[75%] lg:w-[70%]  bg-white self-center rounded-xl flex flex-col justify-start z-10 border border-[#FF5500] overflow-hidden">
    
                <div className="w-[100%] border-2 border-b-ThemeBorder flex flex-row justify-between p-3">

                    <h2 className="text-[1rem]">
                        Notifications
                    </h2>
                    <button className="hover:text-red-500 cursor-pointer" onClick={()=>setNotificationVisibility(false)}>
                        <XCircle />
                    </button>
                </div>
                {notFound&&<h1 className="self-center text-red-500 bold">{notFound}</h1>}
                {
                        loader&&(
                            <div className="self-center h-[100%] flex flex-col justify-center" key={4}>
                            <MoonLoader
                                color={"#FF5500"}
                                size={60}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                                className="self-center"
                            />
                            </div>
                        )
                    }
                
            </div>
        </div>
    </>)
}
export default Notifications;
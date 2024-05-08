import React,{useEffect, useState} from "react";
import "./css/global.css";
import axios from "../axiosInstance";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {  useDispatch } from 'react-redux';
import MoonLoader from "react-spinners/MoonLoader";
import path from "../path";
import { CheckCircle, X, XCircle} from 'react-feather';
import { updateFriendsDetails } from "../redux/FriendsReducer";
import { all } from "axios";

const Notifications = ({setNotificationVisibility}) => {
    const user = useSelector((state)=> state.user)
    const Allfriends = useSelector((state)=>state.friends)
    const [notifications, setNotifications] = useState([])
    const [loader, setLoader] = useState(false);
    const [notFound, setNotFound] = useState()
    const dispatch = useDispatch();
useEffect(()=>{
    //console.log("notifications",notifications)
    if(notifications.length < 1){
        setNotFound("No notifications found!")
        setLoader(false)
    }
},[notifications])
useEffect(()=>{
    console.log(Allfriends)
},[Allfriends])
    const getNotifications = async () => {
        try{
            const res = await axios.post(`/getNotifications`,{userId: user.userId});
            //console.log(res)
            if(res.data.flag){
                //console.log("raw",res.data.notifications[0])
                setNotifications(res.data.notifications)
                setLoader(false)
                setNotFound("")
            }else{
                setNotFound(res.data.message)
                setLoader(false)
                setNotFound("")

            }
        }catch(error){
            console.log(error)
            setLoader(false)
            setNotFound("")

        }

    }
    useEffect(()=>{
        setLoader(true)
        getNotifications()
    },[])

    const handleAcceptRequest = async(fromUserId,notificationId)=>{
        try{

            const res = await axios.post("/acceptRequest",{userId: user.userId,fromUserId,notificationId})
                console.log(res)    
            if (res.data.flag) {
                if(dispatch(updateFriendsDetails({
                    type: "friends",
                    added: fromUserId
                }))){
                    if(dispatch(updateFriendsDetails({
                        type: "removeReceivedRequest",
                        fromUserId
                    }))){
                            alert(res.data.message)

                        }        
                    }
                    
                }
            
        }catch(error){
            console.log(error)
        }
    }
    const handleDeclineRequest = async(fromUserId,notificationId)=>{
        const res = await axios.post("/deleteRequest",{
            userId: user.userId,
            fromUserId,
            notificationId
        });
    }
    return(<>
        <div className="h-[100vh] w-[100vw] left-0 top-0 absolute flex flex-row justify-center backdrop-blur-sm">

            <div className="h-[90%] w-[95%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl-w[25%] 2xl:w-[20%]  bg-white self-center rounded-xl flex flex-col justify-start z-10 border border-[#FF5500] overflow-hidden">
    
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
                    <div className="self-center h-[100%] w-[100%] flex flex-col justify-start gap-1">
                        {
                            notifications?.map((item)=>{
                                console.log(item.fromUser)
                                return (
                                    <div className="w-[100%] flex flex-row justify-between 
                                    cursor-pointer hover:text-[white] hover:opacity-70 hover:bg-[#FF5500] border-b-2 border-red-500">
                                    <div className="self-center h-fit  flex flex-col w-[80%]">
                                        <p className="self-start mx-4 bold text-lg"
                                        >{item.NotificationType==="friendRequest"&& "Received Request..."}</p> 
                                        <p className="self-start w-[100%] mx-4 text-start">
                                        {`${item?.message} from ${item?.fromUser?.name} (${item?.fromUser?.uniqueId})`}
                                        </p>
                                    </div>
                                        <div className="allCenter w-[20%]">
                                            <div className="flex flex-row justify-evenly">  
                                            <CheckCircle 
                                                size={30}
                                                color="green"
                                                className="self-center hover:scale-150"
                                                onClick={()=>handleAcceptRequest(item.fromUser._id,item._id)}
                                                />

                                            <X 
                                                size={30}
                                                color="green"
                                                className="self-center hover:scale-150"
                                                onClick={()=>handleDeclineRequest(item.fromUser._id,item._id)}
                                            />
                                            </div> 
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </div>
    </>)
}
export default Notifications;
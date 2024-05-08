import React, { useState,useEffect } from "react";
import "./css/global.css";
import axios from "../axiosInstance";
//import { useSelector } from "react-redux/es/hooks/useSelector";
import {  useDispatch, useSelector } from 'react-redux';
import MoonLoader from "react-spinners/MoonLoader";
import path from "../path";
import { Search, User, UserCheck, UserPlus, UserX, XCircle} from 'react-feather';
import { updateUserDetails } from "../redux/userReducer";
import { updateFriendsDetails } from "../redux/FriendsReducer";
const SearchResult = ({setSearch}) => {
    const [input, setInput] = useState("");
    const [users, setUsers] = useState([])
    const [notFound, setNotFound] = useState(false)
    const user = useSelector((state)=> state.user)
    const friend = useSelector((state)=>state.friend)
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false)

      useEffect(()=>{
        console.log("useEffect state", friend)
      },[])
    const searchUsers = async ()=>{
        try{
            let data = {userId: user.userId,
                        search: input
                }
            const res = await axios.post(`/searchUsers`,data)
            if(res.data.flag && res.data.data.length > 0){
                setUsers(res.data.data);
                setNotFound(false);
                setLoading(false)
            }else{
                setUsers([])
                setLoading(false)
            }
            if (res.data.flag && res.data.data.length === 0) {
                setNotFound(true);
                setUsers([])
                setLoading(false)
            }
        }catch(error){
            console.log(error)
            setLoading(false)

        }
    }
    const sendRequest = async (toUser)=>{
        try{
            
            console.log(user)
            let data = {userId: user.userId,
                toUser
            }
            const res = await axios.post(`/sendrequest`,data)
            if(res.data.flag){
                dispatch(updateFriendsDetails({
                    type: "sentRequest",
                    toUser: toUser,
                }));
                alert(res.data.message)

            }else{
                alert(res.data.message)
            }
        }catch(error){
            console.log(error)
        }
    }

    
    useEffect(() => {
        //this is debounce which calls the API after.75 sec's
        setLoading(true)
        setUsers([])
        var debounce;
        if (input.length >= 1) {
          debounce = setTimeout(() => {
            searchUsers()
          }, 750);
        }
        if (input.length < 1) {
            setUsers([])
        }
        /*
        if (text.length >= 0) {
            setRecentSearchesDisplay(false);
        }
        */
        return () => {
          clearTimeout(debounce);
        };
      }, [input]);
    return(<>
        <div className="h-[100vh] w-[100vw] left-0 top-0 absolute flex flex-row justify-center backdrop-blur-sm">

            <div className="h-[90%] w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl-w[25%] 2xl:w-[20%]  bg-white self-center rounded-xl flex flex-col justify-start z-10 border border-[#FF5500]">

                <div className="w-[100%] h-[fit] flex flex-row gap-1 self-center border-b-2 border-b-[#ff5500]">
                <input 
                    autoFocus={true}
                    placeholder="Search"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className="SearchinputBorder w-[100%]" />
                    <button className="hover:text-red-500 cursor-pointer mx-4" onClick={()=>{setSearch(false)}}>
                        <XCircle />
                    </button>
                </div>

                    {
                        notFound && input.length>0 &&<>
                            <div className="self-center h-[100%] flex flex-col justify-center" key={5}>
                                <UserX size={60} className="self-center"/>
                                <h2 className="self-center">
                                    NO user found!
                                </h2>
                            </div>
                        </>
                    }
                    {
                        users.length===0 &&input.length===0 &&<>
                            <div className="self-center h-[100%] flex flex-col justify-center" key={4}>
                                <Search size={60} className="self-center"/>
                                <h2 className="self-center">
                                    Search users
                                </h2>
                            </div>
                        </>
                    }
                                        {
                        loading &&input.length>0&&<>
                            <div className="self-center h-[100%] flex flex-col justify-center" key={4}>
                            <MoonLoader
                                color={"#FF5500"}
                                size={60}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                                className="self-center"
                            />
                            </div>
                        </>
                    }
                    <div className="max-h-[100%]  w-[100%] scrollDiv">

                        {users?.map((item)=>{ 
                            return(
                                <div key={user.userId} className="h-[8vh] 
                                w-[100%] flex flex-col justify-center">
                                    <div 
                                    style={{borderBottom: "2px solid #FF5500",}}
                                    className="w-[100%] px-4 h-[100%] flex flex-row justify-between self-center
                                    cursor-pointer hover:text-[white] hover:opacity-70 hover:bg-[#FF5500] 
                                    ">
                                         <div className="h-[100%] w-fit allCenter">   
                                            <div className="h-[40px] w-[40px] overflow-hidden rounded-full allCenter">
                                                <img src={require("../assets/userIcon.png")} 
                                                className="h-[100%] w-[100%] object-cover cursor-pointer"
                                                alt="Masterly" 
                                                />
                                                {                                                 /**
                                                     * 
                                                    <User color="#FF5500" className="self-center"/>
                                                     */
                                                }
                                            </div>
                                         </div>
                                        <div className="w-[70%] h-[100%] flex flex-col">
                                            <p className="self-start">
                                                {item.name}
                                            </p>
                                            <p className="self-start">
                                                {item.uniqueId}
                                            </p>
                                        </div>
                                        {                                       friend?.sentRequest?.includes(item._id)?(
                                        <div className="allCenter h-[100%]">
                                        <UserCheck className="text-yellow-500" 
                                            onClick={()=>{alert("Request pending")
                                        }
                                        
                                        }
                                        />
                                        </div>

                                            )
                                            :friend?.friends?.includes(item._id)?(
                                                <div className="allCenter h-[100%]">
                                                <UserCheck className="text-green-500" 
                                                    onClick={()=>{alert("Already a friend!")
                                                }
                                                
                                                }
                                                />
                                                </div>
        
                                                    )
                                            :(
                                        <div className="allCenter h-[100%]">
                                        <UserPlus className="hover:text-black hover:scale-125" 
                                            onClick={()=>{sendRequest(item._id)
                                            }
                                        }
                                        />
                                        </div>

                                            )
                                        }
                                    </div>
                                </div>)
                        })}
                        
                    </div>
            </div>
        </div>
    </>)
}
export default SearchResult;
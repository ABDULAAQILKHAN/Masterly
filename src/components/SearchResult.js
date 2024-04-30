import React, { useState,useEffect } from "react";
import "./css/global.css";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import path from "../path";
import { Search, UserX, XCircle} from 'react-feather';
const SearchResult = ({setSearch}) => {
    const [input, setInput] = useState("");
    const [users, setUsers] = useState([])
    const [notFound, setNotFound] = useState(false)
    const user = useSelector((state)=> state.user)

    const auth = {
        headers: {
        "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${path}`,
          Authorization: `Bearer ${user.token}`,
        }
      };
    const searchUsers = async ()=>{
        try{
            
            let data = {userId: user.userId,
                        search: input
                }
            const res = await axios.post(`${path}/searchUsers`,data,auth)
            if(res.data.flag && res.data.data.length > 0){
                setUsers(res.data.data);
                setNotFound(false);
            }else{
                setUsers([])
            }
            if (res.data.flag && res.data.data.length === 0) {
                setNotFound(true);
                setUsers([])
            }
        }catch(error){
            console.log(error)
        }


    }
    useEffect(() => {
        //this is debounce which calls the API after.75 sec's
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

            <div className="h-[90%] w-[90%] sm:w-[60%] bg-white self-center rounded-xl flex flex-col justify-start z-10">

                <div className="w-[100%] h-[fit] flex flex-row gap-1 self-center border-b-2 border-b-[#ff5500]">
                <input 
                    placeholder="Search"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className="SearchinputBorder w-[100%]" />
                    <button className="hover:text-red-500 cursor-pointer mx-4" onClick={()=>{setSearch(false)}}>
                        <XCircle />
                    </button>
                </div>
                <div className=" h-[100%] w-[100%] mb-2">
                    {
                        notFound && input.length>0 &&<>
                            <div className="self-center flex flex-col justify-center">
                                <UserX size={60} className="self-center"/>
                                <h2 className="self-center">
                                    NO user found!
                                </h2>
                            </div>
                        </>
                    }
                    {
                        users.length===0 &&input.length===0 &&<>
                            <div className="self-center flex flex-col justify-center">
                                <Search size={60} className="self-center"/>
                                <h2 className="self-center">
                                    Search users
                                </h2>
                            </div>
                        </>
                    }
                    <div className="max-h-[90%] scrollDiv">
                        {users?.map((user)=>{ 
                            return(
                                <div key={user.userId} className="h-[8vh] w-[100%] my-4 flex flex-col justify-center">
                                    <div 
                                    style={{borderBottom: "2px solid #FF5500",}}
                                    className="w-[90%] h-[100%] flex flex-row justify-around self-center hover:border-2 border-[#FF5500] cursor-pointer">
                                         
                                        <div className="h-[50px] w-[50px] border-2 border-[#FF5500] rounded-full ">
                                            {
                                                //image
                                            }
                                        </div>
                                        <div className="w-[70%] h-[100%] flex flex-col gap-2">
                                            <p>
                                                {user.name}
                                            </p>
                                            <p>
                                                {user.uniqueId}
                                            </p>
                                        </div>

                                    </div>
                                </div>)
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default SearchResult;
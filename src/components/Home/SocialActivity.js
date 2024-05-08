import {React, useEffect} from "react";
import "../css/global.css";
import { XCircle} from 'react-feather';
const SocialActivity = ({setSocialActivityVisiblity}) => {
    
    useEffect(()=>{

    },[])

    return(<>
        <div className="h-[90vh] w-[100vw] absolute left-0 backdrop-blur-sm allCenter" onClick={()=>setSocialActivityVisiblity(false)}>
            <div className="h-fit w-[90%] sm:w-[60%] bg-black secondaryCard self-center pb-4 ">
    
                <div className="w-[100%] border-2 border-b-ThemeBorder flex flex-row justify-between p-3">
                    <h2 className="text-[1rem]">
                        All Social details
                    </h2>
                    <button className="hover:text-red-500 cursor-pointer" onClick={()=>setSocialActivityVisiblity(false)}>
                        <XCircle />
                    </button>
                </div>
                <div className="allCenter h-[100%] w-[100%] bg-black p-4 ">


                </div>
            </div>
        </div>
    </>)
}
export default SocialActivity;
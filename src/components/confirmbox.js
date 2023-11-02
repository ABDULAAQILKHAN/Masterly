import React from "react";
import "./css/global.css";
import {X} from 'react-feather';
const ConfirmBox = ({confirmMessage,setConfirm,setConfirmbox}) => {

    return(<>
        <div className="h-[90vh] w-[100vw] absolute left-0 backdrop-blur-sm allCenter">
            <div className="h-fit w-[90%] sm:w-[60%] bg-black secondaryCard self-center pb-4">
    
                <div className="w-[100%] border-2 border-b-ThemeBorder p-3 flex flex-row justify-between">
                    <h2 className="text-[1rem]">
                        Please Confirm
                    </h2>
                    <button onClick={()=>setConfirmbox(false)}>
                        <X />
                    </button>
                </div>
                <div className="allCenter h-[100%] p-4 ">
                <div className="h-fit w-[100%] allCenter">
                    <h2 className="w-fit self-start mx-4">{confirmMessage}</h2>
                </div>
                <div className="w-[100%] h-[100%] allCenter justify-start">
                    <button className="button" onClick={()=>setConfirm(true)}>Confirm</button>
                </div>
                </div>
            </div>
        </div>
    </>)
}
export default ConfirmBox;
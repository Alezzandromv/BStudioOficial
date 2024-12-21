import React, { useState } from "react";
import './Modelo.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCodeCompare} from "@fortawesome/free-solid-svg-icons";


export function Modelo({title, des, des2, icon1, icon2}){
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div className={`card-proyect  ${isHovered ? "card-proyect-efect" : ""}
                         min-h-[400px] p-5 rounded-2xl flex flex-col justify-between items-center text-center gap-3
                         sm:p-10 sm:items-start sm:text-start sm:gap-5`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} >
            <h5 className= {`text-[30px] sm:text-[35px] ${isHovered ? "text-white" : "text-white/50"} font-semibold`}>{title}</h5>
            <p className={`text-[18px] sm:text-[19px] ${isHovered ? "text-white" : "text-white/50"} font-semibold`} >{des}</p>
            <p className={`text-[16.5px] sm:text-[17.5px] ${isHovered ? "text-white/60" : "text-white/20"} font-semibold`}>{des2}</p>
            <div className='container-icon flex gap-4'>
                <FontAwesomeIcon className={`${isHovered ? "icon-efect" : "card-proyect-icon"} `} icon={faCodeCompare} size="2x" />
                <FontAwesomeIcon className={`${isHovered ? "icon-efect" : "card-proyect-icon"} `}  icon={faCodeCompare} size="2x" />
            </div>
         </div>
    )

}
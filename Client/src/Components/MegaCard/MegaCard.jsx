import React,{ useRef, useEffect } from 'react'
import style from './MegaCard.module.css'
import { useNavigate } from 'react-router-dom';
import { BsArrowUpRight } from "react-icons/bs";


function MegaCard({src,name,field}) {
  const navigate = useNavigate()
  const respondToClick = ()=>{
    navigate("/services")
  }
  return (
    <div className={style.cont}>
      <div className={style.bld}></div>
        <img src={src} alt={src} />
        <div className={style.innerCard}>
               <h1 className={style.title}>{name}</h1>
               <p className={style.description}>{field}</p>
            <button onClick={respondToClick}>Learn More <BsArrowUpRight/></button>
        </div>
    </div>
  )
}



export default MegaCard

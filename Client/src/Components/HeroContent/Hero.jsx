import React from 'react'
import style from './Hero.module.css'
import {BsArrowUpRight } from "react-icons/bs"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { ChangeBlogData } from '../../REDUX/Blog/BlogReducer'

function Hero({data}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const respondToClick = () =>{
    dispatch(ChangeBlogData(data))
    navigate(`/blog/${data.url}`)
  }


  return (
    <div className={style.hero}>
    <div className={`${style.heroCont}`}>
        <p className={style.heroDate}> {data.date}</p>
        <hr className={style.hr}/>
      <h1 className={style.HeroTitle}>
        {data.title}
      </h1>
      <p className={`${style.HeroContent} `}>
        how to target the apple and android generation
      </p>
      <button className={style.HeroBtn} onClick={respondToClick} >
        Learn more 
        <BsArrowUpRight />
      </button>
  </div>
  </div>
  )
}


function BlogHero({date,title}) {
  return (
    <div className={style.hero}>
    <div style={{margin:"auto"}}  className={`${style.heroCont}`}>
        <p className={style.heroDate}> {date}</p>
        <hr className={style.hr}/>
      <h1 className={style.HeroTitle}>
        {title}
      </h1>
      <p className={`${style.HeroContent} `}>
        how to target the apple and android generation
      </p>
  </div>
  </div>
  )
  }


  function ProjectHero({date,title}) {
    return (
      <div className={style.hero}>
      <div   className={`${style.heroCont}`}>
          <hr className={style.hr}/>
        <h1 style={{fontSize:"3rem"}} className={style.HeroTitle}>
        Empower Your Business <br /> with Tailored Solutions
        </h1>
        <p  style={{color: "#11096d",fontWeight:"600"}} className={`${style.HeroContent} `}>
        - Unleash the Full Potential of Your Brand Today
        </p>
    </div>
    </div>
    )
    }
  
  

export default Hero
export {BlogHero,ProjectHero}
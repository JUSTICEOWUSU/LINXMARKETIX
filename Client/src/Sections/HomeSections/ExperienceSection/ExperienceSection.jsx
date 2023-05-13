import React from 'react'
import style from"./ExperienceSection.module.css"
import {SiMaterialdesignicons} from "react-icons/si"

function ExperienceSection() {
  return (
    <div className={`${style.ExperienceSecCont} container d-flex`}>
        <div className={style.Content}>
            <h1 className={style.Title}>Our Experience</h1>
            <div className={`${style.OurExperience} `} data-aos="fade-up">
                <div className='row'>
            <span className={`${style.Item} col-lg-4 col-md-12`}>
                <span className={`${style.Icon}`}>10+</span>
                <span className={`${style.ItemDescription}`}>years running strong</span>
            </span>

            <span className={`${style.Item} col-lg-4 col-md-12`}>
                <span className={`${style.Icon}`}>400+</span>
                <span className={`${style.ItemDescription}`}>Successful projects</span>
            </span>

            <span className={`${style.Item} col-lg-4 col-md-12`}>
                <span className={`${style.Icon}`}>200+</span>
                <span className={`${style.ItemDescription}`}>client</span>
            </span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ExperienceSection
import style from "./HeroSection.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate()
  return (
    <div className={`${style.HeroSectionContainer} container`} data-aos="fade-up">
      <div className={`${style.HeroContentCont}`}>
        <h1 className={style.HeroTitle}>
        Unleash Your Brand's Potential{" "}
          <span className={style.main}>with Tailored Solutions Today</span>
        </h1>
        <p className={`${style.HeroContent} `}>
          As a multi-faceted agency, we specialize in providing professional
          services such as accounting, software engineering, design & art, 
          videography, and marketing, to empower businesses to achieve sustained
          growth.
        </p>
        <button className={style.HeroBtn} onClick={()=>{navigate("/about")}}>
          Learn more{" "}
          <span className={style.btnArrow}>
            <BsArrowUpRight />
          </span>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;

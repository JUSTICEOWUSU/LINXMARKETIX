import React from "react";
import style from "./Client.module.css";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";


function Client({ logo, content, site, Style, sLogo }) {
  const navigate = useNavigate()

  return (
    <div className={`${style.ClientCont} container-fluid`}>
      <span className={style.Logo}>
        <img src={logo} alt={logo} className={`${style[sLogo]}`}/>
      </span>
      <div className={style.Content}>
        <span className={style.Description}>
          <h1 className={style.h1Title}>
            {content}
          </h1>
          <CustomButton content={"Learn more"} Style={{ color: "#11096d" }} onclick={()=>navigate("./about")}/>
        </span>
        <span
          className={style.ImageSpan}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className={style.bnd}></div>
          <img className={style.img} src= {site} alt={site} style={Style} />
        </span>
      </div>
    </div>
  );
}

export default Client;

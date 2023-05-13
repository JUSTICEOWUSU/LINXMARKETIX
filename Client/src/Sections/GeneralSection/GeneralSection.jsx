import React from "react";
import style from "./GeneralSection.module.css";

function GeneralSection({Unique,title,content,icon, hideHr}) {
  return (
    <div className={`${style.container} `}>
            <hr className={`${style.hr} ${style[hideHr]}` }/>
      <span className={style.iconCont}>
        {icon}
      </span>
      <h1 className={style.title}>{title}</h1>
      <p className={style.content}>
        {content}
      </p>
    </div>
  );

}

export default GeneralSection;



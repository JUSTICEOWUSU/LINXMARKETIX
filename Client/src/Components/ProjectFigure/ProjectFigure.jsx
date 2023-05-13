import React from "react";
import style from "./ProjectFigure.module.css";

function ProjectFigure({ src, logo,title }) {
  return (
      <div className={style.content}>
      <div className={style.blend}></div>
      <img className={style.bgImg} src={src}  alt="..." />
      <div className={style.imageContainer}>
      <img src={logo} alt="..." />
      </div>
      <p className={style.title}>{title}</p>
      </div>
  );
}

export default ProjectFigure;

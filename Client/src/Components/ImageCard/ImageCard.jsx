import React from "react";
import style from "./ImageCard.module.css";

function ImageCard({src,name,title}) {
  return (
    <div className={style.container} data-aos="fade-up"
    >
      <span className={style.image}>
        <img
          src={src}
          alt={src}
        />
      </span>
      <span className={style.description}>
        <h5 className={style.name}>{name}</h5>
        <p className={style.title}>{title}</p>
      </span>
    </div>
  );
}

export default ImageCard;

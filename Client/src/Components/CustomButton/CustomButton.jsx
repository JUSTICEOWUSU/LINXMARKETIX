import React from "react";
import style from "./CustomButton.module.css";
import { BsArrowUpRight } from "react-icons/bs";

function CustomButton({ content, Style,onclick }) {
  return (
    <button className={style.HeroBtn} style={Style} onClick={onclick}>
      {content}{" "}
      <span className={style.btnArrow}>
        <BsArrowUpRight />
      </span>
    </button>
  );
}

export default CustomButton;

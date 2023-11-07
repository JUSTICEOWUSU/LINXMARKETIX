import React from "react";
import style from "./BlackBanner.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function BlackBanner({title}) {
  const navigate = useNavigate()
  return (
    <div className={`${style.container} row `} data-aos="fade-left">
      <span className={`col-lg-3 col-md-4 col-12 ${style.titleCont}`}>
        <h1 className={style.title}>{title}</h1>
      </span>

      <span className={`col-lg-9 col-md-8 col-12 ${style.content}`}>
        <h3 className={style.h3}>
          We are accountants, designers, marketers, engineers, learners and
          thinkers, builders and dreamers. And we are hell bent on creating the
          best digital products in the world.
        </h3>
        <button
        className={style.btn}
        onClick={()=>navigate("/contact")}
        >
          work with us
          <BsArrowUpRight/>
        </button>
      </span>
    </div>
  );
}

export default BlackBanner;

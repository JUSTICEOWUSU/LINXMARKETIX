import React from "react";
import style from "./ToolSection.module.css";
import { BiCodeBlock } from "react-icons/bi";
import { MdOutlineAccountTree } from "react-icons/md";
import { BsBrush } from "react-icons/bs";
import { GiVideoCamera } from "react-icons/gi";
import { AiFillAccountBook } from "react-icons/ai";

function ToolsSection() {
  return (
    <div className={`${style.ToolSectionCont} container`}>
      <div className={style.Content}>
        <h1 className={style.ToolSectionTitle}>
          Technology for Any Part of Your Business
        </h1>
        <div className={`${style.ItemsCont}`}>
          <div className="row gy-5">
          <span className={`${style.Item} col-12 col-lg-3 col-md-4`} data-aos="fade-up" data-aos-duration="1050">
            <span className={`${style.Icon}`}>
              <GiVideoCamera />
            </span>
            <p className={`${style.ItemDescription}`}>Videography</p>
          </span>

          <span className={`${style.Item} col-12 col-lg-3 col-md-4`} data-aos="fade-up" data-aos-duration="1052">
            <span className={`${style.Icon}`}>
              <AiFillAccountBook />
            </span>
            <p className={`${style.ItemDescription}`}>Accounting</p>
          </span>

          <span className={`${style.Item} col-12 col-lg-3 col-md-4`} data-aos="fade-up" data-aos-duration="1054">
            <span className={`${style.Icon}`}>
              <BiCodeBlock />
            </span>
            <p className={`${style.ItemDescription}`}>
              web and mobile Development
            </p>
          </span>

          <span className={`${style.Item} col-12 col-lg-3 col-md-4 `} data-aos="fade-up" data-aos-duration="1056">
            <span className={`${style.Icon}`}>
              <MdOutlineAccountTree />
            </span>
            <p className={`${style.ItemDescription}`}>Digital Marketing</p>
          </span>

          <span className={`${style.Item} col-12 col-lg-3 col-md-4`} data-aos="fade-up" data-aos-duration="1058">
            <span className={`${style.Icon}`}>
              <BsBrush />
            </span>
            <p className={`${style.ItemDescription}`}>UI/UX Design and Art</p>
          </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsSection;

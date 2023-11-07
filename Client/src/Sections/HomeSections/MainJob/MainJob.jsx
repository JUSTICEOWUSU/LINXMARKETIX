import React from "react";
import style from "./MainJob.module.css";
import { GiClapperboard, GiPencilBrush } from "react-icons/gi";
import { SiGooglemarketingplatform } from "react-icons/si";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoMdCodeWorking } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function MainJob() {
  const navigate = useNavigate()
  const respondToBtnClick = () =>{
      navigate("services")
  }

  return (
    <div className={`${style.container} container-fluid`}>
      <div className={style.content}>
        <span className={style.lottie}>
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_wwxe1hfi.json"
            background="transparent"
            speed="1"
            style={{ width: "100px", height: "100px" }}
            loop
            autoplay
          ></lottie-player>
        </span>

        <h1 className={style.title}>What are our professional capabilities?</h1>
        <h3 className={style.h3}>
          We are a multi-faceted firm that specializes in delivering a
          comprehensive suite of professional services, including accounting,
          software engineering, design & art, videography, and marketing, with the aim of
          empowering businesses to achieve sustained growth and reach their full
          potential
        </h3>

        <span className={`${style.categories1} row justify-content-start gy-5`}>
          <span className={`${style.category} col-lg-6 col-md-6 col-12`} data-aos="fade-up" data-aos-duration="1000">
            <span className={style.iconCont}>
              <IoMdCodeWorking className={style.icon} />
            </span>
            <h1 className={style.cardH1}>development</h1>
            <p className={style.description}>
              Transform your business by creating mobile and web cutting-edge
              applications and systems that automate workflows, improve
              functionality, and boost performance, thereby enhancing your
              overall business operations, competitiveness, and profitability.
            </p>
            <button onClick={respondToBtnClick} className={style.btn}>Learn more</button>
          </span>

          <span className={`${style.category} col-lg-6 col-md-6 col-12`} data-aos="fade-up" data-aos-duration="1000">
            <span className={style.iconCont}>
              <GiPencilBrush className={style.icon} />
            </span>
            <h1 className={style.cardH1}>Human-centric design & art</h1>
            <p className={style.description}>
              Elevate your brand by creating visually stunning graphics,
              illustrations, and designs that attract attention, establish
              credibility, and ultimately drive business growth by increasing
              customer engagement and loyalty.
            </p>
            <button onClick={respondToBtnClick} className={style.btn}>Learn more</button>
          </span>

          <span className={`${style.category} col-lg-6 col-md-6 col-12`} data-aos="fade-up" data-aos-duration="1000">
            <span className={style.iconCont}>
              <BiMoneyWithdraw className={style.icon} />
            </span>
            <h1 className={style.cardH1}>accountancy</h1>
            <p className={style.description}>
              Streamline your financial processes, ensure compliance with
              regulations, and provide valuable insights to help you make
              informed business decisions, ultimately increasing profitability
              and financial stability.
            </p>
            <button onClick={respondToBtnClick} className={style.btn}>Learn more</button>
          </span>

          <span className={`${style.category} col-lg-6 col-md-6 col-12`} data-aos="fade-up" data-aos-duration="1000">
            <span className={style.iconCont}>
              <SiGooglemarketingplatform className={style.icon} />
            </span>
            <h1 className={style.cardH1}>digital marketing solutions</h1>
            <p className={style.description}>
              Amplify your online presence by utilizing a combination of proven
              digital strategies to increase brand visibility, drive traffic,
              and ultimately generate more leads and conversions for your
              business.
            </p>
            <button onClick={respondToBtnClick} className={style.btn}>Learn more</button>
          </span>

          <span className={`${style.category} col-lg-6 col-md-6 col-12`} data-aos="fade-up" data-aos-duration="1000">
            <span className={style.iconCont}>
              <GiClapperboard className={style.icon} />
            </span>
            <h1 className={style.cardH1}>videography</h1>
            <p className={style.description}>
              create exceptional videos that convey your brand message, engage
              your audience, and help your business expand by increasing its
              visibility and attracting more potential customers.
            </p>
            <button onClick={respondToBtnClick} className={style.btn}>Learn more</button>
          </span>
        </span>
      </div>
    </div>
  );
}

export default MainJob;

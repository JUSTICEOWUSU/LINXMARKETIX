import React from "react";
import style from "./Potential.module.css";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

function Potential() {
  const navigate = useNavigate()
  return (
    <div className={`${style.container} container-fluid`}>
      <h1 className={`${style.title} ${style.smallTi}`}>
            Now let us introduce{" "}
            <span className={style.br}>
              you to our potential and capabilities
            </span>
          </h1>
      <span className={style.content}>
        <span className={style.description}>
          <h1 className={`${style.title} ${style.bigTi}`}>
            Now let us introduce{" "}
            <span className={style.br}>
              you to our potential and capabilities
            </span>
          </h1>
          <p className={style.text}>
            Thank you for your interest in our company. We're confident in our
            ability to exceed your expectations and would be thrilled to begin
            working with you soon. However, if you would like to learn more
            about our company and the services we offer,{" "}
            <span className={style.link} onClick={() => navigate("/about")}>Click here to learn more</span> about
            us. Please contact us with any questions or concerns you may have.
            We look forward to the opportunity to be of service to you.
          </p>
          <CustomButton content={"Get started today"} onclick={()=>navigate("/contact")}/>
        </span>
        <span className={style.imgCont} data-aos="fade-left" data-aos-duration="800">
          <span className={style.img}>
            <div className={style.bld}></div>
            <img
              src="https://img.freepik.com/premium-photo/business-people-handshake-smile-b2b-meeting-partnership-teamwork-office-happy-female-executive-shaking-hands-with-employee-interview-greeting-introduction-workplace_590464-147384.jpg?size=626&ext=jpg&ga=GA1.2.1594462479.1678118375&semt=sph"
              alt="business"
            />
          </span>
        </span>
      </span>
    </div>
  );
}

export default Potential;

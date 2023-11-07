import React from "react";
import Style from "./Footer.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { FaStaylinked } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={`${Style.container} container-fluid`}>
      <div className={Style.content}>
        <h1 className={Style.title}>work with us</h1>
        <h2 className={Style.description}>
          Eliminate the guesswork to achieving the result you need
        </h2>
        <CustomButton
          content={"Get in touch"}
          onclick={() => navigate("/contact")}
          Style={{
            color: `rgb(221, 135, 6)`,
            border: `1px solid rgb(221, 135, 6)`,
          }}
        />
        <span className={Style.line}>
          <hr className={Style.horizontal} />
          <button className={Style.lineButton} onClick={() => navigate("/")}>
            <FaStaylinked />
            stay connected
          </button>
        </span>
        <span className={Style.mediaContMini}>
          <span className={Style.logoContainer}>
            <img
              src="https://i.ibb.co/Qr9cSL6/Linxmarketix-Logo-250-100-px.png"
              alt="logo"
            />
          </span>
          <p className={Style.loc}>
            444 Alaska Avenue <br />
            Torrance, CA 90503
            <br />
            USA
          </p>
          <p className={Style.date}>since 2012</p>
        </span>
        <span className={Style.socialMedia}>
          <h3>FOLLOW US:</h3>
          <div
            style={{
              position: "relative",
              width: "250px",
              display: "flex",
              flexDirection: "row",
              padding: 0,
              alignItems: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/linxmarketix"
              style={{
                textDecoration: "none",
                width: "40px",
                height: "40px",
                display: "block",
                marginRight: "15%",
                border:"1px solid #fff", borderRadius:"50%", padding:"5px"
              }}
            >
              <img
                src="https://i.ibb.co/T1XVjq2/71a2f94f39d027be.png"
                style={{ width: "100%", height: "100%", borderRadius:"50%"}}
                alt="Link 1"
              />
            </a>
            <a
              href="https://www.twitter.com/linxmarketix"
              style={{
                textDecoration: "none",
                width: "40px",
                height: "40px",
                display: "block",
                marginRight: "15%",
                border:"1px solid #fff", borderRadius:"50%", padding:"5px"
              }}
            >
              <img
                src="https://i.ibb.co/v3tZx1N/2ecf0f3c2ed09bdb.png"
                border="0"
                style={{ width: "100%", height: "100%"}}
                alt="Link 2"
              />
            </a>
            <a
              href="https://www.facebook.com/linxmarketix"
              style={{
                textDecoration: "none",
                width: "40px",
                height: "40px",
                display: "block",
                border:"1px solid #fff", borderRadius:"50%", padding:"5px"
              }}
            >
              <img
                src="https://i.ibb.co/bspfPhV/Facebook-logo.png"
                border="0"
                style={{ width: "100%", height: "100%"}}
                alt="Link 3"
              />
            </a>
          </div>
        </span>

        <span className={Style.privacyBoard}>
          <p className={Style.privacy}>
            © 2023 LINXMARKETIX ALL RIGHTS RESERVED.
          </p>
          <p className={Style.privacyB}>
            <span className={Style.TOS} onClick={() => navigate("/terms")}>
              TERMS OF SERVICE{" "}
            </span>{" "}
            |{" "}
            <span className={Style.PP} onClick={() => navigate("/policy")}>
              {" "}
              PRIVACY POLICY
            </span>
          </p>
        </span>
      </div>
    </div>
  );
}

export default Footer;

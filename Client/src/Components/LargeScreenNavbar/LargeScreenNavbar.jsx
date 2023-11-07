import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./LargeScreenNavbar.module.css";
import SmallScreenBar from "../SmallScreenNavbar/SmallScreenBar";
import CustomNavLink from "../CustomNavLink/CustomNavLink";
import { CustomLargeNavLink } from "../CustomNavLink/CustomNavLink";
import Logos from "../../DATA/LOGOS/Logos";




import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

// Main LargeScreen navigation bar
function LargeScreenNavbar() {
  const location = useLocation();
const navigate = useNavigate();
  const match = location.pathname.split("/");
  const loc = match[match.length - 1];
  const Display = (loc && loc.length > 8) || !loc ? "none" : "";
  const display = loc && loc.length <= 8 ? "none" : "";

  const [circleSize, setCircleSize] = useState(35);
  const [cstyle, setCStyle] = useState(1400);
  const [curRentLo, setCurrentLoc] = useState(0);


  let logoColor = "";

  useEffect(() => {
    function handleScroll() {
      const windowHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const heightDifference = windowHeight - scrollPosition;
      const newCircleSize = (40 * heightDifference) / windowHeight;
      setCircleSize(newCircleSize);
      setCStyle(heightDifference);
      setCurrentLoc(scrollPosition);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // State Controlling the Visibility of the Large Navigation Bar
  const { showAndHideNav } = useSelector((state) => state.navBarState);
    const { showAndHideLogos } = useSelector(
      (state) => state.logosState
    );

  const BC = cstyle <= 1300 ? "white" : "blue";
  const sidesColor =
    (!loc && curRentLo > 1700 && cstyle >= 1300) ||
    ((loc == "work" || loc == "blog" || match.length >= 2) &&
      curRentLo >= 500 &&
      cstyle >= 1300) ||
    ((loc == "about" || loc == "services") &&
      curRentLo >= 300 &&
      cstyle >= 1300) ||
    showAndHideNav ||
    loc == "contact" ||
    loc == "terms" ||
    loc == "policy"
      ? "black"
      : "white";
  logoColor =
    curRentLo >= 5 ||
    showAndHideNav ||
    loc == "contact" ||
    loc == "terms" ||
    loc == "policy"
      ? "https://i.ibb.co/g32NMpP/Linxmarketix-Logo-250-100-px-1.png"
      : "https://i.ibb.co/Qr9cSL6/Linxmarketix-Logo-250-100-px.png";
  const navColor =
    curRentLo >= 5 ||
    showAndHideNav ||
    loc == "contact" ||
    loc == "terms" ||
    loc == "policy"
      ? "black"
      : "white";
  const navBackground =
    curRentLo >= 5 ? "rgba(255, 255, 255, 0.8)" : "transparent";

{/* <img src="https://i.ibb.co/3yFphxs/Linxmarketix-Logo-250-100-px-500-500-px.png" alt="Linxmarketix-Logo-250-100-px-500-500-px" border="0">
<img src="https://i.ibb.co/g32NMpP/Linxmarketix-Logo-250-100-px-1.png" alt="Linxmarketix-Logo-250-100-px-1" border="0">
<img src="https://i.ibb.co/Qr9cSL6/Linxmarketix-Logo-250-100-px.png" alt="Linxmarketix-Logo-250-100-px" border="0"></img> */}
  const LocSmallStyle = {
    display: Display,
    color: sidesColor,
    transition: "color 0.5s ease-out",
  };

  const LocBigStyle = {
    display: display,
    color: sidesColor,
    transition: "color 0.5s ease-out",
  };

  const circleStyles = {
    width: circleSize + "px",
    height: circleSize + "px",
    borderRadius: "50%",
    border: "1px solid " + BC,
    transition: "all 0.5s ease-out",
  };

  const sidesStyles = {
    color: sidesColor,
    transition: "color 0.5s ease-out",
  };

  const navStyles = {
    background: navBackground,
    color: navColor,
    transition: "all 0.5s ease-out",
  };


  return (
    <div className={style.all}>
    <Logos/>
    <div className={`${style.AppCont} ${style[showAndHideLogos]}`}>
      
      <header
        style={navStyles}
        className={`${style.largeNavCont} container-fluid ${style[showAndHideNav]}`}
      >
        <span className={style.logoContainer} onClick={()=>navigate("/")}>
          <img src={logoColor} alt="logo" border="0" />
        </span>
        <span
          style={{ color: navColor }}
          className={`${style.navItemsContainer} ${style.navItemsContainerLarge}`}
        >
          <CustomLargeNavLink
            destination={"/"}
            content={"Home"}
            optional={"theHome"}
          />
          <CustomLargeNavLink destination={"/about"} content={"About"} />
          <CustomLargeNavLink destination={"/blog"} content={"Blog"} />
          <CustomLargeNavLink destination={"/work"} content={"Products"} />
          <CustomLargeNavLink
            destination={"/contact"}
            content={"get in touch"}
            optional={"getInTouch"}
          />
        </span>
        <span
          style={{ color: navColor }}
          className={`${style.navItemsContainer} ${style.navItemsContainerSmall}`}
        >
          <CustomNavLink
            destination={"/"}
            content={"Home"}
            optional={"theHome"}
          />
          <CustomNavLink destination={"/about"} content={"About"} />
          <CustomNavLink destination={"/services"} content={"Services"} />
          <CustomNavLink destination={"/blog"} content={"Blog"} />
          <CustomNavLink destination={"/work"} content={"Products"} />
        </span>
      </header>
      <SmallScreenBar Style={navStyles} navColor={navColor} />
      <div
        className={style.vertical}
      ></div>
      <div className={style.cross}></div>
      <div className={style.circle}>
        <div style={circleStyles} className={style.circleCont}></div>
      </div>
      <div style={LocSmallStyle} className={style.location}>
        {loc ? loc : ""}
      </div>
      <div style={LocBigStyle} className={style.LLocation}>
        {loc ? loc : "multi-faceted"}
      </div>
      <div style={sidesStyles} className={style.scrollText}>
        scroll
      </div>
      <Outlet />
      <Footer />
    </div>
    </div>
  );
}

export default LargeScreenNavbar;

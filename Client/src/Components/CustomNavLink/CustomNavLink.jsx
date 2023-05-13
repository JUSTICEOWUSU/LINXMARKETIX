import React from "react";
import style from "./CustomNavLink.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showOrHideNav } from "../../REDUX/NavbarStates/NavbarReducer";

function CustomNavLink({ destination, content,optional }) {
  const { showAndHideNav } = useSelector((state) => state.navBarState);
  const dispatch = useDispatch();

  const respondToToggle = () => {
    if (showAndHideNav) dispatch(showOrHideNav(""));
    else dispatch(showOrHideNav("showNav"));
  };

  return (
    <span className={`${style.navLinkContainer} ${style[optional]}`}>
      <NavLink to={destination} onClick={respondToToggle}>
        {" "}
        {content}{" "}
      </NavLink>
    </span>
  );
}


function CustomLargeNavLink({ destination, content,optional }) {

  return (
    <span className={`${style.navLinkContainer} ${style[optional]}`}>
      <NavLink to={destination} >
        {" "}
        {content}{" "}
      </NavLink>
    </span>
  );
}


export default CustomNavLink;
export {
  CustomLargeNavLink
}

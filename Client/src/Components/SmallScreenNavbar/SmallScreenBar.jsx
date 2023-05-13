import style from "./SmallScreenBar.module.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { GiTireIronCross } from "react-icons/gi";
import { showOrHideNav } from "../../REDUX/NavbarStates/NavbarReducer";
import { useNavigate } from "react-router-dom";


function SmallScreenBar({Style,navColor}) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { showAndHideNav } = useSelector(
    (state) => state.navBarState
  );

  const respondToToggle = () => {
    if (showAndHideNav) dispatch(showOrHideNav(""));
    else dispatch(showOrHideNav("showNav"));
  };

  const respondToGetInTouch = ()=>{
    navigate("contact")
  }


  let logoColor = showAndHideNav || navColor == "black"  ? "https://i.ibb.co/g32NMpP/Linxmarketix-Logo-250-100-px-1.png" : "https://i.ibb.co/Qr9cSL6/Linxmarketix-Logo-250-100-px.png";

  return (
    <div  style = {Style} className={`${style.smallScreenBarCont} container-fluid`}>
         <span className={style.logoContainer}>
          <img
            src={logoColor}
            alt="logo"
            border="0"
          />
        </span>
      <span className={`${style.toggleCont} `}>
        <span className={style.toggleItem} onClick={respondToToggle}>
          {!showAndHideNav && <HiOutlineBars3  className={style.bars}/>}
          {showAndHideNav && <GiTireIronCross className={style.bars} />}
        </span>
        <button className={style.NavBtn} onClick={respondToGetInTouch}>stay in touch</button>
      </span>
    </div>
  );
}

export default SmallScreenBar;

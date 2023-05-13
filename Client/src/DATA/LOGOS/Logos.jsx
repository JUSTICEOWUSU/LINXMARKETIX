import React from "react";
import style from "./Logos.module.css";
import {BsArrowLeft} from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux";
import { showOrHideLogos } from "../../REDUX/LogosState/LogosStates";


const logoData = [
  {
    logo: (<img src="https://i.ibb.co/CM2Y7zF/Pink-and-White-Modern-Minimal-Brand-Logo.png" alt="Pink-and-White-Modern-Minimal-Brand-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/58qFpST/Black-White-Simple-Fashion-Logo.png" alt="Black-White-Simple-Fashion-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/CsFHC6t/Cute-tosca-white-momo-brand-simple-logo.png" alt="Cute-tosca-white-momo-brand-simple-logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/4ffZX3W/Brown-and-White-Bold-Calligraphy-Brand-Logo.png" alt="Brown-and-White-Bold-Calligraphy-Brand-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/88JqZxr/Black-White-Minimalist-Letter-FG-Logo.png" alt="Black-White-Minimalist-Letter-FG-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/sjDcCRV/Black-and-White-Minimal-Furniture-Branding-Logo-1.png" alt="Black-and-White-Minimal-Furniture-Branding-Logo-1" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/J7kxQgd/Cream-Brown-Miinimalist-Illustration-Coffee-Shop-Logo.png" alt="Cream-Brown-Miinimalist-Illustration-Coffee-Shop-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/DkFMJcP/initial-simple-brand-logo.png" alt="initial-simple-brand-logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/sHBT44F/black-and-white-minimalist-personal-brand-logo.png" alt="black-and-white-minimalist-personal-brand-logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/zGSfSVq/Fashion-Brand-Logo.png" alt="Fashion-Brand-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/Sm2MgnX/Black-White-Minimalist-Square-Branding-Logo-Design.png" alt="Black-White-Minimalist-Square-Branding-Logo-Design" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/p1bksP1/Clean-Handwriting-Brand-Name-Initial-Monogram-Circle-Logo.png" alt="Clean-Handwriting-Brand-Name-Initial-Monogram-Circle-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/6YTqNF8/Purple-and-White-Elegant-Brand-Logo.png" alt="Purple-and-White-Elegant-Brand-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/M938sGW/Brown-Sun-Line-Burst-Minimalist-Coaching-Logo.png" alt="Brown-Sun-Line-Burst-Minimalist-Coaching-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/VtnLp83/Black-and-White-Distorted-Personal-Brand-Logo.png" alt="Black-and-White-Distorted-Personal-Brand-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/DttLwqD/White-Black-M-Letter-Logo-Design-Business-Identity-for-Digital-Design-Company.png" alt="White-Black-M-Letter-Logo-Design-Business-Identity-for-Digital-Design-Company" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/RTMwffQ/Black-and-White-Initial-Branding-Logo.png" alt="Black-and-White-Initial-Branding-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/YBhTvgb/Black-White-Minimalist-Brand-Fashion-Logo.png" alt="Black-White-Minimalist-Brand-Fashion-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/9ymhZmN/White-and-Black-Simple-Boutique-Initials-Logo.png" alt="White-and-Black-Simple-Boutique-Initials-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/ZXgX66F/Dark-Green-and-Light-Green-Modern-Gradient-Health-Products-Health-Logo.png" alt="Dark-Green-and-Light-Green-Modern-Gradient-Health-Products-Health-Logo" border="0"/>),
  },
  {
    logo: (<img src="https://i.ibb.co/2vSt7kS/Black-Beige-Modern-Minimalist-Monogram-Initials-Logo.png" alt="Black-Beige-Modern-Minimalist-Monogram-Initials-Logo" border="0"/>),
  },
];

function Logos() {
  const dispatch = useDispatch()
  const { showAndHideLogos } = useSelector(
    (state) => state.logosState
  );


  return (
    <div className={`${style.container} ${style[showAndHideLogos]}`}>
        <span className={style.arrowCont} ><BsArrowLeft className={style.arrow} onClick={()=>dispatch(showOrHideLogos("hideLogos"))}/></span>
      <div className={`row gy-0 ${style.logosCont}`}>
        {logoData.map((ele,index) => {
          return <div className={`col-lg-3 col-4 ${style.logo}`} key={`${index}`}>
            {
                ele.logo
            }
          </div>;
        })}
      </div>
    </div>
  );
}

export default Logos;

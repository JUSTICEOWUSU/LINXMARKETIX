import React from "react";
import style from "./Trustees.module.css";
import {BsArrowUpRightSquare} from "react-icons/bs"
import {  useDispatch } from "react-redux";
import { showOrHideLogos } from "../../../REDUX/LogosState/LogosStates";


function Trustees() {


  const dispatch = useDispatch()



  return (
      <div className={`${style.TrusteesCont} container-fluid`}>
        <div className={style.Content}>
          <span className={`${style.titleCont} row`}>
          <h2 className={`${style.TitleH2} col-lg-8 col-md-12 col-12`}>
            Trusted by the world Leading companies and startups
          </h2>
          <hr className={`${style.hr} col-4 `} />
          </span>
          

          <div className={`${style.ItemsCont}`}>
            <div className={`${style.items} row`}>
            <span className={`${style.Item} col-4`}>
              <img
                src="https://i.ibb.co/PGhT2gW/primitive.png"
                alt="Primitive-logo"
              />
            </span>

            <span className={`${style.Item} col-4`}>
              <img
                src="https://i.ibb.co/Smbv68y/Brex.png"
                alt="Brex-logo"
              />
            </span>

            <span className={`${style.Item} col-4`}>
              <img
                src="https://i.ibb.co/q9kG6R0/dgk.png"
                alt="DGK-logo"
              />
            </span>
          </div>
          </div>
        </div>
        <span className={style.Arrow} onClick={()=>dispatch(showOrHideLogos("showLogos"))}>
            <BsArrowUpRightSquare/>
        </span>
      </div>
  );
}


export default Trustees;

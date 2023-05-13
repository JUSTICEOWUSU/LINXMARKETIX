import React from "react";
import style from "./Card.module.css";

function Card({number,square,title,content,list,Style}) {
  return (
    <div className={style.container} style={Style}>
      <span className={style.iconCont}>
        <span className={style.icon}>
          {
            square
          }
        </span>
        <h1 className={style.number}>{number}</h1>
      </span>
      <h4 className={style.title}>{title}</h4>
      <p className={style.content}>
        {content}
      </p>
        <h6 className={style.deliverables}>Deliverables</h6>
        <ul className={style.list}>
          {
            list.map(item=>{
              return(<li>{item}</li>)
            })
          }
        </ul>
    </div>
  );
}

export default Card;

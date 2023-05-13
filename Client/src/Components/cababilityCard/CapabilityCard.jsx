import React from 'react'
import style from "./CapabilityCard.module.css"
import {GiClapperboard} from 'react-icons/gi'

function CapabilityCard({list,title,description,icon}) {
  return (
    <div className={style.container}>
            <span className={style.iconCont}>
              {icon}
            </span>
            <h1 className={style.cardH1}>{title}</h1>
            <p className={style.description}>
              {
                description
              }
            </p>
            <span className={style.listCont}>
            <ul className={`${style.list} row`}>
                {
                    list.map(item=>{
                        return (
                            <li className='col-lg-6  col-12' key={item}>{item}</li>
                        )
                    })
                }
            </ul>
            </span>   
    </div>
  )
}

export default CapabilityCard
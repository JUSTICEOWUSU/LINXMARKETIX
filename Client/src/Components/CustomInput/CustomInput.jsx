import React from 'react'
import style from "./CustomInput.module.css"

function CustomInput({type,value,label,custom,name,onchange}) {
  return (
    <>
    <label htmlFor={label} className={style.label}>{label}</label>
    <input className={`${style.listCont} ${style[custom]}`} type={type} value={value} id={label} onChange={onchange} name={name}/>
    </>
  )
}

export default CustomInput
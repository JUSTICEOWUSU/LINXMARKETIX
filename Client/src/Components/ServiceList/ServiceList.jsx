import React from 'react';
import style from './ServiceList.module.css';

function ServiceList({services,category}) {
  return (
    <div className={style.container }>
        <h3 className={style.title}> {category} </h3>
        <ul>
            {
                services.map(service=>{
                    return (<li key={service}>{service}</li>)
                })
            }
        </ul>
    </div>
  )
}

export default ServiceList
import React from "react";
import style from "./BlogCard.module.css";
import {GoCalendar} from "react-icons/go"
import {TfiTime} from "react-icons/tfi"
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { ChangeBlogData } from "../../REDUX/Blog/BlogReducer";


function BlogCard({data}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const respondToClick = () =>{
    dispatch(ChangeBlogData(data))
    navigate(`/blog/${data.url}`)
  }

  return (
      <div className={`card ${style.container} `} style={{width: "100%"}} >
        <div className={style.imgCont}>
        <img src={data.image} class="card-img-top" alt={data.title} />
        </div>
        <div className={`card-body text-start p-0`}>
          <h5 className={`card-title ${style.title}`}>{data.title}</h5>
          <span className={`${style.text}`}>
            <span className={style.date}><GoCalendar/> {data.date}</span>  <span className={style.time}> {data.time}m <TfiTime/></span>
          </span>
          <button className={style.btn} onClick={respondToClick} >Read More <BsArrowUpRight/></button>
      </div>
    </div>
  );
}

export default BlogCard;

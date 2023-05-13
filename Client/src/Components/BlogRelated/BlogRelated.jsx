import React from "react";
import style from "./BlogRelated.module.css";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { ChangeBlogData } from "../../REDUX/Blog/BlogReducer";

function BlogRelatedCard({data,custom}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const respondToClick = () => {
        dispatch(ChangeBlogData(data));
        navigate(`/blog/${data.url}`);
      };
  return <div className={`${style.cardContainer} ${custom}`} onClick={respondToClick} >
    <div className={style.inner}>
    <img src={data.image} alt={data.title} />
    <div className={style.blend}>
    </div>
    <p className={style.cardContent}>{data.title}</p>
    </div>
  </div>;
}

function BlogRelated({allData}) {

  return (
    <div className={style.container}>
      <h1 className={style.title}>Related posts:</h1>
      <div className={style.boxes}>
        {
            allData.map((item,index)=>{
                const ind = index == 0 ? "ms-3" : index == 1?"mx-3":"me-3";
                return (
                    <BlogRelatedCard data={item} custom={ind} key={index}/>
                )
            })
        }
      </div>
    </div>
  );
}

export default BlogRelated;

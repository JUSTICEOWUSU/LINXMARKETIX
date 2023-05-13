import React,{useEffect} from "react";
import style from "./Blog.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import BlogCard from "../../Components/BlogCard/BlogCard";
import Hero from "../../Components/HeroContent/Hero";
import blogs from "../../DATA/BLOG_DATA/BlogData";
import {useSelector} from "react-redux"


function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogData = useSelector(state=>state.blogDataSate.BlogData)

  return (
    <div className={style.container} >
      <div className={style.blend}>
        <span className={style.mainBlend}></span>
        <img
          src={blogData.image}
          alt=""
        />
      </div>

      <Hero data={blogData}/>

      <div className={`row gy-5  ${style.cards}`} data-aos="fade-left" data-aos-duration="800">
        {
            blogs.map(ele=>{
                return(
                    <span className={`col-lg-4 col-md-6 col-12`} key={ele.title}>
                        <BlogCard data={ele}/>
                    </span>
                )
            })
        }
      </div>
    </div>
  );
}

export default Blog;

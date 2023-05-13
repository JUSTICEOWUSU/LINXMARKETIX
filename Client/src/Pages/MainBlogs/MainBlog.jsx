import React,{useEffect} from 'react'
import style from "./MainBlog.module.css"
import {useSelector} from "react-redux"
import {BlogHero} from '../../Components/HeroContent/Hero'
import BlogMission from '../../Components/BlogMission/BlogMission'
import BlogRelated from '../../Components/BlogRelated/BlogRelated'
import blogs from '../../DATA/BLOG_DATA/BlogData'

function filterAndRandomItems(arr, category) {
  // Filter the array based on the category
  const filteredArr = arr.filter((item) => item.category === category);

  // Shuffle the filtered array using the Fisher-Yates algorithm
  for (let i = filteredArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredArr[i], filteredArr[j]] = [filteredArr[j], filteredArr[i]];
  }

  // Return the first 3 items from the shuffled array, or all items if there are fewer than 3
  return filteredArr.slice(0, 3);
}




function MainBlog() {
  const blogContentData = useSelector(state=>state.blogDataSate.BlogData)
  const BC = blogs.find(data => data.title === blogContentData.title);
  
  const filteredData = filterAndRandomItems(blogs,blogContentData.category)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
        <div className={style.banner}>
            <img src={blogContentData.image} alt={blogContentData.title} />
        </div>
        <div className={style.blend}></div>
        <div className={style.content}>
            <BlogHero date={blogContentData.category} title={blogContentData.title}/>
            {BC.content}
            <BlogMission/>
            <BlogRelated allData={filteredData}/>
        </div>
    </div>
  )
}

export default MainBlog
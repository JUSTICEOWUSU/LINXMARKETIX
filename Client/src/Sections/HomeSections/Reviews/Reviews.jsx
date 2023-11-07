import React from "react";
import style from "./Reviews.module.css";
import ReviewsCarousel from "../../../Components/ReviewsCarousel/ReviewsCarousel";

const ReviewsData = [
  {
    paragraph:"I asked this company to do a brochure design and guess what., was amazing beautiful own creative design, i could not believe it was so happy for it., easy to work with. I highly recommend this company to any one., they do a good job., so thank you guys you are the best,. i will use again and again",
    title:"DROPSHIPPER + client",
    name:"Mariela Photo",
  },
  {
    paragraph:"We are doing a 5-phase project with Linxmarketix and it's exceeding my expectations. They are extremely thorough and great with communication. The project is coming along just as I had hoped and I'm excited to see the end result!",
    title:"FOUNDER,shopbeta + client",
    name:"Clackum",
  },
  {
    paragraph:"I would never in my life expected such professional work! I'm absolutely blown away!!! Seriously if your marketing plan is important to you, you'd be crazy not to choose Linxmarketix!! Many Thanks!!!! I just hope to find someone professional enough to actually know how to perform all the instructions.",
    title:"BUSINESS MAN+ new client",
    name:"Shahar Moskovits",
  }
]

function Reviews() {
  return (
    <div className={`${style.container}`}>
      <div className={style.content}>
        <p className={style.opinion}>
          Our clients opinions regarding our services{" "}
          <hr className={style.hr} />
        </p>
           <ReviewsCarousel items={ReviewsData}/>
      </div>
    </div>  
  );
}

export default Reviews;

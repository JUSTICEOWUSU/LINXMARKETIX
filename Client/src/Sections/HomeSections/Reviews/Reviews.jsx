import React from "react";
import style from "./Reviews.module.css";

function Reviews() {
  return (
    <div className={`${style.container}`}>
      <div className={style.content}>
        <p className={style.opinion}>
          Our clients opinions regarding our services{" "}
          <hr className={style.hr} />
        </p>
        <div
          id="carouselExampleSlidesOnly"
          className={`carousel slide `}
          data-bs-ride={`carousel`}
        >
          <div className={`carousel-inner`}>
            <div className={`carousel-item active`}>
              <h1 className={`d-block w-100 ${style.title}`}>
                "I asked this company to do a brochure design and guess what.,
                was amazing beautiful own creative design, i could not belive it
                was so happy for it., eazy to work with. I highly recomend this
                company to any one., they do a good job., so thank you guys you
                are the best,. i will use again and again"
              </h1>
              <p className={style.name}> Mariela Photo</p>
              <p className={style.role}>DROPSHIPPER + client</p>
            </div>

            <div className={`carousel-item`}>
              <h1 className={`d-block w-100 ${style.title}`}>
                "We are doing a 5-phase project with Jowu and it's exceeding my
                expectations. They are extremely thorough and great with
                communication. The project is coming along just as I had hoped
                and I'm excited to see the end result!"
              </h1>
              <p className={style.name}> Clackum</p>
              <p className={style.role}>FOUNDER,shopbeta + client </p>
            </div>

            <div className={`carousel-item`}>
              <h1 className={`d-block w-100 ${style.title}`}>
                "I would never in my life expected such professional work! I'm
                absolutely blown away!!! Seriously if your marketing plan is
                important to you, you'd be crazy not to choose JOWU!! Many
                Thanks!!!! I just hope to find someone professional enough to
                actually know how to perform all the instructions."
              </h1>
              <p className={style.name}> Shahar Moskovits</p>
              <p className={style.role}>BUSINESS MAN+ new client</p>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Reviews;

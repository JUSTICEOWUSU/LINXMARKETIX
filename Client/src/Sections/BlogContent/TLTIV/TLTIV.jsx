
import React from "react";
import style from "./TLTIV.module.css"

function TLTIV() {
  return (
    <div className={style.container}>
      <section className={style.intro}>
        <p className="my-4">
          Video marketing has become an essential part of any business's
          marketing strategy. With the increasing use of social media and online
          platforms, videos have become an effective way to engage with
          audiences and showcase products and services. In recent years, the
          videography industry has seen a number of trends emerge that are
          changing the way businesses create and share videos. Here are the
          latest trends in videography and what they mean for your business:
        </p>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>1. Vertical Video</h2>
        <p className="my-4">
          Vertical video has become increasingly popular due to the rise of
          mobile devices and social media platforms like TikTok and Instagram.
          Instead of shooting in the traditional landscape mode, vertical videos
          are shot in a portrait mode that fits better on mobile screens.
          Vertical videos have been shown to have higher engagement rates on
          social media platforms, making it a trend that businesses should take
          note of.{" "}
        </p>
        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
        <div className={style.blend}></div>
        <img
          src="https://img.freepik.com/free-photo/close-up-smartphone-recording-vlog-african-influencer-home-studio-using-smartphone-speaking-during-livestreaming-blogger-discussing-podcast-wearing-headphones-professional-microphone_482257-12709.jpg?size=626&ext=jpg&ga=GA1.1.1594462479.1678118375&semt=ais"
          alt="Vertical video example"
        />
        </div>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>2. Live Video</h2>
        <p className="my-4">
          Live video has become a popular way for businesses to connect with
          their audiences in real-time. Platforms like Facebook, Instagram, and
          YouTube have all introduced live streaming features that allow
          businesses to share live events, product launches, and Q&A sessions
          with their audiences. Live video is a great way to build trust and
          engagement with your audience, as it creates a more personal and
          interactive experience.
        </p>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>3. 360-Degree Video</h2>
        <p className="my-4">
          360-degree video is a trend that has been around for a few years but
          is still gaining popularity. 360-degree videos allow viewers to
          control the camera angle and explore the video environment in all
          directions. This type of video is great for immersive experiences like
          virtual tours, product demonstrations, and event coverage. 360-degree
          videos can be shared on YouTube, Facebook, and other platforms that
          support this feature.
        </p>
        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
        <img
          src="https://img.freepik.com/free-psd/mobile-phone-with-selfie-stick-mock-up_1310-122.jpg?size=338&ext=jpg&ga=GA1.1.1594462479.1678118375&semt=ais"
          alt="360-degree video example"
        />
        </div>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>4. Short-Form Video</h2>
        <p className="my-4">
          Short-form video is becoming more popular due to the rise of platforms
          like TikTok and Instagram Reels. These platforms allow users to create
          short, engaging videos that are usually 60 seconds or less. Short-form
          video is a great way to grab the attention of your audience quickly
          and create shareable content. Many businesses are using short-form
          video to showcase their products, services, and company culture.
        </p>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>5. Animation and Motion Graphics</h2>
        <p className="my-4">
          Animation and motion graphics have become a popular way for businesses
          to create engaging and visually appealing videos. This trend allows
          businesses to showcase complex ideas or products in a way that is easy
          to understand and visually appealing. Animation and motion graphics
          are also a great way to add personality to your videos and make them
          stand out from the competition.
        </p>
        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
        <img
          src="https://img.freepik.com/free-photo/male-digital-creator-editing-video-montage-post-production-software-working-computer-creating-movie-content-with-color-grading-edit-creative-multimedia-film-footage-app_482257-49173.jpg?size=626&ext=jpg&ga=GA1.1.1594462479.1678118375&semt=ais"
          alt="Animation video example"
        />
        </div>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>Conclusion</h2>
        <p className="my-4">
          Video marketing is constantly evolving and adapting to new trends and
          technologies. As a business, it's important to stay up-to-date with
          the latest trends in videography and how they can benefit your
          marketing efforts. Whether it's using 360-degree videos to provide
          immersive experiences or incorporating live video to create real-time
          engagement with your audience, there are endless opportunities to
          create impactful video content that resonates with your audience.
        </p>
        <p className="my-4">
          By leveraging the latest trends in videography, you can differentiate
          your brand from the competition and attract new customers.
          Additionally, with the increasing availability of affordable video
          production tools and platforms, creating professional-quality videos
          has never been more accessible for businesses of all sizes.
        </p>
      </section>
    </div>
  );
}

export default TLTIV;

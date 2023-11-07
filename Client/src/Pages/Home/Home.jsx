import React, { useEffect } from "react";
import style from "./Home.module.css";
import HeroSection from "../../Sections/HomeSections/HeroSection/HeroSection";
import ToolsSection from "../../Sections/HomeSections/ToolsSection/ToolsSection";
import ExperienceSection from "../../Sections/HomeSections/ExperienceSection/ExperienceSection";
import Trustees from "../../Sections/HomeSections/Trustees/Trustees";
import Client from "../../Sections/HomeSections/Clients/Client";
import Awards from "../../Sections/HomeSections/Awards/Awards";
import MainJob from "../../Sections/HomeSections/MainJob/MainJob";
import Reviews from "../../Sections/HomeSections/Reviews/Reviews";
import Potential from "../../Sections/HomeSections/OurPotential/Potential";
import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel";

const images = [
  "https://img.freepik.com/premium-photo/businessman-team-analyzing-financial-statement-finance-task-with-smart-phone-laptop-tablet-wealth-management-concept_265022-8157.jpg?size=626&ext=jpg&ga=GA1.2.1594462479.1678118375&semt=ais",
  "https://img.freepik.com/free-photo/experienced-colleagues-standing-office-room-looking-each-other-professional-content-ceo-pretty-businesswomen-discussing-work-project-business-communication-corporation-concept_74855-11683.jpg?size=626&ext=jpg&ga=GA1.1.1594462479.1678118375&semt=ais",
  "https://media.istockphoto.com/id/1014086436/photo/3d-rendering-code-on-laptops-screen.jpg?b=1&s=170667a&w=0&k=20&c=zI9Ir1EG12jz3tddXDN4Liwl7AltOaoD_o6BxklSKmA=",
  "https://img.freepik.com/premium-photo/business-man-shake-hands-with-partnerships-introducing-themselves-first-time-meet_36317-1506.jpg?size=626&ext=jpg&ga=GA1.1.1594462479.1678118375&semt=ais",
]

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${style.container} container-fluid`}>
      <div className={style.background}>
  
        <HomeCarousel images={images}/>
      </div>
      <div className={style.blend}></div>
      <HeroSection />
      <ToolsSection />
      <ExperienceSection />
      <div className={style.whiteBg}>
        <Trustees />

        <Client
          content={
            "We worked with XTRAILS and helped them achieve significant growth by developing a custom software solution that was tailored to their specific needs."
          }
          sLogo={"sLogo"}
          logo={
            "https://live.staticflickr.com/65535/52835183542_0e9e139c48_c.jpg"
          }
          site={
            "https://live.staticflickr.com/65535/52874895882_54c0ca5b78_z.jpg"
          }
          Style={{ border: "1px solid #11096d" }}
        />

        <Client
          content={
            "we provided bookkeeping and budgeting services to SUKI, which streamline their financial operations."
          }
          logo={
            "https://live.staticflickr.com/65535/52836162690_d1da776a19_z.jpg"
          }
          site={
            "https://live.staticflickr.com/65535/52875639479_81ba556564.jpg"
          }
          Style={{ border: "1px solid #11096d" }}
        />

        <Awards />
        <MainJob />
        <Reviews />
        <Potential />
      </div>
    </div>
  );
}

export default Home;

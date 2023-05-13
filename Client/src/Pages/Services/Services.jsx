import React,{useEffect} from "react";
import style from "./Services.module.css";
import CapabilityCard from "../../Components/cababilityCard/CapabilityCard";
import BlackBanner from "../../Components/BlackBanner/BlackBanner";
import Carousel from "../../Components/Carousel/Carousel";
import { GiClapperboard, GiPencilBrush } from "react-icons/gi";
import { SiGooglemarketingplatform } from "react-icons/si";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoMdCodeWorking } from "react-icons/io";
import Minicarousel from "../../Components/Carousel/Minicarousel";

const Vid = [
  "Video Editing",
  "Illustration",
  "3D Animation",
  "Presentation Design",
  "Cartoons & Comics",
  "2D Animation",
  "Video Production",
];

const Dev = [
  "Full Stack Development",
  "Front-End Development",
  "Back-End Development",
  "Mobile App Development",
  "Web Design",
  "Ecommerce Development",
  "UX/UI Design",
  "shopify development",
  "CMS Development",
  "Manual Testing",
  "Scripting & Automation",
];

const Design = [
  "graphic design",
  "image editing",
  "Ai arts"
];

const Market = [
  "SEO",
  "Social Media Marketing",
  "Other Digital Marketing",
  "Lead Generation",
  "Sales & Business Development",
  "Telemarketing",
  "Search Engine Marketing",
  "Email Marketing",
  "Marketing Strategy",
  "Marketing Automation",
];

const Acc = [
  "Accounting",
  "Recruiting & Talent Sourcing",
  "Bookkeeping",
  "Financial Analysis & Modeling",
  "Management Consulting",
  "Instructional Design",
  "HR Administration",
  "Business Analysis & Strategy",
  "Tax Preparation",
  "Financial Management/CFO",
];

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <div className={`container-fluid ${style.burner}`}>
        <img
        src="https://img.freepik.com/premium-photo/online-crm-customer-support-service-telemarketing-agent-office-internet-help-call-happy-digital-call-center-consultant-tech-consulting-advice-conversation-contact-us-consultation_590464-82332.jpg?size=626&ext=jpg&ga=GA1.2.1594462479.1678118375&semt=sph"
          alt="banner"
        />
        <span className={style.blend}></span>
      </div>
      <BlackBanner title={"Let's Build Together"}/>
      <div className={style.main}>
        <div className={`row gx-5`}>
        <span className={`col-lg-6 col-md-6 col-12 ${style.dev}`}>
            <CapabilityCard
              icon={<IoMdCodeWorking className={style.icon} />}
              title={"development"}
              list={Dev}
              description={
                " Transform your business by creating mobile and web cutting-edge applications and systems that automate workflows, improve functionality, and boost performance, thereby enhancing your overall business operations, competitiveness, and profitability."
              }
            />
          </span>
          <span className={`col-lg-6 col-md-6 col-12 ${style.mar}`}>
          <hr  className={style.nhr}/>

            <CapabilityCard
              icon={<SiGooglemarketingplatform className={style.icon} />}
              title={"marketing solutions"}
              list={Market}
              description={
                "Amplify your online presence by utilizing a combination of proven digital strategies to increase brand visibility, drive traffic, and ultimately generate more leads and conversions for your business."
              }
            />
          </span>
          
          <span className={`col-lg-6 col-md-6 col-12 ${style.acc}`}>

            <CapabilityCard
              icon={<BiMoneyWithdraw className={style.icon} />}
              title={"Finance & Accounting"}
              list={Acc}
              description={
                "Streamline your financial processes, ensure compliance with regulations, and provide valuable insights to help you make informed business decisions, ultimately increasing profitability and financial stability."
              }
            />
          </span>
          <span className={`col-lg-6 col-md-6 col-12 ${style.vid}`}>
            <hr  className={style.nhr}/>
            <CapabilityCard
              icon={<GiClapperboard className={style.icon} />}
              title={"videography"}
              list={Vid}
              description={
                "create exceptional videos that convey your brand message, engage your audience, and help your business expand by increasing its visibility and attracting more potential customers."
              }
            />
          </span>

          <span className={`col-lg-6 col-md-6 col-12 ${style.des}`}>
            <CapabilityCard
              icon={<GiPencilBrush className={style.icon} />}
              title={"Human-centric design & art"}
              list={Design}
              description={
                "Elevate your brand by creating visually stunning graphics, illustrations, and designs that attract attention, establish credibility, and ultimately drive business growth by increasing customer engagement and loyalty."
              }
            />
          </span>
        </div>
        <div className={style.current}>
          <hr className={style.Hr} />'<h1>Recent Work</h1>
          <Carousel />
        </div>
      </div>
      <span className={style.sCa}>
      <h1>Recent Work</h1>
      <Minicarousel />
      </span>
    </div>
  );
}

export default Services;
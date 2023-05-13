import React ,{useEffect} from "react";
import style from "./About.module.css";
import GeneralSection from "../../Sections/GeneralSection/GeneralSection";
import { MdWorkspacesOutline, MdOutlineLensBlur } from "react-icons/md";
import { GiSquare } from "react-icons/gi";
import { SlScreenTablet } from "react-icons/sl";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { FaBattleNet } from "react-icons/fa";
import { GiCheckeredFlag } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import Card from "../../Components/Card/Card";
import ImageCard from "../../Components/ImageCard/ImageCard";
import ServiceList from "../../Components/ServiceList/ServiceList";
import Carousel from "../../Components/Carousel/Carousel";
import BlackBanner from "../../Components/BlackBanner/BlackBanner";
import Minicarousel from "../../Components/Carousel/Minicarousel";

const MissionIcon = <FaBattleNet className={`${style.icon} ${style.rotate}`} />;
const WhatCanDoIcon = (
  <MdWorkspacesOutline className={`${style.icon} ${style.size} `} />
);
const LeaderIcon = (
  <GiCheckeredFlag className={`${style.icon}  ${style.service}`} />
);
const ServiceIcon = (<GrServices className={`${style.icon}  ${style.lead}`} />);

const square1 = <GiSquare className={style.Fcone} />;
const square2 = <SlScreenTablet className={style.Fcone} />;
const square3 = <RiCheckboxBlankCircleLine className={style.Fcone} />;
const square4 = <MdOutlineLensBlur className={style.Fcone} />;

const content1 =
  "we wil uncover your goals,startegies and mission to develope a strategy for success";
const content2 =
  "our award-winning design team will build out your flow and design assets";
const content3 =
  "we work in one to two-week sprints so you're always up to your to speed with the status";

const list1 = [
  "Accounting, Marketing, Design and App Roadmaps Strategy Documentation ",
];
const list2 = [
  "We offer tailored, scalable solutions with agile development and user-centered design, coupled with ongoing support and maintenance for optimal performance and security.",
];
const list3 = [
  "Customized designs to meet your business goals",
  "Creative and functional design concepts",
  "Target audience research for effective design",
  "Collaborative approach for optimal results",
  "Comprehensive design packages for consistent branding",
];

const list4 = [
  'Comprehensive range of accounting services.',
  'Cutting-edge accounting software and technologies',
  'Personalized services to meet unique accounting needs.',
  'Customized financial solutions tailored to your specific needs',
  'Dedicated team of highly qualified and experienced accountants',
]
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className={`${style.container} container-fluid`}>
      <div className={`container-fluid ${style.burner}`}>
        <img
        src="https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346625.jpg?size=626&ext=jpg&ga=GA1.2.1594462479.1678118375&semt=ais"
          alt="banner"
        />
        <span className={style.blend}></span>
      </div>
      <BlackBanner  title={"we are LINXMARKETIX"}/>
      <div className={`container-fluid ${style.main}`}>
        <GeneralSection
          icon={MissionIcon}
          title={`Our Mission`}
          content={`our mission is to reimagine how people interact with brands. to disrupt
        the status quo and uncover values others can't find. To solve tommorow's
        business challenges in thoughtfull,elegant ways.we aim to be startegic
        leaders in emergent technologies, innovator's in user experiences. Our
        missin is to arm businesses for the digital revolution
`}
        />

        <GeneralSection
          title={"What Makes Us Special?"}
          content={
            "it's simple:Our remarkable team  and our success driven-process.Our process is designed for your success. It's designed for successful collaboration,transparency and efficiency  "
          }
          icon={WhatCanDoIcon}
        />

        <div className={`${style.SpecialCont} row g-5`}>
          <div className={`${style.column1} col-6`}>
            <Card
              number={1}
              square={square4}
              content={content1}
              list={list1}
              title={"Videography & marketing"}
            />
            <Card
              number={3}
              square={square1}
              title={"Design & Ai art"}
              content={content2}
              list={list3}
              Style={{marginTop:"100px"}}
            />
          </div>

          <div className={`${style.column2} col-6`}>
            <Card
              number={2}
              square={square2}
              title={"Finance & Accounting"}
              content={content3}
              list={list4}
            />
            <Card
              number={4}
              square={square3}
              title={"Development"}
              content={content3}
              list={list2}
              Style={{marginTop:"100px"}}
            />
          </div>


          {/* on mobile */}
          <div className={`col-12 ${style.mobile}`}>
            <Card
              number={1}
              square={square4}
              content={content1}
              list={list1}
              title={"Videography & marketing"}
            />
          </div>

          <div className={`col-12 ${style.mobile}`}>
          <Card
              number={2}
              square={square2}
              title={"Finance & Accounting"}
              content={content3}
              list={list4}
            />
          </div>

          <div className={`col-12 ${style.mobile}`}>
          <Card
              number={3}
              square={square1}
              title={"Design & Ai art"}
              content={content2}
              list={list3}
            />
          </div>

          <div className={`col-12 ${style.mobile}`}>
          <Card
              number={4}
              square={square3}
              title={"Development"}
              content={content3}
              list={list2}
            />
          </div>
        </div>

        <div className={style.leaderCont}>
          <GeneralSection
            title={"Our Leadership"}
            icon={LeaderIcon}
            content={
              "We believe the best lay at the intersection of intelligent marketing,,Accounting,design and strong engineering. Our leadership works continually to protect instill this vision in every process, project and team member "
            }
          />
          <div className={`${style.picturesCont} row g-lg-4 g-1`}>
            <span className={`col-lg-3 col-md-4 col-sm-6 col-6 ${style.card} `}>
              <ImageCard
                src={"https://live.staticflickr.com/65535/52835207222_0f344b0f18.jpg"}
                name={"Haunting Hattie"}
                title={"chief design officer & director of operations"}
              />
            </span>
            <span className={`col-lg-3 col-md-4 col-sm-6 col-6 ${style.card} `}>
              <ImageCard
                src={"https://live.staticflickr.com/65535/52835207247_0303ed57ce_w.jpg"}
                name={"Whispering Willow"}
                title={"Accounting manager"}
              />
            </span>
            <span className={`col-lg-3 col-md-4 col-sm-6 col-6 ${style.card} `}>
              <ImageCard
                src={"https://live.staticflickr.com/65535/52836185990_de685877e1.jpg"}
                name={"Moaning Marcus"}
                title={"Chief software Architect"}
              />
            </span>
            <span className={`col-lg-3 col-md-4 col-sm-6 col-6 ${style.card} `}>
              <ImageCard
                src={"https://live.staticflickr.com/65535/52836228033_3440a8d8c8_n.jpg"}
                name={"Evelyn Nyamekeh"}
                title={"vice President of Marketing"}
              />
            </span>
            <span className={`col-lg-3 col-md-4 col-sm-6 col-6 ${style.card} `}>
              <ImageCard
                src={"https://live.staticflickr.com/65535/52835207207_6b9e4ce1e3.jpg"}
                name={"Wraithlike Walter"}
                title={"EVP of sales & marketing"}
              />
            </span>
            <span className={`col-lg-3 col-md-4 col-sm-6 col-6 ${style.card} `}>
              <ImageCard
                src={"https://live.staticflickr.com/65535/52836227923_37152d50a0.jpg"}
                name={"Banshee Bridgette"}
                title={"Lead mobile architect"}
              />
            </span>

            <span className={`col-lg-3 col-md-4 col-sm-6 col-6 ${style.card} `}>
              <ImageCard
                src={"https://live.staticflickr.com/65535/52835964094_b3a5e8b5e4_z.jpg"}
                name={"Phantom Phillip"}
                title={"Financial analyst"}
              />
            </span>
           
          </div>
          <GeneralSection
            icon={ServiceIcon}
            title={"Our Services"}
            content={
              "A sorta, kinda, almost complete list of what we can help you with"
            }
          />
          <div className={`row gy-5 ${style.services}`}>
            <span className={`col-lg-4 col-md-4 `}>
              <ServiceList
                services={ [
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
                ]
                }
                category={"Marketing"}
              />
            </span>
            <span className={`col-lg-4 col-md-4 `}>
              <ServiceList
                services={[
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
                ]
                }
                category={"Accountancy"}
              />
            </span>            
            <span className={`col-lg-4 col-md-4 `}>
              <ServiceList
                services={ [
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
                ]
                }
                category={"Development"}
              />
            </span>            
            <span className={`col-lg-4 col-md-4 `}>
              <ServiceList
                services={[
                  "Video Editing",
                  "Illustration",
                  "3D Animation",
                  "Presentation Design",
                  "Cartoons & Comics",
                  "2D Animation",
                  "Video Production",
                ]}
                category={"Videography"}
              />
            </span>
            <span className={`col-lg-4 col-md-4 `}>
              <ServiceList
                services={[
                  "graphic design",
                  "image editing",
                  "Ai arts"
                ]
                }
                category={"Design & creative skills"}
              />
            </span>           
          </div>
          <div className={style.current}>
            <hr className={style.Hr} />'<h1>Recent Work</h1>
            <span className={style.lCa}><Carousel /></span>
          </div>
        </div>
      </div>
      <span className={style.sCa}>
      <h1>Recent Work</h1>
      <Minicarousel />
      </span>
      
      
    </div>
  );
}

export default About;

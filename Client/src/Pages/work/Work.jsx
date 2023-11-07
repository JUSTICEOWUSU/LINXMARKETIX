import React, { useEffect } from "react";
import style from "./Work.module.css";
import MegaCard from "../../Components/MegaCard/MegaCard";
import { BsArrowUpRight } from "react-icons/bs";
import { ProjectHero } from "../../Components/HeroContent/Hero";
import { useNavigate } from "react-router-dom";

function Work() {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className={style.background}>
      <img
                src="https://img.freepik.com/free-photo/still-life-business-roles-with-various-mechanism-pieces_23-2149352652.jpg?size=626&ext=jpg&ga=GA1.1.1594462479.1678118375&semt=sph"
                className="d-block w-100 h-100"
                alt="..."
              />

        <div className={style.blend}></div>
      </div>
      <div className={style.content}>
        <ProjectHero />
        <div style={{ marginTop: "60px", padding: "0", marginBottom: "60px" }}>
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52881386320_fea9937259_z.jpg"
            }
            name={"# classified"}
            field={"SOFTWARE DEVELOPMENT"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52881455683_0f8dddb79c_z.jpg"
            }
            name={"vornyx"}
            field={"SOFTWARE DEVELOPMENT"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52881169404_3792a1f801_z.jpg"
            }
            name={"# classified"}
            field={"SOFTWARE DEVELOPMENT"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52881008551_c3dd7e9340_z.jpg"
            }
            name={"Zazzee"}
            field={"SOFTWARE DEVELOPMENT"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52881455753_27d9bbe336.jpg"
            }
            name={"# classified"}
            field={"SOFTWARE DEVELOPMENT"}
          />

          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52881169394_2159ce1d1a_z.jpg"
            }
            name={"# classified"}
            field={"SOFTWARE DEVELOPMENT"}
          />

          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52881455663_b7dda624c6_z.jpg"
            }
            name={"# classified"}
            field={"SOFTWARE AUTOMATION"}
          />

          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52881386305_cfd61c260a_z.jpg"
            }
            name={"# classified"}
            field={"SOFTWARE DEVELOPMENT"}
          />

          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52881008431_50ef28829b_z.jpg"
            }
            name={"# classified"}
            field={"SOFTWARE DEVELOPMENT"}
          />

          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52846224030_48c8ba8cd7_c.jpg"
            }
            name={"siata jeans"}
            field={"Web development"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52836204308_62041eb023_z.jpg"
            }
            name={"TRIDEVI"}
            field={"Web development"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52846020949_7dc232aeff.jpg"
            }
            name={"# classified"}
            field={"SOFTWARE AUTOMATION"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52846281693_281c36a2f0_z.jpg"
            }
            name={"# classified"}
            field={"LOGO DESIGN"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52846022029_719c900186.jpg"
            }
            name={"# classified"}
            field={"SOFTWARE AUTOMATION"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52845250942_912c37c689_w.jpg"
            }
            name={"t viewer"}
            field={"software automation"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52845828436_75080d686d_z.jpg"
            }
            name={"voluntech"}
            field={"logo design"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52846020939_757e0a162b_z.jpg"
            }
            name={"# classified"}
            field={"logo design"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52846023299_ef42b95679_w.jpg"
            }
            name={"# classified"}
            field={"software automation"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52845828106_15faccb060_w.jpg"
            }
            name={"# classified"}
            field={"marketing"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52845828341_4803502380_z.jpg"
            }
            name={"# classified"}
            field={"marketing"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52836162810_120f799215_z.jpg"
            }
            name={"FX MEDLY"}
            field={"software development"}
          />
          <MegaCard
            src={
              "https://live.staticflickr.com/65535/52835183397_5efb5724f7.jpg"
            }
            name={"ERShares"}
            field={"youtube promotion"}
          />
        </div>

        <button className={style.pbtn} onClick={()=>navigate("/contact")}>
          ... more <BsArrowUpRight />
        </button>
      </div>
    </div>
  );
}

export default Work;

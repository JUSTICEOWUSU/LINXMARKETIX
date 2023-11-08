import React, { useState,useRef, useEffect } from "react";
import style from "./GetInTouch.module.css";
import CustomInput from "../../Components/CustomInput/CustomInput";
import DropInput from "../../Components/DropInput/DropInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import axios from "axios";

const allServices = [
  "Video Editing",
  "Illustration",
  "3D Animation",
  "Presentation Design",
  "Cartoons & Comics",
  "2D Animation",
  "Video Production",
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
  "graphic design",
  "image editing",
  "Ai arts",
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

const sortedList = allServices.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

function GetInTouch() {
  const [budget, setBudget] = useState("");
  const [service, setService] = useState("");
  const [textArea, setTextArea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const timersRef = useRef([]);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
    organization: "",
    website: "",
  });

  const clearData = ()=>{
    setInputs({
      name: "",
      email: "",
      number: "",
      location: "",
      organization: "",
      website: "",
    })
    setBudget("")
    setService("")
    setTextArea("")
    return;
  }

  const handleTextArea = (e) => {
    setTextArea(e.target.value);
  };

  const handleAllInputs = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleBudgetChange = (value) => {
    setBudget(value);
  };

  const handleServiceChange = (value) => {
    setService(value);
  };

  function checkForBlankValues(obj) {
    for (let key in obj) {
      if (obj[key] === "") {
        return key;
      }
    }
    return null; // return null if there are no blank values
  }

  const handleSubmit = async () => {
    const finalData = {
      name:inputs.name,
      email:inputs.email,
      contact:inputs.contact,
      approximate_budget:budget,
      service:service,
      organization_Name:inputs.organization,
      summary:textArea
    }

    const blankKey = checkForBlankValues(finalData);
    if(blankKey){
      setError(`PLEASE ${blankKey.toUpperCase()}* FILLED SHOULD NOT BE BLANK`)
      const errorTimerId = setTimeout(() => {
        setError(null);
      }, 5000);
      timersRef.current.push(errorTimerId);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    // send form data to the server using axios
    axios
      .post("https://linxmarketix-server.vercel.app/contact", {
        ...inputs,
        service,
        budget,
        summary: textArea,
      })
      .then((response) => {
        setLoading(false);
        setSuccess("Sent successfully!");
        const successTimerId = setTimeout(() => {
          setSuccess(null);
        }, 5000);
        timersRef.current.push(successTimerId);
        clearData();
      })
      .catch((error) => {
        setLoading(false);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong please try again later.");
        }
        const errorTimerId = setTimeout(() => {
          setError(null);
        }, 5000);
        timersRef.current.push(errorTimerId);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      timersRef.current.forEach(timerId => clearTimeout(timerId));
    };
  }, []);



  return (
    <div className={style.container}>
      <div className={style.hero}>
        <span>
          <h1 className={style.title}> Ready to create progress together?</h1>
          <p className={style.p}>
            Tell us a little about your project and we’ll connect with you
            within 24 hours.
          </p>
        </span>
      </div>
      <p className={style.required}>* indicates REQUIRED</p>

      <div className={`row gy-5 ${style.form}`}>
        <span className="col-lg-6 col-12">
          <CustomInput
            onchange={handleAllInputs}
            type={"text"}
            label={"name *"}
            value={inputs.name}
            name={"name"}
          />
        </span>
        <span className="col-lg-6 col-12">
          <CustomInput
            onchange={handleAllInputs}
            type={"text"}
            label={"email address *"}
            value={inputs.email}
            name={"email"}
          />
        </span>
        <span className="col-lg-6 col-12">
          <CustomInput
            onchange={handleAllInputs}
            type={"tel"}
            label={"contact number *"}
            value={inputs.number}
            name={"number"}
          />
        </span>
        <span className="col-lg-6 col-12">
          <CustomInput
            onchange={handleAllInputs}
            type={"text"}
            label={"location"}
            value={inputs.location}
            name={"location"}
          />
        </span>

        <span className="col-lg-6 col-12">
          <DropInput
            onInputChange={handleBudgetChange}
            list={[
              "$25 - $30k",
              "$30k - $100k",
              "$100k - $200k",
              "above $200k",
            ]}
            label={"approximate budget *"}
          />
        </span>

        <span className="col-lg-6 col-12">
          <DropInput
            onInputChange={handleServiceChange}
            list={sortedList}
            label={"select services *"}
          />
        </span>

        <span className="col-lg-6 col-12">
          <CustomInput
            onchange={handleAllInputs}
            type={"text"}
            label={"name of your organization *"}
            value={inputs.organization}
            name={"organization"}
          />
        </span>
        <span className="col-lg-6 col-12">
          <CustomInput
            onchange={handleAllInputs}
            type={"text"}
            label={"website"}
            value={inputs.website}
            name={"website"}
          />
        </span>

        <span className="col-12">
          <label htmlFor="projectSummary" className={style.textLabel}>
            project summary *
          </label>
          <textarea
            className={style.custom}
            id="projectSummary"
            cols="30"
            rows="10"
            value={textArea}
            onChange={handleTextArea}
          ></textarea>
        </span>
      </div>
      <span className={style.submit}>
      {loading && <p style={{ color: "blue" }} className={style.requestOutcome}>Sending ...</p>}
      {error && <p style={{ color: "red" }} className={style.requestOutcome}>{error}</p>}
      {success && <p style={{ color: "green" }} className={style.requestOutcome}>{success}</p>}
        <CustomButton
          content={"SUBMIT"}
          onclick={handleSubmit}
          Style={{ width: "150px" }}
        />
      </span>
    </div>
  );
}

export default GetInTouch;

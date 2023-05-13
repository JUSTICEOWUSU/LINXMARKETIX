import style from "./DropInput.module.css";
import React, { useState } from "react";
import {BsArrowDown} from "react-icons/bs";

function DropInput({onInputChange,list,label}) {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (onInputChange) {
      onInputChange(event.target.value);
    }
  };

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setInputValue(option);
    if (onInputChange) {
      onInputChange(option);
    }
    setShowDropdown(false);
  };

  return (
    <div className={style.container}>
      <label className={style.label}>{label}</label>
      <span className="row">
      <input
      className="col-lg-11 col-10"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <BsArrowDown onClick={handleButtonClick} className={`col-lg-1 col-2 ${style.arrow}`}/>
      </span>
      
      {showDropdown && (
        <div style={{position:"absolute", background:"white", color:"black", fontWeight:"500", width:"100%"}} className={style.listCont}>
          {list.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option)} className={style.options}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropInput;

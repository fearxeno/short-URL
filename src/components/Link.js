import React, { useState } from "react";
import validator from "validator";
import "./Link.css";

const Link = ({ setInputValue, inputValue }) => {
  const [term, setTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    if (validator.isURL(term)) {
      setInputValue(term);
      setTerm("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please add a valid URL");
    }
  };

  console.log(errorMessage);

  return (
    <div className="link container">
      <div className="col">
        <input
          className={!errorMessage.length ? "" : "block"}
          placeholder="Shorten a link here.."
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <span>{errorMessage}</span>
      </div>
      <button className="button" onClick={handleClick}>
        Shorten It!
      </button>
    </div>
  );
};

export default Link;

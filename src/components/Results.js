import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Results.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Results = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);

  const search = async () => {
    const response = await axios(
      `https://api.shrtco.de/v2/shorten?url=${inputValue}`
    );
    setShortenLink(response.data.result.full_short_link);
  };

  useEffect(() => {
    if (inputValue.length) {
      search();
    }
  }, [inputValue]);
  return (
    <div
      className={
        inputValue.length ? "results container active" : "results container"
      }
    >
      <p>{inputValue}</p>
      <a
        className="link"
        target="_blank"
        rel="noopener noreferrer"
        href={shortenLink}
      >
        {shortenLink}
      </a>
      <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
        <button className={copied ? "button copy" : "button"}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default Results;

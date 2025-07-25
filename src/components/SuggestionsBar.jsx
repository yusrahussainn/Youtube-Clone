import React from "react";
import "../style.css";
import { SUGGESTIONS } from "../constants";

const SuggestionsBar = () => {
  return (
    <div className="suggestions-container">
      {SUGGESTIONS.map((item, index) => (
        <div key={index} className="suggestion-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default SuggestionsBar;

import React from "react";
import "../Style.css";
import { SUGGESTIONS } from "../Constants";

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

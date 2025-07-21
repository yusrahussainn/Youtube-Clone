import React from "react";
import img from "../assets/search.png";
import mic from "../assets/mic.png";
import "../style.css";

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar-box">
        <input type="text" placeholder="Search" className="search-input" />
        <div className="search-icon-container">
          <div className="divider" />
          <button type="submit" className="search-button">
            <img src={img} alt="search" className="search-img" />
          </button>
        </div>
      </div>
      <button className="mic-button">
        <img src={mic} alt="mic" className="mic-img" />
      </button>
    </div>
  );
}

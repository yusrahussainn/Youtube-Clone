import React, { useState } from "react";
import img from "../assets/Search.png";
import mic from "../assets/Mic.png";
import "../Style.css";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSearch = () => {
    if (term.trim()) {
      onSearch(term);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-box">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="search-icon-container">
          <div className="divider" />
          <button type="button" className="search-button" onClick={handleSearch}>
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

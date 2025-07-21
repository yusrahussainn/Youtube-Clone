import React from "react";
import "../style.css";

const suggestions = [
  "All",
  "React",
  "JavaScript",
  "News",
  "Movies",
  "Trending",
  "Music",
  "Live",
  "Gaming",
  "Podcasts",
  "Books",
  "Education",
  "Comedy",
  "Taylor Swift",
  "Cooking",
  "Travel",
  "Fitness",
  "Technology",     
    "Science",  
    "Art",      
    "DIY",
    "Fashion",  
    "Sports",
    "Health",
    "Animals",
    "Nature",
    "Photography",
    "History",
];

const SuggestionsBar = () => {
  return (
    <div className="suggestions-container">
      {suggestions.map((item, index) => (
        <div key={index} className="suggestion-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default SuggestionsBar;

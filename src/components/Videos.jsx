import React from "react";
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import video5 from '../assets/video5.mp4';
import video6 from '../assets/video6.mp4';
import video7 from '../assets/video7.mp4';
import video8 from '../assets/video8.mp4';
import video9 from '../assets/video9.mp4';
import '../style.css';

const videoSources = [video1, video2, video3, video4, video5, video6, video7, video8, video9];

const videoTitles = [
  "A Day in New York",
  "Serendipity",
  "Countryside Adventures",
  "Literally in the Air",
  "Light at the End of the Tunnel",
  "Cute Puppy",
  "Village Life",
  "Trip to Miami",
  "Matrix"
];

const videoViews = [
  "1.2M views · 2 days ago",
  "845K views · 5 days ago",
  "4.5M views · 1 week ago",
  "300K views · 3 days ago",
  "2M views · 6 days ago",
  "1.9M views · 2 weeks ago",
  "500K views · 4 days ago",
  "1.1M views · 1 day ago",
  "900K views · 8 hours ago"
];

const videoRelated = [
  "#citylife #vlog",
  "#nature #travel",
  "#cows #moo",
  "#tickets #travel",
  "#poems #philosophy",
  "#cuties #animals",
   "#travel #france",
  "#ocean #animals",
  "#programming #react"
];

const Videos = () => {
  return (
    <div className="video-container">
  {videoSources.map((src, index) => (
    <div key={index} className="video-card">
      <video controls className="video-element" src={src} />
      <div className="video-meta">
        <p className="video-title">{videoTitles[index]}</p>
        <p className="video-info">{videoViews[index]}</p>
        <p className="video-related">{videoRelated[index]}</p>
      </div>
    </div>
  ))}
</div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    width: "1500px",
    padding: "30px",
    marginLeft: "5px",
    boxSizing: "border-box",
  },
  videoCard: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "500px",  // Enforce max width per card
  },
  video: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },
  meta: {
    padding: "8px 0",
  },
  title: {
    fontWeight: "bold",
    fontSize: "16px",
    margin: "4px 0",
  },
  info: {
    color: "#555",
    fontSize: "14px",
    margin: "2px 0",
  },
  related: {
    color: "#888",
    fontSize: "13px",
    margin: "2px 0",
  }
};

export default Videos;

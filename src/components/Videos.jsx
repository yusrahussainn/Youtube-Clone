import React, { useEffect, useState } from 'react';
import '../style.css';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const Videos = ({ searchQuery }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchVideos = async () => {
      try {
        const searchRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&maxResults=9&type=video&key=${API_KEY}`
        );
        const searchData = await searchRes.json();
        const videoItems = searchData.items || [];

        const videoIds = videoItems.map(item => item.id.videoId).join(',');

        const detailsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${API_KEY}`
        );
        const detailsData = await detailsRes.json();

        setVideos(detailsData.items || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [searchQuery]);

  const formatViews = (num) => {
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M views';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K views';
    return num + ' views';
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    if (diffDays < 1) return 'Today';
    if (diffDays < 7) return `${Math.floor(diffDays)} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  return (
    <div className="video-container">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <iframe
            className="video-element"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.snippet.title}
          ></iframe>
          <div className="video-meta">
            <p className="video-title">{video.snippet.title}</p>
            <p className="video-info">
              {video.snippet.channelTitle} • {formatViews(video.statistics.viewCount)} • {formatDate(video.snippet.publishedAt)}
            </p>
            {video.snippet.liveBroadcastContent !== 'none' && (
  <p className="video-related">#{video.snippet.liveBroadcastContent}</p>
)}

          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;

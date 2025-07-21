import React from 'react';
import sideBar from '../assets/sideBar.jpg';
import youtube from '../assets/youtube.png';
import SigninButton from './SigninButton';

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="sidebar-icon-btn">
          <img src={sideBar} alt="Menu" className="sidebar-icon" />
        </button>
        <img src={youtube} alt="YouTube" className="youtube-logo" />
      </div>
      <ul className="sidebar-menu">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <hr />
        <li>You</li>
        <li>History</li>
        <hr />
        <li className="signin">Sign in to like videos, comment, and subscribe. <SigninButton/></li>
        <hr />
        <li className="bold">Explore</li>
        <li>Trending</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>News</li>         
        <li>Sports</li>
        <hr />
        <li className="bold">More from YouTube</li>
        <li>YouTube Premium</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
        <hr />
        <li>Settings</li>
        <li>Report history</li>
        <li>Help</li>
        <li>Send feedback</li>
        <hr />
        <li className="about">
          About Press Copyright Contact us Creators Advertise Developers
        </li>
        <li className="terms">
          Terms Privacy Policy & Safety How YouTube works Test new features
        </li>
        <li className="copyright">
          © 2025 Google LLC
        </li>
      </ul>
    </div>
  );
}

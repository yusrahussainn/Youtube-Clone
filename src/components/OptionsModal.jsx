import React from "react";
import "../style.css";

export default function OptionsModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="options-box" onClick={(e) => e.stopPropagation()}>
        <ul className="options-list">
          <li className="options-item">Your data in YouTube</li>
          <li className="options-item">Appearance: Device theme</li>
          <li className="options-item">Language: English</li>
          <li className="options-item">Restricted Mode: Off</li>
          <li className="options-item">Location: Pakistan</li>
          <li className="options-item">Keyboard shortcuts</li>
          <li className="options-item">Settings</li>
          <li className="options-item">Help</li>
          <li className="options-item">Send feedback</li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import "../style.css";
import { OPTIONS } from "../constants";

export default function OptionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="options-box" onClick={(e) => e.stopPropagation()}>
        <ul className="options-list">
          {OPTIONS.map((item, index) => (
            <li key={index} className="options-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

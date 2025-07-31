import React from "react";
import "../Style.css";
import { OPTIONS } from "../Constants";

const OptionsModal = React.memo(function OptionsModal({ isOpen, onClose }) {
  return (
    <div
      className={`modal-overlay ${isOpen ? "visible" : "hidden"}`}
      onClick={onClose}
    >
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
});

export default OptionsModal;

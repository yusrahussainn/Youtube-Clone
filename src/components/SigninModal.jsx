import React from "react";
import "../style.css"; // Make sure the path is correct

export default function SigninModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button onClick={onClose} className="modal-close">×</button>
        <h2 className="modal-title">Sign In</h2>
        <form className="modal-form">
          <input type="email" placeholder="Email" className="modal-input" />
          <input type="password" placeholder="Password" className="modal-input" />
          <button type="submit" className="modal-submit">Login</button>
        </form>
      </div>
    </div>
  );
}

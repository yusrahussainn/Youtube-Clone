import React, { useState } from "react";
import SigninModal from "../components/SigninModal";
import "../Style.css";

export default function SigninButton() {
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);

  const handleOpenModal = () => setIsSigninModalOpen(true);
  const handleCloseModal = () => setIsSigninModalOpen(false);

  return (
    <div>
      <button className="signin-button" onClick={handleOpenModal}>
        Sign in
      </button>
      <SigninModal isOpen={isSigninModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

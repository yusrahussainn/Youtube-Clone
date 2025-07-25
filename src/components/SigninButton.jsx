import React, { useState } from "react";
import SigninModal from "../components/SigninModal";

export default function SigninButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="signin-button" onClick={handleOpenModal}>
        Sign in
      </button>
      {isModalOpen && <SigninModal onClose={handleCloseModal} />}
    </div>
  );
}

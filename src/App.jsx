import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import SigninButton from "./components/SigninButton";
import optionsIcon from "./assets/Options.svg";
import Videos from "./components/Videos";
import SuggestionsBar from "./components/SuggestionsBar";
import OptionsModal from "./components/OptionsModal";
import "./Style.css";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("travel vlog");

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <SideBar />

      <div className="signin-button-container">
        <SigninButton isOpen={isSigninModalOpen} onClose={() => setIsSigninModalOpen(false)} />  
      </div>

      <button onClick={() => setIsModalOpen(true)} className="optionss-button">
        <img src={optionsIcon} alt="Options" className="options-icon" />
      </button>

      <OptionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <SuggestionsBar />
      <Videos searchQuery={searchQuery} />
    </div>
  );
}

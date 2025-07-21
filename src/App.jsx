import React from "react";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import SigninButton from "./components/SigninButton";
import optionsIcon from "./assets/options.svg"
import Videos from "./components/Videos";
import SuggestionsBar from "./components/SuggestionsBar";
import OptionsModal from "./components/OptionsModal";
import { useState } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <SearchBar/>
      <SideBar/>
      <div style={{ position: "absolute", top: "1px", right: "10px" }}>
        <SigninButton />
      </div>
      <button onClick={() => setIsModalOpen(true)} className="optionss-button">
        <img src={optionsIcon} alt="Options" className="options-icon"style={{ position: "absolute", top: "25px", right: "100px", width: "24px", height: "24px", cursor: "pointer" }} />
      </button>
      {isModalOpen && <OptionsModal onClose={() => setIsModalOpen(false)} />}
      <SuggestionsBar/>
      <Videos/>
    </div>
  );
}
import React from "react";
import "./MainPage.css";
import Navbar from "../../components/navbar/Navbar";
import MenuBar from "../../components/menubar/MenuBar";

const MainPage = () => {
  return (
    <div class="main-page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <Navbar></Navbar>
      <div className="alignment">
        <div className="inline">
          <div className="input-icons">
            <span class="material-symbols-outlined">search</span>
            <input
              className="input-style"
              placeholder="Search your favorite restaurant..."
            ></input>
          </div>
        </div>
      </div>
      <MenuBar></MenuBar>
    </div>
  );
};

export default MainPage;

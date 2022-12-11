import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className="container2">
        <div className="wrapper2">
          <div className="left">
            <span className="material-symbols-outlined">event</span>
          </div>
          <div className="center">
            <Link to="/account">
              <span className="material-symbols-outlined">account_circle</span>
            </Link>
          </div>
          <div className="right">
            <span className="material-symbols-outlined">star</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;

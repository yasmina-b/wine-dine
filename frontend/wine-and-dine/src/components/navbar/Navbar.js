import React from "react";
import "./navbar.css";
import Logo from "../../photos/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="center">
            <img className="image-logo" src={Logo} alt="image loading..."></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

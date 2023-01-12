import React from "react";
import "./navbar.css";
import Logo from "../../photos/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="center">
            <Link to="/restaurants">
              <img
                className="image-logo"
                src={Logo}
                alt="image loading..."
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

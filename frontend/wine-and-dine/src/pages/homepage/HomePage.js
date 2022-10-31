import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Logo from "../../photos/logo.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="wraper">
        <div className="up">
          <h1 className="companyname"></h1>
          <img className="companyphoto" src={Logo} alt="image loading..."></img>
        </div>

        <div className="down">
          <Link to="/login">
            <button className="loginbutton">Login</button>
          </Link>
          <h1 className="descriptionhomepage">Don't have an account yet?</h1>
          <Link to="/register">
            <button className="registerbutton">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

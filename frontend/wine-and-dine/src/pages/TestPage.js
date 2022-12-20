import React from "react";

const TestPage = () => {
    return (
      <div className="testpage">
        <div className="wraper">
          <div className="up">
            <h1 className="companyname"></h1>
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
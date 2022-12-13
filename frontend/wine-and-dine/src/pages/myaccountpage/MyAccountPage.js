import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./MyAccountPage.css";

const MyAccountPage = () => {
  return (
    <div className="account-page">
      <Navbar></Navbar>
      <div className="account-title">MY ACCOUNT</div>
      <div className="input-alignment">
        
        <label>First Name</label>
        <div className="input-box">
        <input className="input-design"></input>
        </div>
        <label>Last Name</label>
        <div className="input-box">
        <input className="input-design"></input>
        </div>
        <label>Phone Number</label>
        <div className="input-box">
        <input className="input-design"></input>
        </div>
        <div className="updateButton">
        <button className="update-button">UPDATE</button>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;

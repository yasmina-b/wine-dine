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
        <input className="input-design"></input>
        <label>Last Name</label>
        <input className="input-design"></input>
        <label>Phone Number</label>
        <input className="input-design"></input>
        <button className="update-button">UPDATE</button>
      </div>
    </div>
  );
};

export default MyAccountPage;

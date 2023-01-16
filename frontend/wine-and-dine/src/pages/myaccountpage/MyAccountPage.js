import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./MyAccountPage.css";
import MenuBar from "../../components/menubar/MenuBar";
import Back from "../../photos/back-arrow.png";
import { Link, useNavigate, useParams } from "react-router-dom";

const MyAccountPage = () => {
  const [users, setUsers] = useState([]);

  const updateAccountInfo = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/api/users/${users._id}`, users);
      setUsers(users);
      localStorage.setItem("user",JSON.stringify(users));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("user"));
    if (users) {
      setUsers(users);
    }
  }, []);

  return (
    <div className="account-page">
      <Navbar></Navbar>
      <h2 className="account-title">MY ACCOUNT INFO</h2>
      <div>
          <button type="button" className="backButtonMyAccount"></button>
          <Link to="/restaurants">
            <img className="backArrowMyAccount" src={Back} alt=""></img>
          </Link>
        </div>

      <div className="input-alignment">
        <label>First Name</label>
        <div className="input-box">
          <input
            className="input-design"
            onChange={(e) => setUsers({ ...users, firstName: e.target.value })}
            value={users.firstName || ""}
            placeholder={users.firstName}
          ></input>
        </div>
        <label>Last Name</label>
        <div className="input-box">
          <input
            className="input-design"
            onChange={(e) => setUsers({ ...users, lastName: e.target.value })}
            value={users.lastName || ""}
            placeholder={users.lastName}
          ></input>
        </div>
        <label>Phone Number</label>
        <div className="input-box">
          <input
            className="input-design"
            onChange={(e) => setUsers({ ...users, phoneNumber: e.target.value })}
            value={users.phoneNumber || ""}
            placeholder={users.phoneNumber}
          ></input>
        </div>
        <div className="updateButton">
          <button
            className="update-button"
            onClick={(e) => {
              updateAccountInfo(e);
            }}
          >
            UPDATE
          </button>
        </div>
      </div>
      <MenuBar></MenuBar>
    </div>
  );
};

export default MyAccountPage;

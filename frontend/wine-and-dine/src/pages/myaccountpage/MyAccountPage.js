import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuBar from "../../components/menubar/MenuBar";
import Navbar from "../../components/navbar/Navbar";
import "./MyAccountPage.css";


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
      <div className="account-title">MY ACCOUNT</div>
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
      {/* <MenuBar></MenuBar> */}
    </div>
  );
};

export default MyAccountPage;

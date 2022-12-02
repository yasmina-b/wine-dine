import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./RegisterPage.css";
import Navbar from "../../components/navbar/Navbar";

function RegisterPage() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8800/api/register", {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    });
    if (res.status === 201) {
      console.log("register successful");
      navigate('/login');

    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="title">SIGN UP</div>
      <form>
        <div className="label-wrapper">
        <label className="labels">First Name</label>
        </div>
        <div className="input-wrapper">
        <input
          className="input-style-register"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        </div>
        <div className="label-wrapper">
        <label className="labels">Last Name</label>
        </div>
        <div className="input-wrapper">
        <input
          className="input-style-register"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        </div>
        <div className="label-wrapper">
        <label className="labels">Email</label>
        </div>
        <div className="input-wrapper">
        <input
          className="input-style-register"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="label-wrapper">
        <label className="labels">Phone Number</label>
        </div>
        <div className="input-wrapper">
        <input
          className="input-style-register"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        </div>
        <div className="label-wrapper">
        <label className="labels">Password</label>
        </div>
        <div className="input-wrapper">
        <input
          className="input-style-register"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className="button-wrapper">
        <button className="button" onClick={(e) => handleRegister(e)}>Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;

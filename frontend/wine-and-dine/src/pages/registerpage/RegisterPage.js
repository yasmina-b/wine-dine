import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./RegisterPage.css";

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
      <div className="title">SIGN UP</div>
      <form>
        <label className="labels">First Name</label>
        <div className="input-wrapper">
        <input
          className="input-style"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        </div>
        
        <label className="labels">Last Name</label>
        <div className="input-wrapper">
        <input
          className="input-style"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        </div>
        <label className="labels">Email</label>
        <div className="input-wrapper">
        <input
          className="input-style"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <label className="labels">Phone Number</label>
        <div className="input-wrapper">
        <input
          className="input-style"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        </div>
        <label className="labels">Password</label>
        <div className="input-wrapper">
        <input
          className="input-style"
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

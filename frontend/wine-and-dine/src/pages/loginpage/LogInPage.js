import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"

function LogInPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8800/api/login", {
      email,
      password,
    });

    localStorage.setItem("user", JSON.stringify(res.data));

    if (res.status === 200) {
      console.log("login successful");
      navigate('/');

    }
  };
  return (
    <div>
      <div className="title">LOGIN</div>
      <label className="labels">Email</label>
      <input
        className="input-style"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="labels">Password</label>
      <input
        className="input-style"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" onClick={(e) => handleLogin(e)}>LOGIN</button>
    </div>
  );
}

export default LogInPage;

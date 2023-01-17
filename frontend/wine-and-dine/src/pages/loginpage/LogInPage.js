import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import AuthContext from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";
import Alert from "@mui/material/Alert";

function LogInPage() {
  const navigate = useNavigate();
  const { setUser } = React.useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8800/api/login", {
        email,
        password,
      });

      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));

      if (res.status === 200) {
        setMessage("Successfully logged in!");
        console.log("login successful");
        navigate("/restaurants");
      }
    } catch (error) {
      setMessage("Error: Login failed");
    }
  };
  return (
    <body>
      <Navbar></Navbar>
      <div className="title">LOGIN</div>
      <div className="label-wrapper">
        <label className="labels">Email</label>
      </div>
      <div className="input-wrapper">
        <input
          className="input-style-login"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="label-wrapper">
        <label className="labels">Password</label>
      </div>
      <div className="input-wrapper">
        <input
          className="input-style-login"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-wrapper">
        <button className="button-login" onClick={(e) => handleLogin(e)}>
          LOGIN
        </button>
      </div>
      <div className="messageWrapper">
        {message ? (
          <Alert
            sx={{
              bottom:"200px",
              width: "550px",
              fontSize: "60px",
              display: "flex",
              alignItems: "center",
            }}
            severity="error">
            {message}
          </Alert>
        ) : null}
      </div>
    </body>
  );
}

export default LogInPage;

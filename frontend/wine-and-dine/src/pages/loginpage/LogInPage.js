import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import AuthContext from "../../context/AuthContext";
import Logo from "../../photos/logo.png";

function LogInPage() {
  const navigate = useNavigate();

  const {setUser} = React.useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8800/api/login", {
      email,
      password,
    });

    setUser(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));

    if (res.status === 200) {
      console.log("login successful");
      navigate("/");
    }
  };
  return (
    <div>
      <div className="title">LOGIN</div>
      <div className="label-wrapper">
      <label className="labels">Email</label>
      </div>
      <div className="input-wrapper">
      <input
        className="input-style"
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
        className="input-style"
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
    <img className="companyphoto-loginpage" src={Logo} alt="image loading..."></img>
    </div>
  );
}

export default LogInPage;

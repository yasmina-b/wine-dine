import React from "react";
import HomePage from "./pages/homepage/HomePage";
import LogInPage from "./pages/loginpage/LogInPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import MainPage from "./pages/mainpage/MainPage";


import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/restaurants" element={<MainPage/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

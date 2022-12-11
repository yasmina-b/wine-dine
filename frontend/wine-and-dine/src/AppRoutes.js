import React from "react";
import HomePage from "./pages/homepage/HomePage";
import LogInPage from "./pages/loginpage/LogInPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import MainPage from "./pages/mainpage/MainPage";
import ConfirmationPage from "./pages/confirmationpage/ConfirmationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAccountPage from "./pages/myaccountpage/MyAccountPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/restaurants" element={<MainPage/>}></Route>
        <Route path="/confirmation" element={<ConfirmationPage/>}></Route>
        <Route path="/account" element={<MyAccountPage/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

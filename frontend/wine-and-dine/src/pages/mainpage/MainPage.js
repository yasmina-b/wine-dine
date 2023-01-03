import React from "react";
import "./MainPage.css";
import Navbar from "../../components/navbar/Navbar";
import MenuBar from "../../components/menubar/MenuBar";
import RestaurantCard from "../../components/restaurant-card/RestaurantCard";

const MainPage = () => {
  return (
    <div className="main-page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <Navbar></Navbar>
      <RestaurantCard></RestaurantCard>
      <MenuBar></MenuBar>
    </div>
  );
};

export default MainPage;

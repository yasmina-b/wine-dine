import React from "react";
import "./MainPage.css";
import Navbar from "../../components/navbar/Navbar";
import MenuBar from "../../components/menubar/MenuBar";
import Search from "../../photos/search-icon.png";
import RestaurantCard from "../../components/restaurant-card/RestaurantCard";


const MainPage = () => {
  return (
    <div className="main-page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <Navbar></Navbar>
      <div className="alignment">
        <div className="inline">
          <div className="input-icons">
            <div className="lupa">
            <img id="search" src={Search} alt=""></img>
            </div>
            <input
              className="input-style"
              placeholder="Search your favorite restaurant..."
            ></input>
          </div>
        </div>
      </div>
      <div className="category-position">
        <li className="category-card">ALL</li>
        <li className="category-card">Italian</li>
        <li className="category-card">Fast Food</li>
        <li className="category-card">Chinese</li>
        <li className="category-card">Sushi</li>
      </div>
      <RestaurantCard></RestaurantCard>
      <RestaurantCard></RestaurantCard>
      <RestaurantCard></RestaurantCard>
      <MenuBar></MenuBar>
    </div>
  );
};

export default MainPage;

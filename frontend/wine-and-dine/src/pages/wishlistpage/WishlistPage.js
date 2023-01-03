import React from "react";
import MenuBar from "../../components/menubar/MenuBar";
import Navbar from "../../components/navbar/Navbar";
import "./WishlistPage.css";

const WishlistPage = () => {
  return (
    <div className="main-page">
      <Navbar></Navbar>
      <h1>MY WISHLIST</h1>
      <MenuBar></MenuBar>
    </div>
  );
};

export default WishlistPage;

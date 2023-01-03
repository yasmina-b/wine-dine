import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import "./RestaurantPage.css";
import MenuBar from "../../components/menubar/MenuBar";

const RestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  const getRestaurantById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/restaurants/${id}`
      );
      setRestaurant(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRestaurantById();
  });

  if (!restaurant) return <h1>Loading...</h1>;

  return (
    <div className="main-page">
      <Navbar></Navbar>
      <h3>{restaurant.name}</h3>
      <h2>{restaurant.category}</h2>
      <button>BOOK A TABLE</button>
      <button>ADD TO WISHLIST</button>
      <MenuBar></MenuBar>
    </div>
  );
};

export default RestaurantPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RestaurantPage.css";
import AuthContext from "../../context/AuthContext";
import WebImg from "../../photos/web.png";
import MenuImg from "../../photos/menu.png";
import MapImg from "../../photos/1.png";
import StarImg from "../../photos/star.png";

const RestaurantPage = () => {
  const {id} = useParams();
  const [restaurant, setRestaurant] = useState({});
  const {wishlist, customSetWishlist} = React.useContext(AuthContext);

  const getRestaurantById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/restaurants/${id}`
      );
      setRestaurant(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRestaurantById();
  });

  if (!restaurant) return <h1>Loading...</h1>;

  const handleAddRestaurant = (restaurant) => {
    customSetWishlist([...wishlist, restaurant]);
  }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/>
    <div className="main-page">
      <div className="imageRestaurantPageWrapper">
        <img className="imageRestaurantPage" src={restaurant.image} alt=""></img>
      </div>

      <div>
        <button type="button"  className="favoriteButton" onClick={() => handleAddRestaurant(restaurant)}><img className="webImg"src={StarImg}></img></button>
        
      </div>

      <div>
        <button type="button" className="backButton"></button>
        <span className="backArrow">&#8592;</span>
      </div>

      <div className="nameRestaurantPage">
        <h3>{restaurant.name}</h3>
      </div>

      <div className="categoryRestaurantPage">
        <h2>{restaurant.category}</h2>
      </div>

      <div className="scheduleCostRestaurantPage">
        <h2>Open: {restaurant.schedule} </h2>
      </div>

      <div className="ratingRestaurantPage">
        <h2>Rating: {restaurant.rating}</h2>
      </div>

      <div className="averageCostRestaurantPage">
        <h2>Average Cost: {restaurant.averageCost} $ for 2 people</h2>
      </div>

      <div className="ButtonWrapper">
        <button type="button" className="websiteButton"><img className="webImg"src={WebImg}></img></button>
        <button type="button" className="menuButton"><img className="webImg"src={MenuImg}></img></button>
        
        <button type="button" className="mapsButton"><img className="webImg"src={MapImg}></img></button>
      </div>

      <div className="TextWrapper">
        <h2 className="websiteText">View website</h2>
        <h2 className="websiteText">Menu</h2>
        <h2 className="websiteText">Go to Maps</h2>
      </div>

      <div className="bookButtonWrapper">
        <button className="bookButton">BOOK A TABLE</button>
      </div>
      {/* <div className="poitionMenuBar"><MenuBar></MenuBar></div> */}
    </div>
    </div>
  );
};

export default RestaurantPage;

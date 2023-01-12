import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./RestaurantPage.css";
import AuthContext from "../../context/AuthContext";
import WebImg from "../../photos/web.png";
import MenuImg from "../../photos/menu.png";
import Back from "../../photos/back-arrow.png";

const RestaurantPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({});
  const { wishlist, customSetWishlist } = React.useContext(AuthContext);

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
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className="main-page">
        <div className="imageRestaurantPageWrapper">
          <img
            className="imageRestaurantPage"
            src={restaurant.image}
            alt=""
          ></img>
        </div>

        <div>
          <button
            type="button"
            className="favoriteButton"
            onClick={() => handleAddRestaurant(restaurant)}
          >
            <span className="material-symbols-outlined">star</span>
          </button>
        </div>

        <div>
          <button type="button" className="backButton"></button>
          <Link to="/restaurants">
           <img className="backArrow" src={Back} alt=""></img>
          </Link>
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
          <a href={restaurant.website}>
            <button type="button" className="websiteButton">
              <img className="webImg" src={WebImg} alt=""></img>
            </button>
          </a>
          <a href={restaurant.menu}>
            <button type="button" className="menuButton">
              <img className="webImg" src={MenuImg} alt=""></img>
            </button>
          </a>
          <a href={restaurant.maps}>
            <button type="button" className="mapsButton">
              <span className="material-symbols-outlined">location_on</span>
            </button>
          </a>
        </div>

        <div className="TextWrapper">
          <h2 className="websiteText">View website</h2>
          <h2 className="websiteText">Menu</h2>
          <h2 className="websiteText">Go to Maps</h2>
        </div>

        <div className="bookButtonWrapper">
          <button
            className="bookButton"
            // onClick={() => navigate(`/restaurants/alltables/${restaurant._id}`)}
            onClick={() => navigate(`/reservation/${restaurant._id}`)}
          >
            BOOK A TABLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;

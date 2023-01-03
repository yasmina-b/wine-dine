import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../../photos/search-icon.png";
import "./RestaurantCard.css";
import { useNavigate } from "react-router-dom";

const RestaurantCard = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [filteredRestaurantsByCategory, setFiltredRestaurantsByCategory] =
    useState([]);

  const getRestaurants = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/restaurants");
      setRestaurants(response.data);
      setFiltredRestaurantsByCategory(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getCategories = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/categories");
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRestaurants();
    getCategories();
  }, []);

  useEffect(() => {
    if (searchValue) {
      const res = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFiltredRestaurantsByCategory(res);
    } else {
      setFiltredRestaurantsByCategory(restaurants);
    }
    console.log(searchValue);
  }, [searchValue, restaurants]);

  const filterByCategory = (category) => {
    const result = restaurants.filter((currCategory) => {
      return currCategory.category === category;
    });
    setFiltredRestaurantsByCategory(result);
  };

  return (
    <div>
      <div className="alignment">
        <div className="inline">
          <div className="input-icons">
            <div className="lupa">
              <img id="search" src={Search} alt=""></img>
            </div>
            <input
              className="input-style"
              placeholder="Search your favorite restaurant..."
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="category-position">
        <li
          className="category-card"
          onClick={() => setFiltredRestaurantsByCategory(restaurants)}
        >
          ALL
        </li>
        {categories &&
          categories.map((category) => (
            <li
              className="category-card"
              onClick={() => filterByCategory(category.name)}
            >
              {category.name}
            </li>
          ))}
      </div>
      {filteredRestaurantsByCategory &&
        filteredRestaurantsByCategory.map((restaurant) => (
          <div className="card-position">
            <div className="card">
              <div className="card-left">
                <img src={restaurant.image} alt=""></img>
              </div>
              <div className="card-right">
                <h2 className="restaurant-name">{restaurant.name}</h2>
                <button
                  className="button-design"
                  onClick={() => navigate(`/restaurants/${restaurant._id}`)}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RestaurantCard;

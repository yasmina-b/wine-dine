import React from "react";

import MenuBar from "../../components/menubar/MenuBar";
import Navbar from "../../components/navbar/Navbar";
import AuthContext from "../../context/AuthContext";
import "./WishlistPage.css";
import Back from "../../photos/back-arrow.png";
import { Link, useNavigate, useParams } from "react-router-dom";

const WishlistPage = () => {
  const { wishlist, customSetWishlist } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const removeItemFromWishlist = (index) => {
    const newWishlist = [...wishlist];
    newWishlist.splice(index, 1);
    customSetWishlist(newWishlist);
  };

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="main-2">
        <div className="main-pageWish">
          <div className="wishlistTitle">
            <h2> MY FAVORITES LIST</h2>
          </div>

          <div>
          <button type="button" className="backButtonWishList"></button>
          <Link to="/restaurants">
            <img className="backArrowWishList" src={Back} alt=""></img>
          </Link>
        </div>

          {wishlist.map((restaurant, index) => {
            return (
              <div className="card-position-fav" key={index}>
                <div className="card-fav">
                  <div className="card-left-fav">
                    <img src={restaurant.image} alt=""></img>
                  </div>
                  <div className="card-right-fav">
                    <h2 className="restaurant-name-fav">{restaurant.name}</h2>
                    <button
                      className="button-design-fav"
                      onClick={() => removeItemFromWishlist(index)}
                    >
                      REMOVE
                    </button>
                    <button
                      className="button-design-fav-rem"
                      onClick={() => navigate(`/restaurants/${restaurant._id}`)}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <MenuBar></MenuBar> */}
    </React.Fragment>
  );
};

export default WishlistPage;

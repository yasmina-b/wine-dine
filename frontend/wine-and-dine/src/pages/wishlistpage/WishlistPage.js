import React from "react";
import MenuBar from "../../components/menubar/MenuBar";
import Navbar from "../../components/navbar/Navbar";
import AuthContext from "../../context/AuthContext";
import "./WishlistPage.css";

const WishlistPage = () => {
  const { wishlist, customSetWishlist } = React.useContext(AuthContext);

  const removeItemFromWishlist = (index) => {
    const newWishlist = [...wishlist];
    newWishlist.splice(index, 1);
    customSetWishlist(newWishlist);
  };

  return (
    <div className="main-pageWish">
      <Navbar></Navbar>
      <div className="wishlistTitle">
      <h1>MY WISHLIST</h1>
      </div>

      <div>
        {wishlist.map((restaurant, index) => {
          return (
            <div className="listWish">
               <div className="wrap">
              <div className="imageWishWrapper"><img className="imageWish"src={restaurant.image} alt=""></img></div>
              <div className="wishlistRestaurantName">{restaurant.name}</div>
              </div>
              <button className="btnWishList" onClick={() => removeItemFromWishlist(index)}>
                DELETE
              </button>
              
            </div>
          );
        })}
      </div>
     
    </div>
  );
};

export default WishlistPage;

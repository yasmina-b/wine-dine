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
    <div className="main-page">
      <Navbar></Navbar>
      <h1>MY WISHLIST</h1>
      <div>
        {wishlist.map((restaurant, index) => {
          return (
            <div>
              <div>{restaurant.name}</div>
              <button onClick={() => removeItemFromWishlist(index)}>
                DELETE
              </button>
            </div>
          );
        })}
      </div>
      <MenuBar></MenuBar>
    </div>
  );
};

export default WishlistPage;

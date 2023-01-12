import React from "react";
import HomePage from "./pages/homepage/HomePage";
import LogInPage from "./pages/loginpage/LogInPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import MainPage from "./pages/mainpage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAccountPage from "./pages/myaccountpage/MyAccountPage";
import FavoritesPage from "./pages/favoritespage/FavoritesPage";
import RestaurantPage from "./pages/restaurantpage/RestaurantPage";
import WishlistPage from "./pages/wishlistpage/WishlistPage";
import RestaurantTables from "./pages/tablespage/RestaurantTables";
import ReservationPage from "./pages/reservationpage/ReservationPage";
import UserReservation from "./pages/userresverationpage/UserReservation";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/restaurants" element={<MainPage/>}></Route>
        <Route path="/restaurants/alltables/:id" element={<RestaurantTables/>}></Route>
        <Route path="/account" element={<MyAccountPage/>}></Route>
        <Route path="/favorites" element={<FavoritesPage/>}></Route>
        <Route path="/restaurants/:id" element={<RestaurantPage/>}></Route>
        <Route path="/wishlist" element={<WishlistPage/>}></Route>
        <Route path="/reservation/:id" element={<ReservationPage/>}></Route>
        <Route path="/userreservation" element={<UserReservation/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

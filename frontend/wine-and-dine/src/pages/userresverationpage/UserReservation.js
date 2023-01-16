import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuBar from "../../components/menubar/MenuBar";
import Navbar from "../../components/navbar/Navbar";
import "./UserReservation.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Back from "../../photos/back-arrow.png";

const UserReservation = () => {
  const [users, setUsers] = useState([]);
  const [userLocal, setUserLocal] = useState([]);
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));

  const getUserFromLocalStorage = () => {
    if (userLocalStorage) {
      setUserLocal(userLocalStorage);
    }
  };

  const getUserById = async () => {
    const userId = userLocalStorage._id;
    try {
      const response = await axios.get(
        `http://localhost:8800/api/users/${userId}`
      );
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserFromLocalStorage();
    getUserById();
  }, []);

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="main-page">
        <div className="main-2">
          <h1 className="bookings-title">MY BOOKINGS</h1>

          <div>
          <button type="button" className="backButtonUserReservation"></button>
          <Link to="/restaurants">
            <img className="backArrowUserReservation" src={Back} alt=""></img>
          </Link>
        </div>

          <div>
            
            {users.reservations &&
              users.reservations.map((user, index) => (
                <div className="card-position" key={index}>
                  <div className="card">
                    <div className="booked-restaurant">
                      {" "}
                      YOU HAVE A BOOKING AT {user.restaurantName}
                    </div>
                    <div className="booking-details"> Date: {user.date}</div>
                    <div className="booking-details"> Hour: {user.hour}:00</div>
                    <div className="booking-details">
                      {" "}
                      Booking ends at: {user.endHour}:00
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserReservation;

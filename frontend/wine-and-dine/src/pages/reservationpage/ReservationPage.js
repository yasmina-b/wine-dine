import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuBar from "../../components/menubar/MenuBar";
import Navbar from "../../components/navbar/Navbar";
import "./ReservationPage.css";

const ReservationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [restaurant, setRestaurant] = useState([]);

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

  const makeReservation = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `http://localhost:8800/api/reservations/${id}`,
      {
        date,
        hour,
        endHour,
      }
    );
      navigate(`/restaurants/alltables/${id}`);
      console.log("reservation successful");
  };

  return (
    <div className="main-page">
      <Navbar></Navbar>
      <div className="input-styling">
        <h1 className="reservation-title">SELECT YOUR PREFERENCES:</h1>
        <label>Choose a date:</label>
        <div className="input-box-style">
          <input
            className="date-input"
            type="date"
            id="start"
            value={date}
            min="2023-01-01"
            max="2023-12-31"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <label>Choose an hour:</label>
        <div className="input-box-style">
          <input
            className="hour-input"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          ></input>
        </div>
        <label>Choose an end hour for your reservation:</label>
        <div className="input-box-style">
          <input
            className="hour-input"
            value={endHour}
            onChange={(e) => setEndHour(e.target.value)}
          ></input>
        </div>
        <div className="confirmButton">
          <button
            className="confirm-button"
            onClick={(e) => makeReservation(e)}
          >
            CONFIRM NOW
          </button>
        </div>
      </div>
      <MenuBar></MenuBar>
    </div>
  );
};

export default ReservationPage;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuBar from "../../components/menubar/MenuBar";
import Navbar from "../../components/navbar/Navbar";
import AuthContext from "../../context/AuthContext";
import "./ReservationPage.css";
import { Link } from "react-router-dom";
import Back from "../../photos/back-arrow.png";

const ReservationPage = () => {
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [allTables, setAllTables] = useState([]);
  const [availableTables, setAvailableTables] = useState([]);
  const [tableId, setTableId] = useState("");
  const [restaurant, setRestaurant] = useState([]);

  const { user } = React.useContext(AuthContext);

  const getRestaurantTablesById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/restaurants/alltables/${id}`
      );
      setAllTables(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getRestaurantName = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8800/api/restaurants/${id}`
      );
      setRestaurant(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRestaurantTablesById();
    getRestaurantName();
  });

  const isAvailable = (reservations) => {
    const newDate = new Date(date).getTime();
    const foundReservation = reservations.find((reservation) => {
      const reservationDate = new Date(reservation.date).getTime();
      if (newDate === reservationDate) {
        if (hour < reservation.endHour && endHour > reservation.hour) {
          return true;
        }
        if (hour === reservation.endHour && endHour === reservation.hour) {
          return true;
        }
      }
    });
    if (foundReservation) {
      return false;
    }
    return true;
  };

  const handleShowAvailableTables = () => {
    const filteredTables = allTables.filter((table) =>
      isAvailable(table.reservations)
    );
    setAvailableTables(filteredTables);
  };

  const handleChooseTable = (e) => {
    const choosenTableId = e.target.value;
    setTableId(choosenTableId);
  };

  const makeReservation = async (e) => {
    const userId = user._id ? user._id : "no id";
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8800/api/reservations/${tableId}`,
        {
          date,
          hour,
          endHour,
        }
      );
      setDate("");
      setHour("");
      setEndHour("");
      setAvailableTables([]);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.post(
        `http://localhost:8800/api/reservations/user/${userId}`,
        {
          date,
          hour,
          endHour,
          restaurantName: restaurant.name,
        }
      );
    } catch (err) {}
  };

  return (
    <div className="main-page">
      <Navbar></Navbar>

      <div>
          <button type="button" className="backButtonReservation"></button>
          <Link to={`/restaurants/${restaurant._id}`}>
            <img className="backArrowReservation" src={Back} alt=""></img>
          </Link>
        </div>


      <div className="input-styling">
        <h1 className="reservation-title">SELECT YOUR PREFERENCES:</h1>
        <h6 className="reservation-subtitle">
          You are booking a table at {restaurant.name}{" "}
        </h6>
        <label className="label-style">Choose a date:</label>
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
        <label className="label-style">Choose an hour:</label>
        <div className="input-box-style">
          <input
            className="hour-input"
            type="number"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          ></input>
        </div>
        <label className="label-style">Choose an end hour for your reservation:</label>
        <div className="input-box-style">
          <input
            className="hour-input"
            type="number"
            value={endHour}
            onChange={(e) => setEndHour(e.target.value)}
          ></input>
        </div>
        <label className="label-style">Available tables:</label>
        <div className="showButton">
          <button
            className="show-button"
            onClick={handleShowAvailableTables}
          >
            SHOW TABLES
          </button>
        </div>
        {availableTables.length > 0 && (
          <div className="select-position">
          <select className="select-style" onChange={handleChooseTable}>
            {availableTables.map((table, index) => (
              <option key={index} value={table._id}>
                {table.name} : {table.capacity} persons : {table.location}
              </option>
            ))}
          </select>
          </div>
        )}

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

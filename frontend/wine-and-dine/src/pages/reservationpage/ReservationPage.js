import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuBar from "../../components/menubar/MenuBar";
import Navbar from "../../components/navbar/Navbar";
import "./ReservationPage.css";

const ReservationPage = () => {
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [allTables, setAllTables] = useState([]);
  const [availableTables, setAvailableTables] = useState([]);
  const [tableId, setTableId] = useState("");

  const getRestaurantTablesById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/restaurants/alltables/${id}`
      );
      setAllTables(response.data);
      //console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRestaurantTablesById();
  }, []);

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
            type="number"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          ></input>
        </div>
        <label>Choose an end hour for your reservation:</label>
        <div className="input-box-style">
          <input
            className="hour-input"
            type="number"
            value={endHour}
            onChange={(e) => setEndHour(e.target.value)}
          ></input>
        </div>
        <label>Available tables:</label>
        {availableTables.length > 0 && (
          <select onChange={handleChooseTable}>
            {availableTables.map((table, index) => (
              <option key={index} value={table._id}>
                {table.name}
              </option>
            ))}
          </select>
        )}

        <div className="confirmButton">
          <button
            className="confirm-button"
            onClick={handleShowAvailableTables}
          >
            SHOW TABLES
          </button>
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

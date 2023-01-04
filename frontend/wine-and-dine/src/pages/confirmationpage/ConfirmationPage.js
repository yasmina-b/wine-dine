import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ConfirmationPage.css";
import Navbar from "../../components/navbar/Navbar";
import "react-calendar/dist/Calendar.css";
import MenuBar from "../../components/menubar/MenuBar";
import { useParams } from "react-router-dom";

const ConfirmationPage = () => {
  const { id } = useParams();
  const [allTables, setAllTables] = useState([]);

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

  useEffect(() => {
    getRestaurantTablesById();
  });

  const handleClick = () => {};

  return (
    <div className="background">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <Navbar></Navbar>
      <h1>Select your table:</h1>
      {allTables &&
        allTables.map((table) => (
          <div>
            <h1>{table.name}</h1>
            <h1>capacity : {table.capacity}</h1>
            <h1>location : {table.location}</h1>
            <button onClick={() => handleClick()}>SELECT THIS TABLE</button>
          </div>
        ))}
      <MenuBar></MenuBar>
    </div>
  );
};

export default ConfirmationPage;

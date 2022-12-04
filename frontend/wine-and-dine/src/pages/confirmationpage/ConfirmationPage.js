import React, { useState } from "react";
import "./ConfirmationPage.css";
import Navbar from "../../components/navbar/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import MenuBar from "../../components/menubar/MenuBar";

const ConfirmationPage = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="background">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <Navbar></Navbar>
      <div>
        <h1 className="title-confirm">Select your preferences:</h1>
        <label>Choose a date : </label>
        {!isShown && (
          <span class="material-symbols-outlined" onClick={handleClick}>
            calendar_month
          </span>
        )}
        {isShown && <Calendar></Calendar>}
        <label>Select the number of persons:</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        <label>Choose an hour</label>
        <select>
            <option>10:00-12:00</option>
            <option>12:00-14:00</option>
            <option>14:00-16:00</option>
            <option>16:00-18:00</option>
            <option>18:00-20:00</option>
            <option>20:00-22:00</option>
        </select>
        <label>Where do you want to eat?</label>
        <select>
            <option>indoor</option>
            <option>outdoor</option>
        </select>
        <button className="button-design-confirm">Confirm your booking</button>
      </div>
      <MenuBar></MenuBar>
    </div>
  );
};

export default ConfirmationPage;

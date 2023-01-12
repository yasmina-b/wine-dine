import Reservation from "../models/Reservation.js";
import Restaurant from "../models/Restaurant.js";
import Table from "../models/Table.js";

export const getReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (err) {
    next(err);
  }
};

export const getReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    res.status(200).json(reservation);
  } catch (err) {
    next(err);
  }
};

export const createReservation = async (req, res, next) => {
  const tableId = req.params.tableid;
  const newReservation = {
    date: req.body.date,
    hour: req.body.hour,
    endHour: req.body.endHour,
  };

  try {
    //const savedReservation = await newReservation.save();
    try {
      await Table.findByIdAndUpdate(tableId, {
        $push: {
          reservations: newReservation,
        },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(newReservation);
  } catch (err) {
    next(err);
  }
};

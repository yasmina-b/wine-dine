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
  const restaurantId = req.body.restaurantid;
  const newReservation = new Reservation({
    date: req.body.date,
    hour: req.body.hour,
    endHour: req.body.endHour,
  });

  try {
    const savedReservation = await newReservation.save();
    try {
      await Table.findByIdAndUpdate(tableId, {
        $push: { reservations: savedReservation },
      });

      try {
        // const restaurant = await Restaurant.findById(restaurantId);
        //  await restaurant.updateOne({
        //   "tables._id" : tableId,  $push: { 'tables.$[].reservations': savedReservation},
        // })

        // const tableList = await Promise.all(
        //   restaurant.tables.map((table) => {
        //     if(table._id == tableId){
        //       $push: { reservations: savedReservation}
        //     }
        //   })
        // )
        //res.status(200).json(tableList);

        Restaurant.updateOne(
          { _id: restaurantId, "tables._id": tableId },
          {
            $push: {
              "tables.$.reservations": {
                "date": req.body.date,
                "hour": req.body.hour,
                "endHour": req.body.endHour
              },
            },
          }
        );
      } catch (err) {
        next(err);
      }
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedReservation);
  } catch (err) {
    next(err);
  }
};

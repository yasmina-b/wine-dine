import express from "express";
import { createReservation, getReservation, getReservations, userReservation } from "../controllers/reservation.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//GET
router.get("/:id", getReservation);

//GET ALL
router.get("/", getReservations);

//CREATE
router.post("/:tableid", createReservation);
router.post("/user/:userid", userReservation);

export default router;

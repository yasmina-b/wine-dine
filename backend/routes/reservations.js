import express from "express";
import { createReservation, getReservation, getReservations } from "../controllers/reservation.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//GET
router.get("/:id", getReservation);

//GET ALL
router.get("/", getReservations);

//CREATE
router.post("/:tableid", createReservation);

export default router;

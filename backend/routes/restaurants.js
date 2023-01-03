import express from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurant,
  getRestaurants,
  updateRestaurant,
} from "../controllers/restaurant.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createRestaurant);

//UPDATE
router.put("/:id", updateRestaurant);

//DELETE
router.delete("/:id", verifyAdmin, deleteRestaurant);

//GET
router.get("/:id", getRestaurant);

//GET ALL
router.get("/", getRestaurants);

export default router;

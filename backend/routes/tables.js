import express from "express";
import { createTable, deleteTable, getTable, getTables, updateTable, updateTableAvailability } from "../controllers/table.js";

const router = express.Router();

//CREATE
router.post("/:restaurantid", createTable);

//UPDATE
router.put("/availability/:id", updateTableAvailability);
router.put("/:id", updateTable);

//DELETE
router.delete("/:id/:restaurantid", deleteTable);

//GET
router.get("/:id", getTable);

//GET ALL
router.get("/", getTables);

export default router;
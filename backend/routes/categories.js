import express from "express";
import { createCategory, getCategories, getCategory } from "../controllers/category.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createCategory);

//GET
router.get("/:id", getCategory);

//GET ALL
router.get("/", getCategories);

export default router;

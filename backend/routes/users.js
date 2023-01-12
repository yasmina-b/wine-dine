import express from "express";
import { getUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//GET ALL
router.get("/", getUsers);

//GET
router.get("/:id", getUser);

//UPDATE
router.put("/:id", updateUser);

export default router;

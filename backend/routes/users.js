import express from "express";
import { getUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//GET ALL
router.get("/", verifyAdmin, getUsers);

//GET
router.get("/:id", verifyUser, getUser);

//UPDATE
router.put("/:id", verifyUser, updateUser);

export default router;

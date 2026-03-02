import express from "express";
import { CreateMovie, DeleteMovie, MovieIndex, UpdateMovie } from "../controllers/movies.controller.js";

const router = express.Router();

//  CRUD
router.get("/", MovieIndex);

router.post("/", CreateMovie);

router.put("/:id",UpdateMovie);

router.delete("/:id",DeleteMovie);

export default router;

import express from "express";
import { getCourses, createCourse } from "../controllers/courseController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCourses);
router.post("/", protect, createCourse);

export default router;

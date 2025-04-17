import { Course } from "../models/Course.js";
import { courseSchema } from "../validations/courseValidation.js";

export const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    next(error);
  }
};

export const createCourse = async (req, res, next) => {
  try {
    const validated = courseSchema.parse(req.body);
    const course = await Course.create(validated);
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};

const express = require("express");
const {
  getAllLessons,
  getLessonById,
  addLesson,
  deleteLesson,
} = require("./controller");
const router = express.Router();

router
  .get("/", getAllLessons)
  .get("/:id", getLessonById)
  .post("/add", addLesson)
  .post("/remove", deleteLesson);

module.exports = router;

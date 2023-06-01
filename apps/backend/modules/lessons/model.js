const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: mongoose.Mixed,
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;

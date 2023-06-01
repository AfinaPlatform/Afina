const LessonModel = require("./model");

async function getAllLessons(req, res) {
  const lessons = await LessonModel.find({});

  res.json({
    lessons,
  });
}

async function getLessonById(req, res) {
  const { id } = req.params;
  const lesson = await LessonModel.findById(id).exec();

  if (lesson) {
    res.json({
      lesson,
    });
  } else {
    res.status(404);
    res.json({
      error: "Lesson not found",
    });
  }
}

async function addLesson(req, res) {
  try {
    const newLesson = LessonModel(req.body);

    await newLesson.save();

    res.json({
      msg: "New lesson added",
      lessonId: newLesson.id,
    });
  } catch (e) {
    res.json(e);
  }
}

async function deleteLesson(req, res) {
  try {
    await LessonModel.deleteOne({ _id: req.body.id });

    res.json({
      msg: "lesson delete",
    });
  } catch (e) {
    res.json(e);
  }
}

module.exports = {
  getAllLessons,
  getLessonById,
  addLesson,
  deleteLesson,
};

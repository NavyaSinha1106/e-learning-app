const router = require("express").Router();
const { Course, validate } = require("../models/course");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const course = await Course.findOne({ courseName: req.body.courseName });
    if (course)
      return res
        .status(409)
        .send({ message: "Course with given email already registered" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    let newCourse = await new Course({
      ...req.body,
    }).save();
    newCourse.__v = undefined;
    res
      .status(201)
      .send({ data: newCourse, message: "Course created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.status(200).send({ data: courses });
});

router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.status(200).send({ data: course });
});

module.exports = router;

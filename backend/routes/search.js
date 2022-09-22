const router = require("express").Router();
const { Course } = require("../models/course");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  const search = req.query.search;
  if (search !== "") {
    const courses = await Course.find({
      courseName: { $regex: search, $options: "i" },
    }).limit(10);
    const result = { courses };
    res.status(200).send(result);
  } else {
    res.status(200).send({});
  }
});

module.exports = router;

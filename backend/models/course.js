const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  courseDesc: { type: String, required: true },
  courseImg: { type: String, required: true },
  courseDate: { type: Date, required: true },
  coursePrice: { type: String, required: true },
});

courseSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const Course = mongoose.model("course", courseSchema);

const validate = (data) => {
  const schema = Joi.object({
    courseName: Joi.string().required(),
    courseDesc: Joi.required(),
    courseImg: Joi.required(),
    courseDate: Joi.required(),
    coursePrice: Joi.required(),
  });
  return schema.validate(data);
};

module.exports = { Course, validate };

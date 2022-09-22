const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });

  return token;
};

const Users = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.required(),
    password: Joi.required(),
    phone: Joi.required(),
    work: Joi.required(),
  });
  return schema.validate(data);
};

module.exports = { Users, validate };

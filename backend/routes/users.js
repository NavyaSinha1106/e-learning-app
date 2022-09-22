const router = require("express").Router();
const { Users, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const user = await Users.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already registered" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    let newUser = await new Users({
      ...req.body,
      password: hashPassword,
    }).save();
    newUser.password = undefined;
    newUser.__v = undefined;
    res
      .status(201)
      .send({ data: newUser, message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const user = await Users.findById(req.params.id).select("-password -__v");
  res.status(200).send({ data: user });
});

module.exports = router;

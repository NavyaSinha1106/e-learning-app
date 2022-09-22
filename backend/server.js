require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/courses");
const searchRoutes = require("./routes/search");

connection(process.env.ATLAS_URI);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(cors());

app.use("/api/users/", userRoutes);
app.use("/api/auth/", authRoutes);
app.use("/api/courses/", courseRoutes);
app.use("/api/", searchRoutes);

const port = process.env.port || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));

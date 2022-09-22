import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Courses.css";
import axios from "axios";

function Courses() {
  const [data, setData] = useState({
    courseName: "",
    courseDesc: "",
    courseImg: "",
    courseDate: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let jsonData = JSON.stringify({
      courseName: data.courseName,
      courseDesc: data.courseDesc,
      courseImg: data.courseImg,
      courseDate: data.courseDate,
      coursePrice: data.coursePrice,
    });
    try {
      const url = "http://localhost:8080/api/courses";
      const res = await axios.post(url, jsonData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.message);
      navigate("/courses");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <>
      <div className="signup-card">
        <h1>Create a Course</h1>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="courseName"
              value={data.courseName}
              onChange={handleChange}
              required
              placeholder="Course Name"
            />
            <br></br>
            <input
              type="text"
              id="email"
              name="courseDesc"
              value={data.courseDesc}
              onChange={handleChange}
              required
              placeholder="Description"
            />
            <br></br>
            <input
              type="text"
              id="pass"
              name="courseImg"
              defaultValue={data.courseImg}
              onChange={handleChange}
              required
              placeholder="Image Link"
            />
            <br></br>
            <input
              type="date"
              id="phone"
              name="courseDate"
              value={data.courseDate}
              onChange={handleChange}
              required
              placeholder="Date"
            />
            <input
              type="text"
              id="price"
              name="coursePrice"
              value={data.coursePrice}
              onChange={handleChange}
              required
              placeholder="Price"
            />
            <br></br>
            {error && <div className="error">{error}</div>}
            <button className="signup-btn">Create</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Courses;

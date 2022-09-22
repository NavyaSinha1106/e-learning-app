import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CourseCard.css";

const CourseCard = ({ productArray, onAddToCart }) => {
  const [error, setError] = useState("");
  let [courses, setCourses] = useState([]);

  const courseData = async () => {
    try {
      const url = "http://localhost:8080/api/courses";
      const res = await axios.get(url);
      const data = res.data;
      setCourses(data.data);
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

  const addToCart = (id) => {
    onAddToCart(id);
  };

  useEffect(() => {
    courseData();
  }, []);

  return (
    <>
      {courses.length !== 0
        ? courses.map((item) => (
            <div className="CourseCard">
              <div className="Course">
                <div className="CourseImage">
                  <img src={item.courseImg}></img>
                </div>
                <div className="CourseInformation">
                  <div className="CourseTitle">
                    <h3>{item.courseName}</h3>
                  </div>
                  <div className="CourseDesc">
                    <p>{item.courseDesc}</p>
                    <p>{item.courseDate}</p>
                    <p>
                      {`$`}
                      {item.coursePrice}
                    </p>
                  </div>
                  <button
                    className="Add"
                    onClick={() => {
                      onAddToCart(item._id);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default CourseCard;

import React, { useState } from "react";
import TopNav from "../TopNav";
import { Link, Outlet } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    console.log("hello");

    e.preventDefault();
    let jsonData = JSON.stringify({
      email: data.email,
      password: data.password,
    });
    try {
      const url = "http://localhost:8080/api/auth";
      const res = await axios.post(url, jsonData, {
        headers: { "Content-Type": "application/json" },
      });
      localStorage.setItem("token", res.data.data);

      window.location = "/";
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
      <TopNav />
      <div className="login-card">
        <h1 className="heading">Log In to Your EduHut Account!</h1>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={data.email}
              onChange={handleChange}
              required
              placeholder="E-mail"
            />
            <br></br>
            <input
              type="password"
              id="pass"
              name="password"
              defaultValue={data.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
            <br></br>
            {error && <div className="error">{error}</div>}
            <button className="login-btn">Login</button>
          </form>
          <p>or Forgot Password?</p>
          <div className="line"></div>
          <p>
            Don't have an account?{" "}
            <Link className="signup1" to="/signup">
              Sign up
            </Link>
          </p>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Login;

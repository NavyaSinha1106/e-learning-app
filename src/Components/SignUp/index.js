import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import TopNav from "../TopNav";
import "./SignUp.css";
import axios from 'axios';

function SignUp() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    work: ""
  });

  const [error,setError] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let jsonData = JSON.stringify({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      phone: data.phone,
      work: data.work,
    })
    try{
      console.log(data)
      const url = "http://localhost:8080/api/users";
      const res =  await axios.post(url,jsonData,{headers:{"Content-Type" : "application/json"}})
      navigate("/login")
      console.log(res.message)
    }
    catch(error){
      if(error.response && error.response.status>=400 && error.response.status<=500){
        setError(error.response.data.message)
      }
    }
  };
  return (
    <>
      <TopNav />
      <div className="signup-card">
        <h1>Sign Up and start learning</h1>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="fullName"
              defaultValue={data.fullName}
              onChange={handleChange}
              required
              placeholder="Full Name"
            />
            <br></br>
            <input
              type="text"
              id="email"
              name="email"
              value={data.email}
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
            <input
              type="tel"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
              placeholder="+91 Phone Number"
            />
            <br></br>
            <select
              name="work"
              id="work"
              value={data.work}
              onChange={handleChange}
              required
            >
              <option value="experience" defaultValue disabled hidden>
                Work Experience{" "}
              </option>
              <option value="Student">Student</option>
              <option value="Instructor">Instructor</option>
            </select>
            {error && <div className="error">{error}</div>}
            <button className="signup-btn">Sign Up</button>
          </form>
          <p>
            By signing up, you agree to our <u>Terms of Use</u> and{" "}
            <u>Privacy Policy.</u>
          </p>
          <div className="line"></div>
          <p>
            Already have an account?
            <Link className="login1" to="/login">
              Log In
            </Link>
          </p>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default SignUp;

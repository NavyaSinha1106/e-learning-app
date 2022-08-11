import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import About from "./Components/About";
import Contact from "./Components/Contact Us";
import Dashboard from "./Components/Dashboard";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/homepage" element={<HomePage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {user && <Route path="/" exact element={<Dashboard/>} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

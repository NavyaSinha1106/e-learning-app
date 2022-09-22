import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import About from "./Components/About";
import Contact from "./Components/Contact Us";
import Courses from "./Components/Courses";
import ProfilePage from "./Components/ProfilePage";
import Search from "./Components/Search";
import { useState } from "react";
import CartItem from "./Components/CartItem";

function App() {
  const user = localStorage.getItem("token");
  const [productArray, setProductArray] = useState([]);

  const onAddToCart = (id) => {
    const clone = [...productArray];
    clone.push(id);
    setProductArray(clone);
  };

  let count = productArray.length;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage productArray={productArray} onAddToCart={onAddToCart} />
            }
          />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="cart"
            element={
              <CartItem
                productArray={productArray}
                setProductArray={setProductArray}
              />
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/search"
            element={
              <Search productArray={productArray} onAddToCart={onAddToCart} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

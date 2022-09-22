import React, { useState } from "react";
import axios from "axios";
import TopNav from "../TopNav";
import { useEffect } from "react";
import "./CartItem.css";

function CartItem({ productArray, setProductArray }) {
  let [cart, setCart] = useState([]);
  let cartID = [...productArray];

  const handleDeletefromCartClick = async (site) => {
    await deleteFromCart(site);
  };

  const cartData = async (cartID) => {
    let cartData = [];
    for (let i = 0; i < cartID.length; i++) {
      const url = `http://localhost:8080/api/courses/${cartID[i]}`;
      const res = await axios.get(url);
      const data = res.data;
      cartData.push(data.data);
    }
    setCart(cartData);
  };

  const deleteFromCart = async (id) => {
    cartID = cartID.filter((item) => item !== id);
    setProductArray(cartID);
    cartData(cartID);
  };

  useEffect(() => {
    cartData(cartID);
  }, [productArray]);

  const CartItem = cart.map((items) => (
    <>
      <div className="CartCard">
        <div className="Cart">
          <div className="CartImage">
            <img src={items.courseImg}></img>
          </div>
          <div className="CartInformation">
            <div className="CartDesc">
              <h3>{items.courseName}</h3>
              <p>{items.courseDesc}</p>
              <p>{items.courseDate}</p>
              <p>
                {`$`}
                {items.coursePrice}
              </p>
            </div>
            <button
              className="Remove"
              onClick={() => {
                handleDeletefromCartClick(items._id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  ));
  let total = 0;
  cart.forEach(function (CartItem) {
    total += parseInt(CartItem.coursePrice);
  });

  let sum = 0;
  if (total === 0) {
    sum = 0;
  } else if (total < 100) {
    sum = 0;
  } else {
    sum = 0;
  }
  let order;
  order = total + sum;

  return (
    <>
      <TopNav />
      <div className="CartItems">{CartItem}</div>
      <div className="CartSummary">
        <div className="CartTotal">
          <h3 className="Summary">Order Summary</h3>
          <p className="SubTotal">
            Items:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            {`$`}
            {total}
          </p>
          <p className="Total">
            Order
            Total:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            {`$`}
            {order}
          </p>
        </div>
      </div>
    </>
  );
}

export default CartItem;

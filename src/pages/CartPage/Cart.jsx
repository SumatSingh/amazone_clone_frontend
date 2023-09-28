import React from "react";
import "./Cart.css";

import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src="https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="cart" />
          <div className="cart_btn">
            <NavLink><button className="cart_btn1">Add to Cart</button></NavLink>
            <NavLink><button className="cart_btn2">Buy Now</button></NavLink>
          </div>
        </div>
        <div className="right_cart">
          <h3>Fitness Gear</h3>
          <h4>Pigeon FAVOURITE Electric Kettle (1.5 L, silver, Black)</h4>
          <Divider />
          <p className="mrp">
            M.R.P. : <del>₹1195</del>
          </p>
          <p>
            Deal of the Day :<span style={{ color: "#B12704" }}>₹625.00</span>
          </p>
          <p>
            You save :<span style={{ color: "#B12704" }}>₹570 (47%)</span>
          </p>

          <div className="discount_box">
            <h5>
              Discount :<span style={{ color: "#111" }}>Extra 10% off</span>
            </h5>
            <h4>
              FREE Delivery :
              <span style={{ color: "#111", fontWeight: "600" }}>
                Oct 8 - 21
              </span>
              Details
            </h4>
            <p style={{ color: "#111" }}>
              Fastest delivery:
              <span style={{ color: "#111", fontWeight: "600" }}>
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">
            About the Iteam :
            <span
              style={{
                color: "#565959",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "0.4px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, sit laboriosam qui culpa, odit fuga doloribus, magnam tempora consequatur quis beatae cum corrupti architecto nobis dolorum. Provident iste doloribus adipisci et laborum ex aut quo asperiores nam, placeat sapiente facere?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

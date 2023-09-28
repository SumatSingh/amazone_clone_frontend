import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <NavLink to="/">
              {" "}
              <img src="./assets/amazon_PNG25.png" alt="#" />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">SignIn</NavLink>
          </div>
          <NavLink to="buynow">
            <div className="cart_btn">
              <Badge badgeContent={1} color="primary">
                <ShoppingCartIcon id="icon" />
              </Badge>
              <p>Cart</p>
            </div>
          </NavLink>
         <NavLink to='/undefine_user'><Avatar className="avtar" /></NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

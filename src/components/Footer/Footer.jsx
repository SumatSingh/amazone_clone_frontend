import React from 'react'
import "./Footer.css"

const Footer = () => {

    const year = new Date().getFullYear()
    // console.log(year);
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_details_one">
            <h3>Get to Know Us</h3>
            <p>Careers</p>
            <p>Blog</p>
            <p>About Amazon</p>
            <p>Investor Relations</p>
            <p>Amazone Devices</p>
            <p>Amazone Science</p>
        </div>
        <div className="footer_details_one">
            <h3>Make Money with Us</h3>
            <p>Sell products on Amazon</p>
            <p>Sell on Amazon Business</p>
            <p>Sell apps on Amazon</p>
            <p>Become an Affiliate</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
            <p>Host an Amazon Hub</p>
            <p>› See More Make Money with Us</p>
        </div>
        <div className="footer_details_one forres">
            <h3>Amazon Payment Products</h3>
            <p>Amazon Business Card</p>
            <p>Shop with Points</p>
            <p>Reload Your Balance</p>
            <p>Amazon Currency Converter</p>
        </div>
        <div className="footer_details_one forres">
            <h3>Let Us Help You</h3>
            <p>Amazon and COVID-19</p>
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Shipping Rates & Policies</p>
            <p>Returns & Replacements</p>
            <p>Returns & Replacements</p>
            <p>Manage Your Content and Devices</p>
            <p>Amazon Assistant</p>
            <p>Help</p>
        </div>
      </div>

      <div className="lastdetails">
        <img src="./assets/amazon_PNG25.png" alt="#" />
        <p>Conditions of Use &nbsp; &nbsp; Privacy Notice &nbsp; &nbsp; Your Ads Privacy Choices <br />
           © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  )
}

export default Footer

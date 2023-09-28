import React from "react";
import Banner from "../Banner/Banner";
import Slide from "../Slide/Slide";
import "./Main.css";


const Main = () => {
  return (
    <>
      <div className="home_section">

        <div className="banner_part">
          <Banner />
        </div>

        <div className="slide_part">
          <div className="left_slide">
          <Slide title="Deal Of The day"/>
          </div>
          <div className="right_slide">
            <h4>Festive latest launches</h4>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg" alt="" />
            <a href="#">See More</a>
          </div>         
        </div>

      <Slide title="Today's Deal"/>
       <div className="center_img">
        <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="#" />
       </div>
      <Slide title="Best Seller"/>
      <Slide title="Upto 80% off"/>
       
      </div>
    </>
  );
};

export default Main;

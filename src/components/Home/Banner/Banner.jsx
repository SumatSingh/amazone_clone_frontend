import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Banner.css"

const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/sepatf23/unrec/one/upd/MA_3000._CB595840558_.jpg",
];

// console.log(data);

const Banner = () => {
  return (
    <div>
      <Carousel
        className="carousel"
        autoPlay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
            style:{
                backgroundColor:"#fff",
                backgroundSize:'conten',
                color:"#494949",
                borderRadius:0,
                marginTop:-22,
                height:"104px"
            }
        }} 
      >
        {data.map((img, i) => {
          return <img key={i} src={img} alt="" className="banner_img"/>;
        })}
      </Carousel>
    </div>
  );
};

export default Banner;

import React from "react";
import BanImg from "../assets/banner.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "50px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          borderRight: "3px solid white",
          padding: "10px 0",
          color: "transparent",
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="">
          <Link to="/shop">
            <img className="w-full" src={BanImg} alt="" />
          </Link>
        </div>
        <div className="">
          <Link to="/shop">
            <img className="w-full" src={BanImg} alt="" />
          </Link>
        </div>
        <div className="">
          <Link to="/shop">
            <img className="w-full" src={BanImg} alt="" />
          </Link>
        </div>
        <div className="">
          <Link to="/shop">
            <img className="w-full" src={BanImg} alt="" />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;

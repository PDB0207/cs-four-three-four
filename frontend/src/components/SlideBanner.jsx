import React from "react";
import "./SlideBanner.css";
import banner from "../assets/banner.jpg";

const SlideBanner = () => {
  return (
    <div className="slide-banner">
      <img src={banner} alt="Banner phim hot" />
    </div>
  );
};

export default SlideBanner;

import React from "react";
import slider1 from "../../../assets/sliderimg.jpg";
import slider2 from "../../../assets/sliderimg1.jpg";
import slider3 from "../../../assets/sliderimg2.jpg";

const SliderLg = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slider1" className="carousel-item relative w-full">
          <img
            src={slider1}
            alt="/"
            className="w-full h-[250px] md:h-[750px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slider3" className="btn btn-circle btn-outline">
              ❮
            </a>
            <a href="#slider2" className="btn btn-circle btn-outline">
              ❯
            </a>
          </div>
        </div>
        <div id="slider2" className="carousel-item relative w-full">
          <img
            src={slider2}
            alt="/"
            className="w-full h-[250px] md:h-[750px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slider1" className="btn btn-circle btn-outline">
              ❮
            </a>
            <a href="#slider3" className="btn btn-circle btn-outline">
              ❯
            </a>
          </div>
        </div>
        <div id="slider3" className="carousel-item relative w-full">
          <img
            src={slider3}
            alt="/"
            className="w-full h-[250px] md:h-[750px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slider2" className="btn btn-circle btn-outline">
              ❮
            </a>
            <a href="#slider1" className="btn btn-circle btn-outline">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderLg;

import React from 'react';
import slider1 from '../../../assets/sliderimg.jpg'
import slider2 from '../../../assets/sliderimg1.jpg'
import slider3 from '../../../assets/sliderimg2.jpg'

const Slider = () => {
    return (
      <div>
        
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={slider1}
              alt="/"
              className="w-full h-[250px] md:h-[750px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle btn-outline">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-outline">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={slider2}
              alt="/"
              className="w-full h-[250px] md:h-[750px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-outline">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle btn-outline">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={slider3}
              alt="/"
              className="w-full h-[250px] md:h-[750px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle btn-outline">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle btn-outline">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Slider;
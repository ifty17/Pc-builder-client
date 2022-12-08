import React from 'react';
import slider1 from '../../../assets/sliderimg.jpg'
import slider2 from '../../../assets/sliderimg1.jpg'
import slider3 from '../../../assets/sliderimg2.jpg'

const Slider = () => {
    return (
      <div data-aos="zoom-in-up">
        {/* <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src={slider1}
              alt="/"
              className="w-full h-[250px] md:h-[750px]"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src={slider2}
              alt="/"
              className="w-full h-[250px] md:h-[750px]"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src={slider3}
              alt="/"
              className="w-full h-[250px] md:h-[750px]"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div> */}
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={slider1}
              alt="/"
              className="w-full h-[250px] md:h-[750px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle btn-outline">
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
              <a href="#slide4" className="btn btn-circle btn-outline">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Slider;
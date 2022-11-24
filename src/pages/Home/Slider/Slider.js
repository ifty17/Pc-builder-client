import React from 'react';
import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'
import slider3 from '../../../assets/slider3.jpeg'

const Slider = () => {
    return (
      <div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img src={slider1} alt="/" className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={slider2} alt="/" className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={slider3} alt="/" className="w-full" />
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
        </div>
      </div>
    );
};

export default Slider;
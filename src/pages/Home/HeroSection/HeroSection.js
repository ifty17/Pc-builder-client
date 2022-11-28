import React from 'react';
import heroImg from '../../../assets/slider1.jpg'

const HeroSection = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 py-5">
        <div data-aos="fade-right" className="mx-auto px-3 my-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Choose the Best
            <span className="text-green-800"> Graphics Card</span> in your
            Budget from <span className="text-green-800">PC Builder!</span>
          </h1>
          <p className="mb-4">
            We try to provide you the best product in your budget. If you are
            looking for the best{" "}
            <span className="text-green-800 font-bold">pc component</span> in
            Bangladesh you have to consider
            <span className="text-green-800 font-bold"> PC BUILDER</span>
          </p>
        </div>
        <div data-aos="fade-left">
          <img src={heroImg} alt="" />
        </div>
      </div>
    );
};

export default HeroSection;
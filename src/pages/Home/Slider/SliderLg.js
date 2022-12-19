import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import slider1 from "../../../assets/sliderimg.jpg";
import slider2 from "../../../assets/sliderimg1.jpg";
import slider3 from "../../../assets/sliderimg2.jpg";

const SliderLg = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="pb-7 w-full h-[250px] md:h-[640px]"
            src={slider1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="pb-7 w-full h-[250px] md:h-[640px]"
            src={slider2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="pb-7 w-full h-[250px] md:h-[640px]" src={slider3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderLg;

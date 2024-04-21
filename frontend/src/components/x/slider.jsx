import React from "react";
import { Pagination, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.module.css";

import FlipCard from "../FlipCard/FlipCard.jsx";

import { Swiper, SwiperSlide } from "swiper/react";

function Slider() {
  return (
    <div className="flex justify-center items-center w-[950px] h-[280px] my-5">
      <Swiper
        grabCursor={true}
        loop={true}
        spaceBetween={5}
        mousewheel={true}
        pagination={true}
        slidesPerView={5}
        navigation={true}
        modules={[Pagination]}
        className="w-[100%] h-[100%]"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <FlipCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <FlipCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <FlipCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <FlipCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <FlipCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <FlipCard className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <FlipCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;

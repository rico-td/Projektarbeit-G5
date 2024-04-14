import React from "react";
// import "./Forecast7Days.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import FlippingCard from "../FlippingCard/FlippingCard.js";

import img01 from "../../assets/Forecast7Days/o1.jpg";
import img02 from "../../assets/Forecast7Days/o2.jpg";
import img03 from "../../assets/Forecast7Days/o3.jpg";
import img04 from "../../assets/Forecast7Days/o4.jpg";
import img05 from "../../assets/Forecast7Days/o5.jpg";
import img06 from "../../assets/Forecast7Days/o6.jpg";
import img07 from "../../assets/Forecast7Days/o7.jpg";

function Forecast7Days() {
  return (
    <div className="container w-[1000px]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"5"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className="swiper_container"
      >
        <SwiperSlide>
          <img className="rounded-3xl p-2" src={img01} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl p-2" src={img02} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl p-2" src={img03} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl p-2" src={img04} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl p-2" src={img05} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl p-2" src={img06} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl p-2" src={img07} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Forecast7Days;

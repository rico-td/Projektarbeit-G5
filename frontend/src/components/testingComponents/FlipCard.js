import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./FlipCard.module.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

// import images
import img01 from "../../assets/Forecast7Days/o1.jpg";
import img02 from "../../assets/Forecast7Days/o2.jpg";
import img03 from "../../assets/Forecast7Days/o3.jpg";
import img04 from "../../assets/Forecast7Days/o4.jpg";
import img05 from "../../assets/Forecast7Days/o5.jpg";
import img06 from "../../assets/Forecast7Days/o6.jpg";
import img07 from "../../assets/Forecast7Days/o7.jpg";

function FlipCard() {
  return (
    <div classname={style.container}>
      <Swiper
        effect={"flip"}
        grabCursor={false}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img02} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img03} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img04} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img05} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img06} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img07} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default FlipCard;

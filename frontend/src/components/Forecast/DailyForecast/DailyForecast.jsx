import React from "react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import FlipCardDaily from "../../FlipCardDaily/FlipCardDaily.jsx";

import { Swiper, SwiperSlide } from "swiper/react";

function DailyForecast({ data }) {
  // console.log("RECEIVED FROM DailyForecast.js:", data);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-start w-[920px] h-[315px] my-3">
      <p className=" w-[230px] mb-1 text-xl p-1 text-center text-white font-extralight bg-gray-500 bg-opacity-[0.5] rounded-l">
        Daily Forecast 7 Days
      </p>
      <Swiper
        grabCursor={true}
        loop={true}
        spaceBetween={5}
        pagination={true}
        slidesPerView={5}
        modules={[Pagination]}
        className="w-[100%] h-[100%]"
      >
        {data.map((forecast, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <FlipCardDaily
                temperature={forecast.temperature_celsius}
                temp_min={forecast.min_temperature_celsius}
                temp_max={forecast.max_temperature_celsius}
                description={forecast.description}
                date={forecast.date}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DailyForecast;

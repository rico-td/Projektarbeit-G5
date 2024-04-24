import React from "react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import FlipCard from "../../FlipCard/FlipCard.jsx";

import { Swiper, SwiperSlide } from "swiper/react";

function DailyForecast({ data, sunrise, sunset }) {
  // console.log("RECEIVED FROM DailyForecast.js:", data);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center items-center w-[950px] h-[280px] my-5">
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
              <FlipCard
                temperature={forecast.temperature_celsius}
                description={forecast.description}
                windSpeed={forecast.wind_speed}
                humidity={forecast.humidity}
                temp_min={forecast.min_temperature_celsius}
                temp_max={forecast.max_temperature_celsius}
                time={forecast.time}
                main_description={forecast.main_description}
                sunrise={sunrise}
                sunset={sunset}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DailyForecast;

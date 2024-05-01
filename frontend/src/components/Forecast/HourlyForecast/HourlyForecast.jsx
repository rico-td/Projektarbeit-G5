import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import FlipCardHourly from "../../FlipCardHourly/FlipCardHourly.jsx";
import "./HourlyForecast.module.css";
function DailyForecast({ dataHourly, isCelsius }) {
  if (!dataHourly) {
    return (
      <div className="flex justify-center items-center text-white m-20">
        Loading...fetching Data
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center  w-[60vw] h-[330px] my-3">
      <p className="mb-2 p-2 text-xl text-white font-extralight bg-gray-500 bg-opacity-[0.5] rounded-xl">
        Three-Hourly Forecast
      </p>
      <Swiper
        grabCursor={true}
        loop={true}
        spaceBetween={5}
        pagination={true}
        modules={[Pagination]}
        className="flex justify-center items-center w-[100%] h-[100%]"
        breakpoints={{
          1502: {
            slidesPerView: 5,
          },
          1300: {
            slidesPerView: 4,
          },
          896: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 2,
          },
          588: {
            slidesPerView: 2,
          },
        }}
      >
        {dataHourly.map((forecast, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <FlipCardHourly
                temperature={
                  isCelsius
                    ? forecast.temperature_celsius
                    : forecast.temperature_fahrenheit
                }
                description={forecast.description}
                windSpeed={forecast.wind_speed}
                humidity={forecast.humidity}
                temp_min={
                  isCelsius
                    ? forecast.min_temperature_celsius
                    : forecast.min_temperature_fahrenheit
                }
                temp_max={
                  isCelsius
                    ? forecast.max_temperature_celsius
                    : forecast.max_temperature_fahrenheit
                }
                time={forecast.time}
                main_description={forecast.main_description}
                isCelsius={isCelsius}
                weatherIcon={forecast.weather_icon}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DailyForecast;

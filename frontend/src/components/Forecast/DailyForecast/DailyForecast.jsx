import React from "react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import FlipCardDaily from "../../FlipCardDaily/FlipCardDaily.jsx";

import { Swiper, SwiperSlide } from "swiper/react";

function DailyForecast({ dataDaily, sunrise, sunset, isCelsius }) {
  if (!dataDaily) {
    return (
      <div className="flex justify-center items-center text-white m-20">
        Loading...fetching Data
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-start w-[920px] h-[330px] my-3">
      <p className=" w-[230px] mb-1 text-xl p-2 text-center text-white font-extralight bg-gray-500 bg-opacity-[0.5] rounded-xl">
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
        {dataDaily.map((forecast, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <FlipCardDaily
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
                sunrise={forecast.sunrise}
                sunset={forecast.sunset}
                isCelsius={isCelsius}
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

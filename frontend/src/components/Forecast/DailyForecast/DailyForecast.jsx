import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./DailyForecast.module.css";

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";

// components
import FlipCard from "../../FlipCard/FlipCard.js";

export default function Slider() {
  const slides = Array.from({ length: 7 }, (_, index) => (
    <SwiperSlide key={index}>
      <FlipCard />
    </SwiperSlide>
  ));
  return (
    <div className="flex flex-col justify-center items-center h-[400px] w-[550px] my-3">
      <p className="text-xl my-2 underline text-white">Daily Forecast</p>
      <div className="flex h-[100%] w-[100%] my-2">
        <Swiper
          spaceBetween={20}
          pagination={true}
          modules={[Pagination, Mousewheel, Keyboard]}
          slidesPerView={3}
          grabCursor={true}
          mousewheel={true}
          keyboard={true}
          className="mySwiper"
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
}

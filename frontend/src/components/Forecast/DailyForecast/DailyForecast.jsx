import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./DailyForecast.module.css";
import "swiper/css/effect-coverflow";

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";

// components
import FlipCard from "../../FlipCard/FlipCard.jsx";

export default function Slider() {
  // const slides = Array.from({ length: 7 }, (_, index) => (
  //   <SwiperSlide key={index}>
  //     <FlipCard />
  //   </SwiperSlide>
  // ));
  return (
    <div className="flex flex-col justify-center items-center h-[400px] w-[700px]">
      <p className="text-xl my-3 underline text-white">Daily Forecast</p>
      <div className="flex justify-center items-center h-[100%] w-[100%] my-2">
        <Swiper
          spaceBetween={5}
          pagination={{ clickable: true }}
          modules={[Pagination, Mousewheel, Keyboard, Navigation]}
          grabCursor={true}
          mousewheel={true}
          navigation={true}
          slidesPerView={3}
          loop={true}
          keyboard={true}
          className="flex justify-center items-center h-[100%]"
        >
          <SwiperSlide>
            <FlipCard />
          </SwiperSlide>
          <SwiperSlide>
            <FlipCard />
          </SwiperSlide>
          <SwiperSlide>
            <FlipCard />
          </SwiperSlide>
          <SwiperSlide>
            <FlipCard />
          </SwiperSlide>
        </Swiper>
        {/* {slides} */}
      </div>
    </div>
  );
}

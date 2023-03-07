import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import PostEventHome from "../features/post/PostEventHome";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwitchHome() {
  const [isPostActive, setIsPostActive] = useState(true);
  const [isMapActive, setIsMapActive] = useState(false);
  const swiperRef = useRef(null);

  const handlePostClick = () => {
    setIsPostActive(true);
    setIsMapActive(false);
    swiperRef.current.slidePrev();
  };

  const handleMapClick = () => {
    setIsPostActive(false);
    setIsMapActive(true);
    swiperRef.current.slideNext();
  };

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    if (activeIndex === 0) {
      setIsPostActive(true);
      setIsMapActive(false);
    } else if (activeIndex === 1) {
      setIsPostActive(false);
      setIsMapActive(true);
    }
  };

  return (
    <>
      <div className="flex">
        <button
          className={`py-2 text-center w-[50%] font-bold ${
            isPostActive ? "text-black" : "text-[#B8B7B7]"
          }`}
          onClick={handlePostClick}
        >
          Post
        </button>
        <button
          className={`py-2 text-center w-[50%] font-bold ${
            isMapActive ? "text-black" : "text-[#B8B7B7]"
          }`}
          onClick={handleMapClick}
        >
          Map
        </button>
      </div>
      <div className="h-[3px] bg-white">
        <div
          className={`w-[50%] h-[100%] bg-black transition-transform duration-300 ${
            isMapActive ? "transform translate-x-full" : "transform translate-x-0"
          }`}
        ></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        <SwiperSlide>
          {/* <p className="m-6">Pending</p> */}
          <PostEventHome />
        </SwiperSlide>
        <SwiperSlide>
          {/* <p className="m-6">History</p> */}
          <PostEventHome />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

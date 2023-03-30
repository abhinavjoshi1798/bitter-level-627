import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function App({src}) {
  return (
    <div style={{marginTop:"10px",marginBottom:"20px"}}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide>
            <img src={src[0]} alt='img1' style={{borderRadius:"9px"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={src[1]} alt='img1' style={{borderRadius:"9px"}}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

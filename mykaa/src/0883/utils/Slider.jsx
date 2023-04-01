import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

export default function Slider({src}) {
  return (
    <div 
    style={{
      border: "1px solid grey",
      boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      backgroundColor: "lightpink",
      marginBottom: "10px",
      "--swiper-navigation-color": "#fff",
      "--swiper-navigation-size": "2rem",
    }}
    >
      <Swiper
        spaceBetween={15}
        slidesPerView={2.5}
        centeredSlides={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide>
            <img src={src[0]} alt='img1' style={{borderRadius:"9px"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={src[1]} alt='img1' style={{borderRadius:"9px"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={src[2]} alt='img1' style={{borderRadius:"9px"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={src[3]} alt='img1' style={{borderRadius:"9px"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={src[4]} alt='img1' style={{borderRadius:"9px"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={src[5]} alt='img1' style={{borderRadius:"9px"}}/>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

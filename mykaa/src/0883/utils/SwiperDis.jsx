import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
export default function App({src}) {
  return (
    <div style={{marginTop:"10px",marginBottom:"20px",border: "1px solid grey",
    boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    backgroundColor: "lightpink",
    marginBottom: "20px",
    "--swiper-navigation-color": "#fff",
    "--swiper-navigation-size": "2rem",}}>
      <Swiper
        spaceBetween={15}
        slidesPerView={1.2}
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

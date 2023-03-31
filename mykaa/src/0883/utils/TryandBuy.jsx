import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Grid, GridItem } from '@chakra-ui/react'
export default function Try({src}) {
  return (
    <div style={{marginTop:"20px",marginBottom:"10px",alignItems:"center",border: "1px solid grey",
    boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    backgroundColor: "lightpink",
    marginBottom: "20px",
    "--swiper-navigation-color": "#fff",
    "--swiper-navigation-size": "2rem",}}>
      <Swiper
         spaceBetween={10}
         slidesPerView={1.8}
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
            <img src={src[0]} alt='img1' style={{borderRadius:"9px 9px 9px 9px"}} width={"95%"}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={src[1]} alt='img1' style={{borderRadius:"9px 9px 9px 9px"}} width={"95%"}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

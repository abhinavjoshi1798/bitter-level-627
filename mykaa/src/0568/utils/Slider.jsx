import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination } from "swiper";
import { Image } from '@chakra-ui/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Slider = ({src}) => {
  return (
		<div>
			<Swiper
				modules={[Navigation, Pagination]}
				navigation={true}
				spaceBetween={30}
        pagination={{
          "clickable": true
        }}
				style={{
					width: "100%",
					height: "100%",
					"--swiper-navigation-color": "#ffffff",
					"--swiper-navigation-size": "2rem",
          "--swiper-pagination-color": "pink",
				}}
				loop={true}>
				{src.map((item, index) => {
          return (  
            <SwiperSlide key={index}>
              <Image src={item} alt={item} />
            </SwiperSlide>
          );
        })}
			</Swiper>
		</div>
  );
}

export default Slider

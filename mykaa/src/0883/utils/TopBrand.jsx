import React from 'react'
import { Box } from '@chakra-ui/react';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';

const TopBrand = ({src}) => {
  return (
    <div>
       <Swiper
       
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

      </Swiper>
    </div>
  )
}

export default TopBrand
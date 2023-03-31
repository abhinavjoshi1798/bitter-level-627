import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
const OnlyNykaCard = ({ src }) => {
  return (
    <div
      style={{
        border: "1px solid grey",
        boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        backgroundColor: "lightpink",
        marginBottom: "20px",
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size": "2rem",
      }}
    >
      <Swiper
        spaceBetween={5}
        slidesPerView={12}
        centeredSlides={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img
            src={src[0]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[1]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[2]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[3]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[4]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[5]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[6]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[7]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[0]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[1]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[2]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[3]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[4]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[5]}
            alt="img1"
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default OnlyNykaCard;

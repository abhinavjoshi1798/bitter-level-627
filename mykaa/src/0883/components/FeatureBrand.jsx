import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Button, Heading, Text } from "@chakra-ui/react";
import Header from './Header';

const FeatureBrand = ({ src }) => {
  return (
    <div style={{border:"1px solid yellow",backgroundColor:"white",marginTop:"20px"}}>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <div><Heading as={"h3"} fontSize={"xl"} marginTop={"10px"} marginBottom={"10px"}>Featured Brands</Heading></div> 
    </div>
    
    <div
      style={{
        border: "1px solid white",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
        backgroundColor: "white",
        marginBottom: "20px",
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size": "2rem",
        display:"flex",
        justifyContent:"space-evenly",
        textAlign:"center",
        margin:"auto",
    
      }}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView={6}
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
        style={{margin:"auto"}}
      >
        <SwiperSlide>
          <img
            src={src[0]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",margin:"auto",marginTop: "10px" }}
          />
          <Text fontSize={"xl"} color={"Red"}>Upto 50% Off</Text>
          <Text>For Butter Smooth Skin</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[1]}
            alt="img1"
            style={{  border: "1px solid grey",borderRadius:"10px",margin:"auto",marginTop: "10px"}}
          />
           <Text fontSize={"xl"} color={"Red"}>Upto 30% Off</Text>
          <Text>On SafeSun Sunscreen</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[2]}
            alt="img1"
            style={{  border: "1px solid grey",borderRadius:"10px",margin:"auto",marginTop: "10px"}}
          />
           <Text fontSize={"xl"} color={"Red"}>Upto 10% off</Text>
          <Text>NEW LAUNCH ALERT!</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[3]}
            alt="img1"
            style={{  border: "1px solid grey",borderRadius:"10px",margin:"auto",marginTop: "10px"}}
          />
           <Text fontSize={"xl"} color={"Red"}>Upto 20% Off</Text>
          <Text>Kajal On All Orders</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[4]}
            alt="img1"
            style={{  border: "1px solid grey",borderRadius:"10px",margin:"auto",marginTop: "10px"}}
          />
           <Text fontSize={"xl"} color={"Red"}>Upto 25% off</Text>
          <Text>Mini BodyWash on 499</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[5]}
            alt="img1"
            style={{  border: "1px solid grey",borderRadius:"10px",margin:"auto",marginTop: "10px"}}
          />
           <Text fontSize={"xl"} color={"Red"}>Upto 25% off</Text>
          <Text>Buy 2 Get 35% Off</Text>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default FeatureBrand;

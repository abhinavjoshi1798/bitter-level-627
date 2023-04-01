import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Button, Heading, Text } from "@chakra-ui/react";
import Header from './Header';

const NewNykaaCard = ({ src }) => {
  return (
    <div style={{border:"1px solid yellow",backgroundColor:"white"}}>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <div><Heading as={"h3"} fontSize={"xl"} marginTop={"10px"} marginBottom={"10px"}>New At Nyka</Heading></div>
    <div><Button bg={"red"} color={"white"}>View All</Button></div>
    
    </div>
    
    <div
      style={{
        border: "1px solid white",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
        backgroundColor: "lightpink",
        marginBottom: "20px",
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size": "2rem",
        display:"flex",
        justifyContent:"space-evenly",
        textAlign:"center",
        margin:"auto",
        marginBottom:"20px"
      }}
    >
      <Swiper
        spaceBetween={15}
        slidesPerView={7.5}
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
            style={{ border: "1px solid grey",borderRadius:"10px"}}
          />
          <Text fontSize={"xl"} color={"Black"}>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[1]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>Lancome L' Absolu Rouge Cream</Text>
          <Text>₹2,900</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[2]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>Lakme Absolute Explore Eye Shadow Palette - (For...)</Text>
          <Text>₹846</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[3]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>The Ordinary Sulphate 4% Cleanser (Shampoo)</Text>
          <Text>₹800</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[4]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>NYX Professional Makeup Jumbo Lash! Vegan False</Text>
          <Text>₹2,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[5]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>Bobbi Brown Natural Brow Shaper</Text>
          <Text>₹3,000</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[6]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>Huda Beauty Silk Balm Plumping Lip Balm</Text>
          <Text>₹1,750</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[7]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[8]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[9]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[10]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[11]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[12]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default NewNykaaCard;

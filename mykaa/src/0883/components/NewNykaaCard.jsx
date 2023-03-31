import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Button, Heading, Text } from "@chakra-ui/react";
import Header from './Header';

const NewNykaaCard = ({ src }) => {
  return (
    <div style={{border:"1px solid red"}}>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <div><Heading as={"h3"} fontSize={"xl"} marginTop={"10px"} marginBottom={"10px"}>New At Nyka</Heading></div>
    <div><Button>View All</Button></div>
    
    </div>
    
    <div
      style={{
        border: "1px solid grey",
        boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
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
        slidesPerView={8}
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

        style={{































        }}

      >
        <SwiperSlide>
          <img
            src={src[0]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
          <Text as={"h6"}>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[1]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
           <Text>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[2]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
           <Text>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[3]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
           <Text>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[4]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
           <Text>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[5]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
           <Text>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[6]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
           <Text>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[7]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
           <Text>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[8]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
           <Text>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[9]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
           <Text>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[10]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
           <Text>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[11]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
           <Text>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[12]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"10px",height: "250px"}}
          />
           <Text>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text>₹3,705</Text>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default NewNykaaCard;

import { Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const NykaaEveryday = ({src}) => {
  return (
    <div
      style={{
        border: "1px solid grey",
        backgroundColor: "lightblue",
        height: "auto",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <div style={{ border: "1px solid lightblue",height:"150px",width:"85%",margin:"auto",marginTop:"10px"}}>
        {/* <div></div>
        <div></div>
        <div></div> */}
        <img src="https://images-static.nykaa.com/uploads/2adda7a5-567a-4db1-b408-06c96be60287.jpg?tr=w-1200,cm-pad_resize" alt="" width={"100%"} />
      </div>
      <div style={{ border: "1px solid lightblue" ,height:"auto",marginTop:"10px",width:"100%",margin:"auto"}}>
      <div
      style={{
        border: "1px solid lightblue",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
        backgroundColor: "lightblue",
        marginBottom: "20px",
        "--swiper-navigation-color": "root.black",
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
        slidesPerView={5.8}
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
            style={{ border: "1px solid grey",borderRadius:"40%",height:"296px"}}
          />
          <Text fontSize={"xl"} color={"black"}>NEW L'Occitane Immortelle Double Cleansing Duo (For...)</Text>
          <Text >₹3,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[1]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"40%",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>Lancome L' Absolu Rouge Cream</Text>
          <Text>₹2,900</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[2]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"40%",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>Lakme Absolute Explore Eye Shadow Palette - (For...)</Text>
          <Text>₹846</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[3]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"40%",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>The Ordinary Sulphate 4% Cleanser (Shampoo)</Text>
          <Text>₹800</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[4]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"40%",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>NYX Professional Makeup Jumbo Lash! Vegan False</Text>
          <Text>₹2,705</Text>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={src[5]}
            alt="img1"
            style={{ border: "1px solid grey",borderRadius:"40%",height: "296px"}}
          />
           <Text fontSize={"xl"} color={"Black"}>Bobbi Brown Natural Brow Shaper</Text>
          <Text>₹3,000</Text>
        </SwiperSlide>
      </Swiper>
    </div>
      </div>
    </div>
  );
};
export default NykaaEveryday;

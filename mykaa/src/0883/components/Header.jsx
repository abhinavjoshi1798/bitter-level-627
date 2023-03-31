import React from "react";
import Slider from "../utils/Slider";
import { Box1 } from './../utils/Box1';
import SwiperDis from './../utils/SwiperDis';
import TopBrand from "./TopBrand";
import { Heading } from "@chakra-ui/react";
import Try from "../utils/TryandBuy";
import OnlyNykaCard from "./OnlyNykaCard";
import NykaBottom from "./NykaBottom";
import NewNykaaCard from "./NewNykaaCard";
const Header = () => {
  return (
    <div>
        <Heading as={"h3"} fontSize={"xl"} marginTop={"10px"} marginBottom={"5px"} >Best In Beauty</Heading>
      <Slider
        src={[
          "https://images-static.nykaa.com/uploads/79076aac-07a9-45c9-bded-cff65418afeb.jpg?tr=w-600,cm-pad_resize",
          "https://images-static.nykaa.com/uploads/fd34cb7e-f4c5-4ca0-9cca-029663178115.jpg?tr=w-600,cm-pad_resize",
          "https://images-static.nykaa.com/uploads/2500c937-1c58-44a7-8e94-64bacf6d8ed6.jpg?tr=w-600,cm-pad_resize",
          "https://images-static.nykaa.com/uploads/5b12728a-f6d3-46ca-a74e-2e85b53f73a8.jpg?tr=w-600,cm-pad_resize",
          "https://images-static.nykaa.com/uploads/3b17bec5-694f-4e29-9e7b-d01ae3168e65.jpg?tr=w-600,cm-pad_resize",
          "https://images-static.nykaa.com/uploads/d576da10-3a30-43ad-a452-e95a3a718de8.jpg?tr=w-600,cm-pad_resize",
        ]}
      />
      <Box1/>
      <Heading as={"h3"} fontSize={"xl"}>First Purchase App Offers</Heading>
      <SwiperDis
      src={[
        "https://images-static.nykaa.com/uploads/feec8cd8-5d60-4312-95e2-33125b7bace0.jpg?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/432c60a5-1140-484a-8b97-69ecfc416daa.jpg?tr=w-1200,cm-pad_resize",
      ]}
      />
      <Heading as={"h3"} fontSize={"xl"}>Top Brands</Heading>
      <TopBrand/>
      <Try
      src={[
        "https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg?tr=w-600,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/c7ae3973-167e-4ce1-b572-1364e1f5c2e2.jpg?tr=w-600,cm-pad_resize"
      ]}/>
      <Heading as={"h3"} fontSize={"xl"} marginTop={"10px"} marginBottom={"10px"}>Only At Nyka</Heading>
      <OnlyNykaCard src={[
        "https://images-static.nykaa.com/uploads/5703399c-2c21-4bd7-b3c9-7d68720597a9.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/701eab1e-5af1-4076-916f-51300aaa6b43.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/82af00ba-eb55-4bbb-a350-3aba58c464e2.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/bd9f2449-9b7f-42b0-b003-600ad1205ffa.png?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/437367ac-2f23-40eb-a964-96ec1289a042.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/a41d99e2-cf6a-49ec-8d1e-212d4b912e54.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/37e50d1a-2cae-4563-822a-4a8e37349dfb.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/59c59807-1bf9-4889-9f5b-6cddfab6872b.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/d8ba959a-8cdd-423f-81e0-3dabd873dbe2.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/59c59807-1bf9-4889-9f5b-6cddfab6872b.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/437367ac-2f23-40eb-a964-96ec1289a042.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/3a9747bf-b7c9-4507-81da-1b57c7dcc6ee.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/37e50d1a-2cae-4563-822a-4a8e37349dfb.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/37e50d1a-2cae-4563-822a-4a8e37349dfb.jpg?tr=w-85.71428571428571,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/37e50d1a-2cae-4563-822a-4a8e37349dfb.jpg?tr=w-85.71428571428571,cm-pad_resize"
        
      ]} />
      <NykaBottom />
      {/* <Heading as={"h3"} fontSize={"xl"} marginTop={"10px"} marginBottom={"10px"}>New At Nyka</Heading> */}
    <NewNykaaCard src={[
      "https://media.istockphoto.com/id/164505409/photo/red-lipstick.jpg?s=612x612&w=0&k=20&c=dnZ2e8AC3qH8FVStYzo-3MuU1XIXk-8xy63Hm-DhXbg=",
      "https://www.shutterstock.com/image-photo/beautiful-woman-lips-fashion-marsala-260nw-1213394821.jpg",
      "https://media.istockphoto.com/id/1145786076/photo/collection-of-lipsticks.jpg?s=612x612&w=0&k=20&c=B3y6f6vgTtzldfjgBszkbun_8QDQJ-TZEo2yB6BIZbc=",
      "https://media.istockphoto.com/id/477663679/photo/every-woman-has-a-favourite-shade.jpg?s=612x612&w=0&k=20&c=NGbtzP0bMTb23jPDdbF1I_X-3C6FYexUb_BKV4bRZU8=",
      "https://media.istockphoto.com/id/1190319693/photo/red-lipstick-swatch.jpg?s=612x612&w=0&k=20&c=e8tzhsZX05ULkWju0o11JnlZP1X1AY3aHppo9a2hpRk=",
      "https://media.istockphoto.com/id/925960984/photo/air-kiss-for-you-close-up-cropped-shot-of-femenine-gorgeous-charming-adorable-lady-with.jpg?s=612x612&w=0&k=20&c=DkujblO2wtYX-JGRQPTEsU9s-LmNWW5h_vx-StTQW4E=",
      "https://media.istockphoto.com/id/1151790560/photo/set-of-beautiful-lipsticks-on-pink-background.jpg?s=612x612&w=0&k=20&c=fDiVJwXg3zueLRqo8cCAny8pDYHa5tZ5Hpr5zdzb8lg=",
      "https://media.istockphoto.com/id/500306854/photo/lipstick-red.jpg?s=612x612&w=0&k=20&c=rj-Miex2QypJDbo0och-e5zC0r5AGfCo5Y6tPimaA28=",
      "https://media.istockphoto.com/id/1135955050/photo/cropped-photo-of-woman-with-bright-lipstick-isolated-on-red-background.jpg?s=612x612&w=0&k=20&c=r7Si3ncYM2IkV1GvX3rjoJOrmXdwITDuXIwKjlpeKsU=",
      "https://media.istockphoto.com/id/956733774/vector/lipstick-flat-design-beauty-icon-with-side-shadow.jpg?s=612x612&w=0&k=20&c=vwOxr84FW3H5-4_WoJJxK2T0sXPQUBWzwDPIDjy-EEc=",
      "https://media.istockphoto.com/id/148202316/photo/passion-network.jpg?s=612x612&w=0&k=20&c=AcScwoFoc5IQl2RAp34InqWNVwDFO4M4nNoyAexO2sE=",
      "https://media.istockphoto.com/id/184999805/photo/lipstick-kiss.jpg?s=612x612&w=0&k=20&c=kShu2umsESgqS_09S1y1jN8oDaQAUsAQywIvBsIDPPs=",
      "https://media.istockphoto.com/id/668812038/photo/colorful-lipstick.jpg?s=612x612&w=0&k=20&c=RNKgCBP06-8F3as6EplGOAG0h-6LWI3BOJZEZR9tHZk=",
      "https://media.istockphoto.com/id/479882136/photo/lipstick-is-melting-2.jpg?s=612x612&w=0&k=20&c=f_bJyi5hm1EqDrW_SjlZ0xhOTdj-M7PEEuZ82FtTlx4=",
      "https://media.istockphoto.com/id/924985612/photo/make-up-artist-is-working-with-face-of-gorgeous-model-cosmetic-manicure-and-make-up.jpg?s=612x612&w=0&k=20&c=g0dQePCZlL_lAQ20tmkKlHS089SyxbtziJVVpaoLoz4="
    ]}/>
    </div>
  );
};

export default Header;
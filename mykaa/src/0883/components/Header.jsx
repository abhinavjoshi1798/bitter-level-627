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
import TopPayDeals from "./TopPayDeals";
import FeatureBrand from "./FeatureBrand";
import NykaaEveryday from './NykaaEveryday';
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
    <TopPayDeals src={[
      "https://images-static.nykaa.com/uploads/147ea0ea-52bb-46ab-9f18-9cce4429815f.jpg?tr=w-240,cm-pad_resize",
      "https://images-static.nykaa.com/uploads/a1b91391-8a90-4d91-9f34-d76b74af5030.jpg?tr=w-240,cm-pad_resize",
      "https://images-static.nykaa.com/uploads/e04ac642-8800-4ca7-a0f9-2c3683cd8fd5.jpg?tr=w-240,cm-pad_resize",
      "https://images-static.nykaa.com/uploads/d24e9fa0-8ec0-4cea-a8eb-74f416a9e7ff.jpg?tr=w-240,cm-pad_resize",
      "https://images-static.nykaa.com/uploads/8848780a-ce6a-4366-b00e-e99ebff4ecb2.jpg?tr=w-240,cm-pad_resize",
      "https://images-static.nykaa.com/uploads/e2bd34b7-8382-488b-8b15-f9a424a13d8d.jpg?tr=w-240,cm-pad_resize",
      "https://images-static.nykaa.com/uploads/a42109ab-2554-4bfd-9589-947b2af4b9f9.jpg?tr=w-240,cm-pad_resize",
      "https://images-static.nykaa.com/uploads/d5bde41e-f6d3-41d2-b21b-571fee079e07.jpg?tr=w-240,cm-pad_resize",
      "https://images-static.nykaa.com/uploads/1e0fc3a8-7b9d-47b4-a080-da6033c8dd6c.jpg?tr=w-240,cm-pad_resize",
      "https://images-static.nykaa.com/uploads/5acd78aa-50a8-4d82-9217-dbdf95617381.jpg?tr=w-240,cm-pad_resize",
      ]} />
      <FeatureBrand src={[
        "https://images-static.nykaa.com/creatives/9972c942-45f1-4110-bf12-3f71a1cb09f7/default.png?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/creatives/c5c53f4e-91e4-4599-811a-02524f39b8cf/default.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/creatives/eb48d59a-3cb7-4320-af76-252d050307ac/default.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/creatives/65456720-a185-41b1-934f-ed62747fe254/default.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/creatives/ae244539-41ce-4da5-9f95-360b4cbebeef/default.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/creatives/35e126fa-a31f-46b3-a159-1005b716eeef/default.jpg?tr=w-240,cm-pad_resize"
      ]}/>
      <NykaaEveryday src={[
        "https://images-static.nykaa.com/uploads/dc519068-5338-411a-aea9-b32697f73a19.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/36223868-ebf9-4883-bb74-dc383f09cb2c.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/282435dd-69fc-4235-a44d-d6c2f9e21e01.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/38438c13-5f91-4d33-9d6a-9ab564ee8131.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/1e110d68-fa12-40ee-ae42-c6301adb5e63.jpg?tr=w-240,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/2a719e3d-d12e-4eb5-9aa5-b7b8d41e86a6.jpg?tr=w-240,cm-pad_resize"
      ]} />
    </div>
  );
};

export default Header;
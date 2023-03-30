import React from "react";
import Slider from "../utils/Slider";
import { Box1 } from './../utils/Box1';
import SwiperDis from './../utils/SwiperDis';
import TopBrand from './../utils/TopBrand';

const Header = () => {
  return (
    <div>
        <h3>Best In Beauty</h3>
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
      <h1>First Purchase App Offers</h1>
      <SwiperDis
      src={[
        "https://images-static.nykaa.com/uploads/79076aac-07a9-45c9-bded-cff65418afeb.jpg?tr=w-600,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/fd34cb7e-f4c5-4ca0-9cca-029663178115.jpg?tr=w-600,cm-pad_resize",
      ]}
      />
      <h1>Top Brands</h1>
      <TopBrand 
       src={[
        "https://images-static.nykaa.com/uploads/159e9f1f-b269-4463-a35e-be12649d58d0.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/a2b274ce-d644-479f-a62b-208c8b91a967.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/05fa1077-9456-4c98-af8e-7f246b893c2e.jpg?tr=w-400,cm-pad_resize",
      ]}
      
      />
    </div>
  );
};

export default Header;
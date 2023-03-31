import React from "react";
import { Flex, Grid } from "@chakra-ui/react";
import TopBrandCard from "./TopBrandCard";
const data = [
  {
    img: "https://images-static.nykaa.com/uploads/60002bd3-c23a-4d35-ae4b-2727586003db.jpg?tr=w-400,cm-pad_resize",
    title: "Ultra-Nourishing Body Creams!",
    text: "3 Piece Selfcare Kit On ₹1750",
  },
  {
    img: "https://images-static.nykaa.com/uploads/9675694b-a40b-41a6-ab1b-098482523a6d.jpg?tr=w-400,cm-pad_resize",
    title: "Up To 25% Off",
    text: "New Hyaluronic Acid Range",
  },
  {
    img: "https://images-static.nykaa.com/uploads/b7aca710-4441-4347-93b4-a18cf831601f.jpg?tr=w-400,cm-pad_resize",
    title: "Up To 20% Off",
    text: "Leave Kisses, Not Stains",
  },
  {
    img: "https://images-static.nykaa.com/uploads/ce692cbb-a464-4bc1-b628-35726bdeca00.jpg?tr=w-400,cm-pad_resize",
    title: "Upto 30% Off + Free Lipstick",
    text: "Worth ₹249 on ₹699",
  },
  {
    img: "https://images-static.nykaa.com/uploads/9113cfb0-0059-4247-9412-558519c6e822.jpeg?tr=w-400,cm-pad_resize",
    title: "New Launch! Powerful Oil for Brittle Hair",
    text: "Free Paddle brush on ₹1859+",
  },
  {
    img: "https://images-static.nykaa.com/uploads/1fb201dd-d6d4-4030-b9ff-28e7f72f7164.jpg?tr=w-400,cm-pad_resize",
    title: "Refreshes Hair Between Washes",
    text: "Flat 20% Off + Combos @25% Off",
  },
  {
    img: "https://images-static.nykaa.com/uploads/a3eacb1a-7cbb-4898-a0bc-7518a235cded.jpg?tr=w-400,cm-pad_resize",
    title: "Minis starting at ₹1150",
    text: "+ Exciting Offers on Purchase!",
  },
  {
    img: "https://images-static.nykaa.com/uploads/bd61e53b-cd4d-4fb5-984e-1c31d9e05911.jpg?tr=w-400,cm-pad_resize",
    title: "Global Bestsellers",
    text: "That Make For A Perfect Gift",
  },
];
const TopBrand = () => {
  return (
    <div>
      <Grid
        // border={"1px solid blue"}
        // w='100%'
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={2}
        rowGap={6}
        mt={8}
      >
        {data?.map(
          (item, idx) =>
            !(idx == data.length - 1 || idx == data.length - 2) && (
              <TopBrandCard key={item.id} {...item} />
            )
        )}
      </Grid>
      <Flex w="100%" flexDirection={{ base: "column", md: "row" }} justifyContent={'center'}
       m='8'
      >
        {data?.map(
          (item, idx) =>
            (idx == data.length - 1 || idx == data.length - 2) && (
              <TopBrandCard key={item.id} {...item} />
            )
        )}
      </Flex>
    </div>
  );
};

export default TopBrand;

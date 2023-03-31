import { Box,  Heading, Text } from '@chakra-ui/react'
import React from 'react'
const TopBrandCard = ({img,title,text}) => {
  return (
    <div>
        <Box margin={"auto"} border={"1.5px solid grey"} w={"93%"} gap={"8px"} borderRadius={"7px 7px 7px 7px"} boxShadow={"base"}>
            <img src={img} alt="" width={"100%"}/>
            <Box marginLeft={"10px"}>
            <Heading fontSize={"xl"} color={"red"}>{title}</Heading>
            <Text fontSize={"l"} color={"grey"}>{text}</Text>
            </Box>
        </Box>
    </div>
  )
}
export default TopBrandCard
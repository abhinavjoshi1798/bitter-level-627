import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const NykaBottom = () => {
  return (
    <Box margin={"auto"} border={"1.5px solid grey"} w={"95%"} gap={"8px"} borderRadius={"7px 7px 7px 7px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}   display={"flex"} justifyContent={"space-evenly"} textAlign={"center"} bg={"lightPink"} alignContent={"center"} marginBottom={"20px"}>
            <Box marginTop={"10px"}>
            <img src="https://images-static.nykaa.com/creatives/00771b32-6dd2-4495-b461-f1e7c16e0873/default.jpg?tr=w-240,cm-pad_resize" alt="" width={"100%"} />
            <Box marginLeft={"10px"}>
            <Heading fontSize={"xl"} color={"red"}>Flat 10% Off</Heading>
            <Text fontSize={"l"} color={"grey"}>On Bestsellers!</Text>
            </Box>
            
            </Box>
            <Box marginTop={"10px"}>
            <img src="https://images-static.nykaa.com/creatives/0a3cf7a9-db95-4b9f-8687-d9183fa572e3/default.png?tr=w-240,cm-pad_resize" alt="" width={"100%"}/>
            <Box marginLeft={"10px"}>
            <Heading fontSize={"xl"} color={"red"}>Flat 10% Off</Heading>
            <Text fontSize={"l"} color={"grey"}>On Bestsellers!</Text>
            </Box>
            
            </Box>
            <Box marginTop={"10px"}>
            <img src="https://images-static.nykaa.com/creatives/e6095959-fdb8-44d0-ba91-6c20031f1be1/default.jpg?tr=w-240,cm-pad_resize" alt="" width={"100%"}/>
            <Box marginLeft={"10px"}>
            <Heading fontSize={"xl"} color={"red"}>Upto 50% off</Heading>
            <Text fontSize={"l"} color={"grey"}>Summer T-Shirt Bras</Text>
            </Box>
            
            </Box>
            <Box marginTop={"10px"}>
            <img src="https://images-static.nykaa.com/creatives/7d89e49d-789a-4487-b35f-8ab97d4baaa5/default.jpg?tr=w-240,cm-pad_resize" alt="" width={"100%"}/>
            <Box marginLeft={"10px"}>
            <Heading fontSize={"xl"} color={"red"}>Upto 20% Off</Heading>
            <Text fontSize={"l"} color={"grey"}>Free Shampoo on ₹799</Text>
            </Box>
            
            </Box>
            <Box marginTop={"10px"}>
            <img src="https://images-static.nykaa.com/creatives/a3acf4fa-c2e0-44b8-ae11-da106678acd0/default.png?tr=w-240,cm-pad_resize" alt="" width={"100%"}/>
            <Box marginLeft={"10px"}>
            <Heading fontSize={"xl"} color={"red"}>Full Size</Heading>
            <Text fontSize={"l"} color={"grey"}>Product on ₹5500</Text>
            </Box>
            
            </Box>
           
        </Box>
  )
}

export default NykaBottom

import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Image } from '@chakra-ui/react';

 export function Box1() {
  
    return (
     <Box  marginTop="10px" marginBottom="25px" display={"flex"} justifyContent="space-evenly" gap={"10px"} alignContent="center">
      <Box  w={"50%"} >
        <img src="https://images-static.nykaa.com/uploads/0f4a8148-77b5-4eb0-9cdc-0c6671808ee9.jpg?tr=w-600,cm-pad_resize" alt="" width={"100%"}/>
      </Box>
      <Box   w={"50%"}>
        <img src="https://images-static.nykaa.com/uploads/54653d4b-552f-4f80-9526-b69a25f78a1a.jpg?tr=w-600,cm-pad_resize" alt="" width={"100%"} />
      </Box>
     </Box>
    )
  }
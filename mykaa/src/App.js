import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {
  return (
    <Box m="0" 
     background={useColorModeValue("#121212","white")}
     h='100vh'
     color={useColorModeValue("white","black")}
    >
       App
    </Box>
  );
}

export default App;

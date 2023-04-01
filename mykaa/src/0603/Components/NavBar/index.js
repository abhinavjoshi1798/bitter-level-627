import { Box } from "@chakra-ui/react";
import HeaderNav from "./HeaderNav";
import MainNav from "./MainNav";
import BottomNav from "./BottomNav";


const Navbar = () => {
    return (
      <Box  >
        <HeaderNav/>
        <MainNav/>
        <BottomNav/>
      </Box>
    );
  };
  
  export default Navbar;
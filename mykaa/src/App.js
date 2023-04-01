import { Container, useColorModeValue } from "@chakra-ui/react";
import MainRoute from "./Routes/MainRoute";
import MainNav from "./0603/Components/NavBar/MainNav";
import Footer from "./0603/Components/Footer/Footer";
function App() {
  return (
    <Container
      // background={useColorModeValue("root.black", "#f3f3f3")}
      // color={useColorModeValue("root.white", "root.black")}
      maxW={"container.2xl"}
    >
      {/* // navbar */}
      <MainNav/>
      <MainRoute />
      {/* // footer */}
      <Footer/>
    </Container>
  );
}
export default App;

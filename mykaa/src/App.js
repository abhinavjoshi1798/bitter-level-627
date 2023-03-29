import { Container, useColorModeValue } from "@chakra-ui/react";
import MainRoute from "./Routes/MainRoute";
function App() {
	return (
		<Container
			background={useColorModeValue("root.black", "#f3f3f3")}
      color={useColorModeValue("root.white", "root.black")}
			maxW={"container.2xl"}>
			<MainRoute />
		</Container>
	);
}
export default App;
/* sbatrtaudkd**/

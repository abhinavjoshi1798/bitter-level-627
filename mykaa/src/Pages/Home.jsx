import { Container } from "@chakra-ui/react";
import React from "react";

const Home = () => {
	React.useEffect(() => {
		document.title = "Home";
	}, []);
	return (
		<>
			<Container maxW={{ base: "100%", md: "90%", lg: "72%" }} mx='auto'>
				home
			</Container>
		</>
	);
};

export default Home;

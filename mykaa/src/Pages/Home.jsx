import { Container } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../Redux/ProductReducer/action";

const Home = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		document.title = "Home";
		dispatch(getProduct())
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

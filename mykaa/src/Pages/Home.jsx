import { Container } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../Redux/ProductReducer/action";
import HomePage from "../0603/Components/HomePage";

const Home = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		document.title = "Home";
		dispatch(getProduct())
	}, []);
	return (
		<>
			<Container maxW={{ base: "100%", md: "90%", lg: "100%" }} mx='auto'>
				<HomePage/>
			</Container>
		</>
	);
};
export default Home;

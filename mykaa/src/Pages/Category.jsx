import { Container } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryMain from "../0568/components/CategoryMain";
import Inventory from "../0568/components/Inventory";
import { getProduct } from "../Redux/ProductReducer/action";

const Category = () => {
	const { products } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	React.useEffect(() => {
		document.title = "Category";
		dispatch(getProduct());
	}, []);
	console.log("👻 ~ file: Category.jsx:9 ~ Category ~ data:", products);
	return (
		<>
			<Container maxW={{ base: "100%", md: "90%", lg: "72%" }} mx='auto'>
				<CategoryMain />
			</Container>
			<Inventory />
		</>
	);
};

export default Category;

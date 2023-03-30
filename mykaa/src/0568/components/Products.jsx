import { Grid } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProduct } from "../../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard.tsx";
const Products = () => {
	const { products, loading, error } = useSelector((state) => state.products);
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();
	const dispatch = useDispatch();
	const categoryParamas = {
		params: {
			category_values: searchParams.getAll("category_values"),
			 brand_name: searchParams.getAll("brand_name"),
			_sort: searchParams.get("order") && "price",
			_order: searchParams.get("order"),
		},
	};
	React.useEffect(() => {
		document.title = "Category";
		dispatch(getProduct(categoryParamas));
	}, [location.search]);
	// console.log("👻 ~ file: Category.jsx:9 ~ products ~ data:", products);
	// console.log(location.search);
	return loading ? (
		<h1>Loading...</h1>
	) : error ? (
		<h1>Something is wrong</h1>
	) : (
		<Grid
			// border={"1px solid blue"}
			// w='100%'
			templateColumns={{
				base: "repeat(1, 1fr)",
				md: "repeat(2, 1fr)",
				lg: "repeat(3, 1fr)",
			}}
			gap={2}
			rowGap={6}
			mt={8}>
			{products?.map(
				(item, idx) =>
					item.id !== "0z5ON4w" && (
						<ProductCard key={item.id} {...item} />
					)
			)}
		</Grid>
	);
};

export default Products;

import React from "react";
import Inventory from "../0568/components/Inventory";
const Category = () => {
	React.useEffect(() => {
		document.title = "Category";
	}, []);
	return (
		<>
			<Inventory />
		</>
	);
};

export default Category;

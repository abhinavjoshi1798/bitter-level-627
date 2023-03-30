import { Container, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

// import Shopping from "../utils/Shopping";
import SideBar from "../utils/SideBar";
import CategoryMain from "./CategoryMain";
import Products from "./Products";

const Inventory = () => {
	return (
		<div>
			<Container maxW={{ base: "100%", md: "90%", lg: "72%" }} mx='auto'>
				<CategoryMain />
				<Stack
					direction={{ base: "column", md: "row", lg: "row" }}
					width={{ base: "100%", md: "100%", lg: "100%" }}
					mx='auto'
					space={8}
					align={"flex-start"}>
					<Stack
						// position={"sticky"}
						// top={"10"}
						// border='1px solid green'
						zIndex={1}
						width={{ base: "100%", md: "40%", lg: "20rem" }}
						height={"full"}
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"flex-start"}
						mr={2}
						pt='8'
						>
						<SideBar />
					</Stack>

					<Stack
					 width={{ base: "100%", md: "65%", lg: "75%" }}
					//  border='1px solid red'
					>
						<Products />
					</Stack>
				</Stack>
			</Container>
		</div>
	);
};

export default Inventory;

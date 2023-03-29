import {
	Container,
	HStack,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

// import Shopping from "../utils/Shopping";
import SideBar from "../utils/SideBar";

const Inventory = () => {
	return (
		<div>
			<Container maxW={{ base: "100%", md: "90%", lg: "72%" }} mx='auto'>
				<Stack
					direction={{ base: "column", md: "row", lg: "row" }}
					width={{ base: "100%", md: "100%", lg: "100%" }}
					mx='auto'
					space={8}
					align={"flex-start"}>
					<Stack
						// border='1px solid green'
						width={{ base: "100%", md: "40%", lg: "40%" }}
						height={"full"}
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"flex-start"}
						mr={8}
						// bg={useColorModeValue("white", "black")}
						p={4}>
						<SideBar />
					</Stack>

					<Stack width={"100%"}>
						{/* <Shopping /> */}
					</Stack>
				</Stack>
			</Container>
		</div>
	);
};

export default Inventory;

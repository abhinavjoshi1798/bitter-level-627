import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
const Bredcrumbs = () => {
	const navigate = useNavigate();
	return (
		<div>
			<Breadcrumb
				color='green.600'
				spacing='1.2rem'
				separator={
					<TriangleDownIcon
						fontSize='0.7em'
						transform='rotate(-90deg)'
						color='green.600'
					/>
				}
				fontWeight='semibold'
				fontSize='0.9rem'
				mb='1.5rem'>
				<BreadcrumbItem>
					<BreadcrumbLink onClick={() => navigate("/")}>
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink>Inventory</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</div>
	);
};

export default Bredcrumbs;

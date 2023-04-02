import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
const Bredcrumbs = () => {
	const navigate = useNavigate();
	return (
		<div>
			<Breadcrumb
				mt='2'
				// border='1px solid red'
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
				<BreadcrumbItem
					fontSize='0.9rem'
					fontWeight='semibold'
					color='green.600'
					_hover={{
						textDecoration: "none",
						cursor: "pointer",
						color: "green.700",
						background: "none",
					}}
					onClick={() => navigate("/")}>
					<BreadcrumbLink onClick={() => navigate("/")}>
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem
					ml='-14'
					isCurrentPage
					fontSize='0.9rem'
					fontWeight='semibold'
					color='green.600'
					_hover={{
						textDecoration: "none",
						cursor: "pointer",
						color: "green.700",
						background: "none",
					}}>
					<BreadcrumbLink>Inventory</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</div>
	);
};

export default Bredcrumbs;

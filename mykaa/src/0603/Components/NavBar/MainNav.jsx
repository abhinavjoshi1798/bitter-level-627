import {
	Box,
	Flex,
	IconButton,
	useDisclosure,
	Image,
	InputGroup,
	InputLeftElement,
	Input,
	Button,
	useToast,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon, Search2Icon } from "@chakra-ui/icons";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import nyka from "../../pic/nykapng.png";

const Links = [
	"Categories",
	"Brands",
	"Luxe",
	"Nykaa Fashion",
	"Beauty Advice",
];
const NavLink = ({ children }) => {
  const navigate = useNavigate();
	return (
		<Box
			fontSize='14px'
			fontFamily={"Inter,sans-serif"}
			fontWeight={500}
			_hover={{
				textDecoration: "underline",
				cursor: "pointer",
				color: "#fb94bc",
			}}
			onClick={() =>
				children === "Categories"
					? navigate(`/category-home`)
					: navigate(`/products`)
			}
			textTransform='uppercase'>
			{children}
		</Box>
	);
};

function MainNav() {
	const {name} = useSelector((state) => state.products);
	const navigate = useNavigate();
	return (
		<>
			<Flex
				justifyContent='space-evenly'
				borderBottom={"1px solid grey"}
				m='2'
				py='2'>
				<Flex justifyContent='space-evenly' gap='5'>
					<Box paddingTop='5'>
						<IconButton
							size={"md"}
							aria-label={"Open Menu"}
							display={{ md: "none" }}
						/>
					</Box>

					<Box
						border={"0px solid blue"}
						display='flex'
						alignItems={"center"}>
						<Link to={"/"}>
							<Image src={nyka} alt='NykaaLogo' width={"100px"} />
						</Link>
					</Box>
					<Flex
						display={{ base: "none", md: "flex" }}
						justifyContent='center'
						alignItems={"center"}
						gap='3'>
						{Links.map((link) => (
							<NavLink key={link}>{link}</NavLink>
						))}
					</Flex>
				</Flex>

				<Flex
					justifyContent={"space-evenly"}
					gap={5}
					alignItems='center'>
					<InputGroup
						display={{ base: "none", xl: "flex", md: "flex" }}>
						<InputLeftElement
							pointerEvents='none'
							children={<Search2Icon color='gray.300' />}
						/>
						<Input type='tel' placeholder='Search on Nykaa' />
					</InputGroup>

					<Button
					onClick={() => navigate("/login")}
						backgroundColor={"#fc2779"}
						color='white'
						_hover={{
							backgroundColor: "#FC2779",
							color: "#FFFFFF",
						}}>
						{!name ? "Login" : name}
					</Button>

					<Link to={"/products/cart"}>
						{" "}
						<HiOutlineShoppingBag size={30} />
					</Link>
				</Flex>
			</Flex>

			<Flex display={{ md: "none" }}>
				{Links.map((link) => (
					<Flex
						key={link}
						margin='auto'
						justifyContent={"center"}
						marginTop='5'
						fontSize='14px'
						fontFamily={"Inter,sans-serif"}
						textTransform='uppercase'>
						{link}
					</Flex>
				))}
			</Flex>
		</>
	);
}

export default MainNav;

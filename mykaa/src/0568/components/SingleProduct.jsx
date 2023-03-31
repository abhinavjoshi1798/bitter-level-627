import React from "react";
import {
	Container,
	SimpleGrid,
	Image,
	Flex,
	Heading,
	Text,
	Stack,
	StackDivider,
	Icon,
	useColorModeValue,
	Box,
	Button,
	ButtonGroup,
} from "@chakra-ui/react";
import {
	IoAnalyticsSharp,
	IoLogoBitcoin,
	IoSearchSharp,
} from "react-icons/io5";
import { BiRupee } from "react-icons/bi";
import { singleData } from "../../Redux/ProductReducer/action";
import { useParams } from "react-router-dom";
const Feature = ({ text, icon, iconBg }) => {
	return (
		<Stack direction={"row"} align={"center"}>
			<Flex
				w={8}
				h={8}
				align={"center"}
				justify={"center"}
				rounded={"full"}
				bg={iconBg}>
				{icon}
			</Flex>
			<Text fontWeight={600}>{text}</Text>
		</Stack>
	);
};

export default function SingleProduct() {
	const [data, setData] = React.useState([{ name: "loading..." }]);
	const [quantity, setQuantity] = React.useState(1);
	const { id } = useParams();

	React.useEffect(() => {
		singleData(id).then((res) => {
			setData(res);
		});
	}, [id]);
	const url = data?.media?.[0];
	const [image, setImage] = React.useState("");
	const [show, setShow] = React.useState(false);
	const handleClick = (e) => {
		setImage(e.target.src);
		setShow(true);
	};
	return (
		<Container maxW={"6xl"} py={12} border='1px solid red' mt='8'>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
				<Flex flexDirection='column' alignItems='center'>
					<Image
						w={{ base: "100%", md: "80%" }}
						rounded={"md"}
						alt={"feature image"}
						src={
							show
								? image
								: url
								? url.url
								: "https://media2.giphy.com/media/2uJ0EhZnMAMDe/giphy.gif"
						}
						objectFit={"cover"}
					/>

					<Flex w='100%' justifyContent={"space-between"} mt='8'>
						{data?.media?.map((item, idx) => {
							return (
								(idx === 0 ||
									idx === 3 ||
									idx === 4 ||
									idx === 5) && (
									<Image
										cursor={"pointer"}
										key={idx}
										w='20%'
										rounded={"md"}
										alt={"feature image"}
										src={
											data
												? item.url
												: "https://media2.giphy.com/media/2uJ0EhZnMAMDe/giphy.gif"
										}
										objectFit={"cover"}
										boxShadow='0 0 10px 0 rgba(0,0,0,0.2)'
										onClick={handleClick}
									/>
								)
							);
						})}
					</Flex>
				</Flex>
				<Stack spacing={4} mt='14' border='1px solid red'>
					<Text
						textTransform={"uppercase"}
						color={"blue.400"}
						fontWeight={600}
						fontSize={"sm"}
						bg={useColorModeValue("blue.50", "blue.900")}
						p={2}
						alignSelf={"flex-start"}
						rounded={"md"}>
						{data.brand_name}
					</Text>
					<Heading fontSize={{ base: "2xl", sm: "4xl", md: "3xl" }}>
						{data?.name}
					</Heading>
					<Text color={"gray.500"} fontSize={"lg"}>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore
					</Text>
					<Stack spacing={8}>
						<Feature
							icon={
								<Icon
									as={BiRupee}
									color={"green.500"}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue("green.100", "green.900")}
							text={data.price}
						/>
						<Feature
							icon={
								<Icon
									as={IoAnalyticsSharp}
									color={"yellow.500"}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue(
								"yellow.100",
								"yellow.900"
							)}
							text={"Business Planning"}
						/>

						<Feature
							icon={
								<Icon
									as={IoSearchSharp}
									color={"purple.500"}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue(
								"purple.100",
								"purple.900"
							)}
							text={"Market Analysis"}
						/>
						<Flex
							alignItems='center'
							justifyContent={"space-between"}
              >
							<Box>
								<ButtonGroup
									size='md'
									isAttached
									display='flex'
									alignItems='center'>
									<Button
										isDisabled={quantity === 1}
										colorScheme={"red"}
										onClick={() =>
											setQuantity(quantity - 1)
										}>
										-
									</Button>
									<Text mx='3'>{quantity}</Text>
									<Button
										colorScheme={"green"}
										onClick={() =>
											setQuantity(quantity + 1)
										}>
										+
									</Button>
								</ButtonGroup>
							</Box>
							<Button colorScheme='green' ml='4' w='100%'>
								Add to Cart
							</Button>
						</Flex>
					</Stack>
				</Stack>
			</SimpleGrid>
		</Container>
	);
}

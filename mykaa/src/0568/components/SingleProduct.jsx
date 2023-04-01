import React from "react";
import {
	Container,
	SimpleGrid,
	Image,
	Flex,
	Heading,
	Text,
	Stack,
	useColorModeValue,
	Box,
	Button,
	ButtonGroup,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
	Tooltip,
} from "@chakra-ui/react";
import { addToCart, singleData } from "../../Redux/ProductReducer/action";
import { useParams } from "react-router-dom";
import { Rating } from "./ProductCard.tsx";
import { useDispatch } from "react-redux";
import Offers from "../utils/Offers.tsx";
export default function SingleProduct() {
	const [data, setData] = React.useState([{ name: "loading..." }]);
	const [image, setImage] = React.useState("");
	const [show, setShow] = React.useState(false);
	const [show2, setShow2] = React.useState(false);
	const dispatch = useDispatch();
	const [quantity, setQuantity] = React.useState(1);
	const { id } = useParams();
	React.useEffect(() => {
		document.title = "Product Details";
		singleData(id).then((res) => {
			setData(res);
		});
	}, [id]);
	const url = data?.media?.[0];
	const handleClick = (e) => {
		setImage(e.target.src);
		setShow(true)
	};
	const handleCart = () => {
		dispatch(addToCart(id, { quantity }));
		setShow2(true);
	};

	return (
		<>
			<Container
				maxW={"container.xl"}
				py={8}
				// border='1px solid red'
				boxShadow={"xl"}
				mt='8'
				// bg={useColorModeValue("root.pink.50", "gray.800")}
			>
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
							transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
						/>

						<Flex w='100%' justifyContent={"space-between"} mt='8'>
							{data?.media?.map((item, idx) => {
								return (
									(idx === 0 ||
										idx === 3 ||
										idx === 4 ||
										idx === 5) && (
										<Image
											border={
												image === item.url
													? "2px solid orange"
													: "none"
											}
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
					<Stack
						spacing={4}
						mt='14'
						// border='1px solid red'
						// boxShadow={"lg"}
						h='auto'
						p='4'
						bg={useColorModeValue("white", "gray.800")}>
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
						<Heading
							fontSize={{ base: "2xl", sm: "4xl", md: "3xl" }}>
							{data?.name}
						</Heading>
						<Text color={"gray.500"} fontSize={"lg"}>
							{url ? data?.offers[0]?.description : "lorem"}
						</Text>
						<StatGroup flexDirection={"column"}>
							<Stat>
								<StatNumber fontSize={"4xl"}>
									£{data?.price}
								</StatNumber>
								<Rating
									rating={data?.rating}
									numReviews={data?.rating_count}
								/>
								<StatHelpText mt='4'>
									Package Size {data?.pack_size}
								</StatHelpText>
							</Stat>
							<StatGroup flexDirection={"row"} w={"60%"} my='4'>
								<Stat>
									<StatLabel>Popularity</StatLabel>
									<StatNumber>
										{data?.tracking_metadata?.popularity.toFixed(
											2
										)}
										%
									</StatNumber>
									<StatHelpText>
										<StatArrow type='increase' />
										{data?.tracking_metadata?.es_score.toFixed(
											2
										) * 2}
										%
									</StatHelpText>
								</Stat>
								<Stat>
									<StatLabel>Review</StatLabel>
									<StatNumber>
										{data?.star_rating_percentage}%
									</StatNumber>
									<StatHelpText>
										<StatArrow type='decrease' />
										{(
											(data?.star_rating_percentage * 2) /
											3
										).toFixed(2)}
										%
									</StatHelpText>
								</Stat>
							</StatGroup>
						</StatGroup>

						<Flex
							alignItems='center'
							justifyContent={"space-between"}>
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
							<Tooltip
								label={
									!show
										? "Added to cart"
										: "Item already in cart"
								}
								bg='white'
								placement={"top"}
								color={"gray.800"}
								fontSize={"1em"}>
								<Button
									colorScheme='green'
									ml='4'
									w='100%'
									onClick={handleCart}
									isDisabled={show2}>
									Add to Cart
								</Button>
							</Tooltip>
						</Flex>
					</Stack>
				</SimpleGrid>
			</Container>
			<Offers offers={data?.offers} />
		</>
	);
}

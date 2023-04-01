import React from "react";
import {
	Flex,
	Box,
	Badge,
	useColorModeValue,
	Code,
	Button,
	Image,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


interface RatingProps {
	rating: number;
	numReviews: number;
}

export function Rating({ rating, numReviews }: RatingProps) {
	return (
		<Box
			display='flex'
			alignItems='center'
			mt={numReviews === 1 ? "0.3rem" : "3"}>
			{Array(5)
				.fill("")
				.map((_, i) => {
					const roundedRating = Math.round(rating * 2) / 2;
					if (roundedRating - i >= 1) {
						return (
							<BsStarFill
								key={i + Math.random()}
								style={{ marginLeft: "1" }}
								// color={i < rating ? 'green.500' :"green.300"}
							/>
						);
					}
					if (roundedRating - i === 0.2) {
						return (
							<BsStarHalf
								key={i + Math.random()}
								style={{ marginLeft: "1" }}
							/>
						);
					}
					return (
						<BsStar
							key={i + Math.random()}
							style={{ marginLeft: "1" }}
						/>
					);
				})}
			<Box
				as='span'
				ml='2'
				color='gray.600'
				fontSize='sm'
				display={numReviews === 1 ? "none" : "flex"}>
				({numReviews})
			</Box>
		</Box>
	);
}
export function ProductCard({
	id,
	name,
	price,
	star_rating_percentage,
	media,
	brand_name,
	primary_categories,
	offers,
	rating,
	rating_count,
	image_url,
}: {
	id: number;
	name: string;
	price: number;
	src: string;
	star_rating_percentage: number;
	singleData: any;
	media: Array<any>;
	brand_name: string;
	primary_categories: any;
	offers: Array<any>;
	rating: number;
	rating_count: number;
	image_url: string;
}) {
	const randomBolean = () => Math.random() >= 0.5;
	const navigate = useNavigate();
	const { url } = media[0];
	return (
		<Flex alignItems='center' justifyContent='center'>
			<Box
				transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
				boxShadow={useColorModeValue("lg", "lg")}
				_hover={{
					transform: "translateY(-5px)",
					transition: "all 0.2s ease-out",
					boxShadow: "0 10px 50px -20px #b0c4de",
				}}
				w='60'
				bg={useColorModeValue("white", "root.blueGray")}
				maxW='xs'
				rounded='lg'
				shadow='lg'
				position='relative'>
				<Box h='250px' roundedTop='lg'>
					<Image src={url} alt={name} roundedTop='lg' />
				</Box>
				<Box p='4'>
					<Box display='flex' alignItems='baseline'>
						{randomBolean() ? (
							<Badge
								rounded='full'
								fontSize='0.7em'
								// colorScheme='green'
								_dark={{ colorScheme: "green" }}
								colorScheme='red'>
								New
							</Badge>
						) : (
							<Badge
								rounded='full'
								fontSize='0.7em'
								_dark={{ colorScheme: "red" }}
								colorScheme='green'>
								Trending
							</Badge>
						)}
					</Box>
					<Flex
						mt='1'
						justifyContent='space-between'
						alignContent='center'
						alignItems={"center"}>
						<Box
							fontSize='md'
							fontWeight='semibold'
							as='h5'
							lineHeight='tight'
							isTruncated>
							{name}
						</Box>
						{/* <Tooltip
							label={
								!show ? "Added to cart" : "Item already in cart"
							}
							bg='white'
							placement={"top"}
							color={"gray.800"}
							fontSize={"1em"}>
							<Button
								display={"flex"}
								justifyContent={"center"}
								p='0'
								bg='none'
								_hover={{ bg: "none" }}
								isDisabled={show}
								onClick={handleAddToCart}
								cursor={"pointer"}>
								<Icon
									as={FiShoppingCart}
									h={7}
									w={7}
									alignSelf={"center"}
								/>
							</Button>
						</Tooltip> */}
					</Flex>
					<Flex justifyContent='space-between' alignContent='center'>
						<Rating rating={rating} numReviews={rating_count} />
						<Code
							fontSize='md'
							color={useColorModeValue("gray.800", "black")}
							mt='3'
							fontWeight='bold'
							bg={useColorModeValue("yellow.100", "yellow.200")}
							letterSpacing={0}>
							₹{price}
						</Code>
					</Flex>
					<Button
						w='full'
						mt='3'
						colorScheme={useColorModeValue("red", "red")}
						onClick={() => navigate(`/products/${id}`)}>
						More Details
					</Button>
				</Box>
			</Box>
		</Flex>
	);
}

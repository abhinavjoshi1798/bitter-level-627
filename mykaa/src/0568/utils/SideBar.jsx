import React, { memo, useEffect } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	HStack,
	Checkbox,
	FormLabel,
	Collapse,
	Button,
	RadioGroup,
	Stack,
	Radio,
	useColorModeValue,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
	const [show, setShow] = React.useState(false);
	const handleToggle = () => setShow(!show);

	const CATEGORY = ["Skin", "Beauty", "Makeup", "Mother & Child", "Hair"];
	const BRAND = [
		"Kama Ayurveda",
		"The Ordinary",
		"M.A.C",
		"Huda Beauty",
		"LANEIGE",
		"Estee Lauder",
		"Moroccanoil",
		"Charlotte Tilbury",
		"Olaplex",
		"Benefit Cosmetics",
		"Bobbi Brown",
		"Clinique",
		"Smashbox",
	];

	const COLOR = [
		"Black",
		"White",
		"Red",
		"Green",
		"Blue",
		"Yellow",
		"Orange",
		"Purple",
		"Brown",
		"Grey",
		"Other",
	];

	const FINISH = ["Matte", "Glossy", "Metallic", "Other"];
	const [searchParams, setSearchParams] = useSearchParams();
	const initial = searchParams.getAll("category_values");
	const initialBrand = searchParams.getAll("brand_name");
	const initialOrder = searchParams.get("order");
	const [category, setCategory] = React.useState(initial || []);
	const [order, setOrder] = React.useState(initialOrder || []);
	const [brand, setBrand] = React.useState(initialBrand || []);
	const handleSort = (e) => {
		setOrder(e);
	};

	const handleChange = (e) => {
		let newCategory = [...category];
		const value = e.target.value;
		if (category.includes(value)) {
			newCategory = newCategory.filter((cat) => cat !== value);
		} else {
			newCategory.push(value);
		}
		console.log(newCategory);
		setCategory(newCategory);
		// console.log(e.target.value);
	};
	const handleChangeBrand = (e) => {
		let newBrand = [...brand];
		const value = e.target.value;
		if (brand.includes(value)) {
			newBrand = newBrand.filter((cat) => cat !== value);
		} else {
			newBrand.push(value);
		}
		console.log(newBrand);
		setBrand(newBrand);
		// console.log(e.target.value);
	};
	const param = {
		category_values: category,
	};
	useEffect(() => {
		order && (param.order = order);
		brand && (param.brand_name = brand);
		setSearchParams(param);
	}, [category, order, brand]);

	// console.log(order);
	return (
		<>
			<Accordion
				w='100%'
				allowToggle
				defaultIndex={[0]}
				bg='root.white'
				_dark={{ bg: "root.black" }}
				mb={4}>
				<AccordionItem mb={4}>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							Sort By
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel>
						<Collapse startingHeight={80}>
							<RadioGroup
								defaultValue={order}
								colorScheme={"red"}
								bg={useColorModeValue(
									"root.pink.50",
									"#f4b1b1"
								)}
								color={useColorModeValue('white','black')}
								padding={4}
								borderRadius={4}
								onChange={handleSort}>
								<Stack>
									{/* <Radio value='asc'>name: low to high</Radio>
									<Radio value='desc'>
										name: high to low
									</Radio> */}
									<Radio value='asc'>
										Price: Low to High
									</Radio>
									<Radio value='desc'>
										Price: High to Low
									</Radio>
								</Stack>
							</RadioGroup>
						</Collapse>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
			<Accordion
				bg={useColorModeValue("root.white", "root.black")}
				allowToggle
				defaultIndex={[0]}
				// border='1px solid red'
			>
				<AccordionItem mb={4}>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							BRAND
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Collapse startingHeight={120} in={show}>
							{BRAND.map((location, id) => (
								<HStack
									spacing={4}
									key={id}
									onChange={handleChangeBrand}>
									<Checkbox
										_dark={{ colorScheme: "green" }}
										colorScheme='red'
										value={location}
										defaultChecked={brand.includes(
											location
										)}
									/>
									<FormLabel>{location}</FormLabel>
								</HStack>
							))}
						</Collapse>
						<Button
							w='100%'
							onClick={handleToggle}
							mt='1rem'
							colorScheme='red'>
							Show {show ? "Less" : "More"}
						</Button>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							CATEGORY
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Collapse startingHeight={120}>
							{CATEGORY.map((location, id) => (
								<HStack
									spacing={4}
									key={id}
									onChange={handleChange}>
									<Checkbox
										_dark={{ colorScheme: "green" }}
										colorScheme='red'
										defaultChecked={category.includes(
											location
										)}
										value={location}
									/>
									<FormLabel>{location}</FormLabel>
								</HStack>
							))}
						</Collapse>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem mb={4}>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							COLOR
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Collapse startingHeight={120} in={show}>
							{COLOR.map((location, id) => (
								<HStack spacing={4} key={id}>
									<Checkbox />
									<FormLabel>{location}</FormLabel>
								</HStack>
							))}
						</Collapse>
						<Button size='sm' onClick={handleToggle} mt='1rem'>
							Show {show ? "Less" : "More"}
						</Button>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							FINISH BASE
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Collapse startingHeight={120}>
							{FINISH.map((location, id) => (
								<HStack spacing={4} key={id}>
									<Checkbox />
									<FormLabel>{location}</FormLabel>
								</HStack>
							))}
						</Collapse>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};

export default memo(SideBar);

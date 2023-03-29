import React from "react";
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
} from "@chakra-ui/react";

const SideBar = () => {
	const [show, setShow] = React.useState(false);
	const handleToggle = () => setShow(!show);

	const BRAND = [
		"Crafte's Square",
		"Kraftly",
		"Mikale",
		"Osbond jhola",
		"Floral jonasan",
	];

	const MATERIAL = [
		"Leather",
		"Wood",
		"Metal",
		"Plastic",
		"Glass",
		"Paper",
		"Stone",
		"Fabric",
		"Other",
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

	return (
		<>
			<Accordion allowToggle defaultIndex={[0]}>
				<AccordionItem mb={4}>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							BRAND
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Collapse startingHeight={120}>
							{BRAND.map((location, id) => (
								<HStack spacing={4} key={id}>
									<Checkbox />
									<FormLabel>{location}</FormLabel>
								</HStack>
							))}
						</Collapse>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							MATERIAL BASE
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Collapse startingHeight={120} in={show}>
							{MATERIAL.map((location, id) => (
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

export default SideBar;

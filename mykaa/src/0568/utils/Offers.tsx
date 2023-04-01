import {
	Box,
	Container,
	Heading,
	Stack,
	Text,
	Flex,
	Icon,
} from "@chakra-ui/react";
import React from "react";
import { FcApproval } from "react-icons/fc";

interface CardProps {
	heading: string;
	description: string;
	href: string;
	subHeading: string;
	startDate: string;
	endDate: string;
}

const Card = ({
	heading,
	subHeading,
	startDate,
	endDate,
	description,
	href,
}: CardProps) => {
	return (
		<Box
			maxW={{ base: "full", md: "275px" }}
			w={"full"}
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
			p={5}>
			<Stack align={"start"} spacing={4}>
				<Box>
					<Heading size='md' color='blue.500'>
						{heading}
					</Heading>
					<Heading size='sm' mt={2} mb='2'>
						{subHeading}
					</Heading>
					<Text mt={1} fontSize={"sm"}>
						{description}
					</Text>
				</Box>
				<Flex justify='space-between'>
					<Text fontSize='sm' color='gray.500'>
						{startDate}
					</Text>
					<Text fontSize='sm' color='gray.500'>
						{endDate}
					</Text>
				</Flex>
			</Stack>
		</Box>
	);
};

export default function Offers({ offers }) {

	return (
		<Box p={4} mt='10'>
			<Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
				<Heading
					w={"full"}
					h={16}
					fontSize={{ base: "2xl", sm: "4xl" }}
					fontWeight={"bold"}>
					Offers <Icon as={FcApproval} w={10} h={10} mt='2' />
				</Heading>
			</Stack>

			<Container maxW={"5xl"} mt={5}>
				{offers && (
					<Flex flexWrap='wrap' gridGap={6} justify='center'>
						{offers?.map((offer: any,idx:number) => {
							return (
								<Card
								  key={idx}
									heading={offer?.name}
									subHeading={offer?.offerLabel}
									startDate={offer?.offer_start_date}
									endDate={offer?.offer_end_date}
									description={offer?.description}
									href={"#"}
								/>
							);
						})}
					</Flex>
				)}
			</Container>
		</Box>
	);
}

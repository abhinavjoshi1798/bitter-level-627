import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import {
	Button,
	ButtonGroup,
	useColorModeValue,
	Flex,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";
const Pagination = ({ total }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const totleButtons = new Array(total===60?(total / 10):(total)).fill(0).map((_, i) => i + 1);
	const initialPagw = Number(searchParams.get("page")) || 1;
	const [page, setPage] = React.useState(initialPagw);
	const handleClick = (i) => {
		setPage(page + i);
	};

	React.useEffect(() => {
		searchParams.set("page", page);
		setSearchParams(searchParams, "pushIn");
	}, [page]);

	return (
		<Flex
			alignItems='center'
			justify='space-between'
			w={{ base: "100%", md: "80%" }}
			mb='10'>
			<Text px='2' fontSize='sm' fontWeight='bold'>
				Page {page} of {total}
			</Text>
			<ButtonGroup spacing='4'>
				<Button
					boxShadow='lg'
					w='20px'
					colorScheme={useColorModeValue("red", "red")}
					isDisabled={page === 1}
					onClick={() => handleClick(-1)}
					rounded='full'>
					<ChevronLeftIcon boxSize={6} />
				</Button>
				{totleButtons.map((i) => (
					<Button
						p='2'
						rounded='full'
						colorScheme='red'
						bg={page === i ? "#ff8a82" : "gray.300"}
						onClick={() => setPage(i)}
						key={i}>
						{i}
					</Button>
				))}
				<Button
					rounded='100%'
					colorScheme={useColorModeValue("red", "red")}
					w='20px'
					isDisabled={page === total}
					onClick={() => handleClick(1)}>
					<ChevronRightIcon boxSize={6} />
				</Button>
			</ButtonGroup>
		</Flex>
	);
};

export default memo(Pagination);

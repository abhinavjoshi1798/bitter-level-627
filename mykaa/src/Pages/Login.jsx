import React, { useState } from "react";
import {
	Progress,
	Box,
	ButtonGroup,
	Button,
	Heading,
	Flex,
	FormControl,
	GridItem,
	FormLabel,
	Input,
	Select,
	SimpleGrid,
	InputLeftAddon,
	InputGroup,
	Textarea,
	FormHelperText,
	InputRightElement,
	useColorModeValue,
	Container,
	Center,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Login = () => {
	const toast = useToast();
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const inintialState = {
		name: "",
		email: "",
		password: "",
	};
	const [state, setState] = useState(inintialState);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		async function postUserData() {
			const response = await fetch(
				`https://obtainable-gray-tenor.glitch.me/user`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(state),
				}
			);
			const result = await response.json();
			console.log(result);
		}

		if (
			state.name === "" ||
			state.lastName === "" ||
			state.email === "" ||
			state.password === ""
		) {
			toast({
				title: "Error.",
				description: "Please fill all the fields.",
				status: "error",
				duration: 4000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Account created.",
				description: "We've created your account for you.",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
			postUserData();
			// console.log(state);
			setTimeout(() => {
				navigate("/signup");
			}, 1000);
		}
	};
	return (
		<div>
			<Container>
				<Box
					borderWidth='1px'
					rounded='lg'
					shadow='1px 1px 3px rgba(0,0,0,0.3)'
					maxWidth={400}
					bg={useColorModeValue("black", "white")}
					color={useColorModeValue("white", "black")}
					p={6}
					m='50px auto'
					as='form'>
					<Heading
						justifyContent={"center"}
						display={"flex"}
						w='100%'
						// border='1px'
						textAlign={"center"}
						fontWeight='normal'
						mb='4'
						size='lg'
						fontFamily={"franklin gothic medium"}>
						Mykaa
					</Heading>
					<Flex>
						<FormControl mr='2%'>
							<FormLabel
								htmlFor='first-name'
								fontWeight={"normal"}>
								Name
							</FormLabel>
							<Input
								id='first-name'
								name='name'
								placeholder='Enter name'
								onChange={handleChange}
								bg='gray.100'
								_placeholder={{ color: "gray.500" }}
							/>
						</FormControl>
					</Flex>
					<FormControl mt='2%'>
						<FormLabel htmlFor='email' fontWeight={"normal"}>
							Email address
						</FormLabel>
						<Input
							id='email'
							type='email'
							name='email'
							onChange={handleChange}
							placeholder='Enter email'
							bg='gray.100'
							_placeholder={{ color: "gray.500" }}
						/>
						<FormHelperText>
							We'll never share your email.
						</FormHelperText>
					</FormControl>
					<Link to='/signup' color="blue">
						If you already have an account
					</Link>
					<FormControl>
						<FormLabel
							htmlFor='password'
							fontWeight={"normal"}
							mt='2%'>
							Password
						</FormLabel>
						<InputGroup size='md' bg='gray.100'>
							<Input
								pr='4.5rem'
								type={show ? "text" : "password"}
								placeholder='Enter password'
								name='password'
								onChange={handleChange}
								_placeholder={{ color: "gray.500" }}
							/>
							<InputRightElement width='4.5rem'>
								<Button
									h='1.75rem'
									size='sm'
									onClick={handleClick}>
									{show ? "Hide" : "Show"}
								</Button>
							</InputRightElement>
						</InputGroup>
						<Center>
							<NavLink to='/'>
								<Button
									w='10rem'
									colorScheme='green'
									variant='solid'
									mt='2rem'
									onClick={handleSubmit}>
									Submit
								</Button>
							</NavLink>
						</Center>
					</FormControl>
				</Box>
			</Container>
		</div>
	);
};

export default Login;

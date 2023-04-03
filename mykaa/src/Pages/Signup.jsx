import React, { useState } from "react";
import {
	Box,
	Button,
	Heading,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	FormHelperText,
	useColorModeValue,
	Container,
	Center,
} from "@chakra-ui/react";
 
import { useToast } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'

const Signup = () => {
	const navigate = useNavigate();
  const { auth } = useSelector((state) => state.products);
	const toast = useToast();
  const dispatch = useDispatch();
	const email = React.useRef();
	const password = React.useRef();
	const handleSubmit = () => {
		const data = {
			email: email?.current?.value,
			password: password?.current?.value,
		};
		if (data.email === "admin@gmail.com" && data.password === "admin1432") {
			toast({
				title: "Admin login.",
				description: "You are logged in as admin.",
				status: "success",
				duration: 1000,
				isClosable: true,
			});
      console.log('admin login')
			navigate("/admin/products");
		} else {
			const fetchData = async (data) => {
				const response = await fetch(
					"https://obtainable-gray-tenor.glitch.me/user"
				);
				const user = await response.json();
				const check = user.filter(
					(user) =>
						user.email === data.email &&
						user.password === data.password
				);
				if (check.length > 0) {
					dispatch({ type: "LOGIN",payload:check[0].name });
          console.log(check[0])
          console.log(auth)
					navigate("/");
					toast({
						title: "Login succesfull",
						description: "You are logged in.",
						status: "success",
						duration: 4000,
						isClosable: true,
					});
				} else if (
					data?.email?.length === 0 ||
					data?.password?.length === 0
				) {
					toast({
						description: "Please fill all the fields.",
						status: "warning",
						duration: 4000,
						isClosable: true,
					});
				} else {
					toast({
						title: "Account not found.",
						description: "We could not find an account",
						status: "error",
						duration: 4000,
						isClosable: true,
					});
				}
			};
			fetchData(data);
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
					<FormControl mt='2%'>
						<FormLabel htmlFor='email' fontWeight={"normal"}>
							Email address
						</FormLabel>
						<Input
							id='email'
							type='email'
							name='email'
							ref={email}
							placeholder='Enter email'
							bg='gray.100'
							_placeholder={{ color: "gray.500" }}
						/>
						<FormHelperText>
							We'll never share your email.
						</FormHelperText>
					</FormControl>

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
								placeholder='Enter password'
								name='password'
								type={"password"}
								_placeholder={{ color: "gray.500" }}
								ref={password}
							/>
						</InputGroup>
						<Center>
								<Button
									w='10rem'
									colorScheme='green'
									variant='solid'
									mt='2rem'
									onClick={handleSubmit}>
									Submit
								</Button>
						</Center>
					</FormControl>
				</Box>
			</Container>
		</div>
	);
};

export default Signup;

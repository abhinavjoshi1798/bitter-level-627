import React from "react";
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
	Stack,
	Box,
	FormLabel,
	Input,
	Textarea,
	useToast,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Checkout({total,cartData}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();
	const toast = useToast();
	const [data, setData] = React.useState({
		pincode: "",
		house: "",
		area: "",
		name: "",
		phone: "",
		email: "",
	});
	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			data.pincode.length !== 6 ||
			data.phone.length !== 10 ||
			data.email.length === 0 ||
			data.name.length === 0 ||
			data.house.length === 0 ||
			data.area.length === 0
		) {
			toast({
				title: "Invalid Details",
				description: "Please enter valid details",
				status: "error",
				duration: 1000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Address Added",
				description: "Your address has been added",
				status: "success",
				duration: 1000,
				isClosable: true,
			});
			
			onClose();
			setData({
				pincode: "",
				house: "",
				area: "",
				name: "",
				phone: "",
				email: "",
			});
			navigate("/products/cart/payment",{state:{userInfo:data,cartData,total}})
		}
	};

	return (
		<>
			<Button
				colorScheme='blue'
				size='lg'
				fontSize='md'
				rightIcon={<FaArrowRight />}
				onClick={onOpen}>
				Checkout
			</Button>
			<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent
				bg={useColorModeValue("root.pink.50", "gray.800")}
				color={useColorModeValue("gray.700", "gray.200")}
				>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth='1px'>
						New Address
					</DrawerHeader>

					<DrawerBody>
						<Stack spacing='24px'>
							<Box>
								<FormLabel htmlFor='username'>
									Pincode
								</FormLabel>
								<Input
									type='number'
									placeholder='Enter your pincode'
									value={data.pincode}
									onChange={handleChange}
									name='pincode'
								/>
							</Box>
							<Box>
								<Input
									placeholder='Enter your office/house number'
									value={data.house}
									onChange={handleChange}
									name='house'
								/>
							</Box>
							<Box>
								<Textarea
									id='desc'
									placeholder='Road Name/Area/Colony '
									h='40'
									value={data.area}
									onChange={handleChange}
									name='area'
								/>
							</Box>
						</Stack>
						<Stack spacing='24px' mt='5'>
							<Box>
								<FormLabel htmlFor='username'>
									Contact
								</FormLabel>
								<Input
									placeholder='Enter your name'
									value={data.name}
									onChange={handleChange}
									name='name'
								/>
							</Box>
							<Box>
								<Input
									type='number'
									placeholder='Enter your number'
									value={data.phone}
									onChange={handleChange}
									name='phone'
								/>
							</Box>
							<Box>
								<Input
									placeholder='Enter your email'
									value={data.email}
									onChange={handleChange}
									name='email'
								/>
							</Box>
						</Stack>
					</DrawerBody>

					<DrawerFooter borderTopWidth='1px'>
						<Button variant='outline' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='blue' onClick={handleSubmit}>
							Submit
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}

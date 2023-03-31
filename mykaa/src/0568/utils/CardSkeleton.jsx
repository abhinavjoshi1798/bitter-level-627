import React from "react";
import { Box, Center, HStack, Skeleton, Stack } from "@chakra-ui/react";
const CardSkeleton = () => {
	return (
		<Box 
    >
			<Center>
				<Skeleton height='200px' w='260px' mb={8}>
					<div>fdfdfd</div>
					<div>fdfdfd</div>
				</Skeleton>
			</Center>
			<Center>
				<Stack>
					<Skeleton height='20px' w='260px' mb='4' />
					<HStack spacing='4' mb='4'>
						<Stack>
							<Skeleton height='20px' w='120px' />
							<Skeleton height='20px' w='120px' />
							<Skeleton height='20px' w='120px' />
							<Skeleton height='20px' w='120px' />
						</Stack>
						<Stack>
							<Skeleton height='48px' w='125px' />
							<Skeleton height='48px' w='125px' />
						</Stack>
					</HStack>
					<Skeleton height='40px' w='260px' mt='4' />
				</Stack>
			</Center>
		</Box>
	);
};

export default CardSkeleton;

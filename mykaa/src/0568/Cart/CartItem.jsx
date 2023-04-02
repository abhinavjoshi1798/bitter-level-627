import { CloseButton, Flex, Link, Text } from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
const QuantitySelect = ({ value }) => {
	return (
		<Text maxW='100%' ml='5' display='flex'>
			Quantity {value}
		</Text>
	);
};

export const CartItem = (props) => {
	const {
		name,
		media: [{ url: imageUrl }],
		offers,
		plp_offer: isGiftWrapping,
		quantity,
		price,
		onClickDelete,
	} = props;
  const description = offers?offers[0]?.description:"";
	return (
		<Flex
			direction={{
				base: "column",
				md: "row",
			}}
			justify='space-between'
			align='center'>
			<CartProductMeta
				name={name}
				description={description}
				image={imageUrl}
				isGiftWrapping={isGiftWrapping}
			/>

			{/* Desktop */}
			<Flex
				width='full'
				justify='space-between'
				display={{
					base: "none",
					md: "flex",
				}}>
				<QuantitySelect value={quantity} />
				<PriceTag price={price} currency={"USD"} />
				<CloseButton
					aria-label={`Delete ${name} from cart`}
					onClick={onClickDelete}
				/>
			</Flex>

			{/* Mobile */}
			<Flex
				mt='4'
				align='center'
				width='full'
				justify='space-between'
				display={{
					base: "flex",
					md: "none",
				}}>
				<Link
					fontSize='sm'
					textDecor='underline'
					onClick={onClickDelete}>
					Delete
				</Link>
				<QuantitySelect value={quantity} />
				<PriceTag price={price} currency={"USD"} />
			</Flex>
		</Flex>
	);
};

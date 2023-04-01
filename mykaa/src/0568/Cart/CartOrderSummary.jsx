import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { formatPrice } from './PriceTag'
import Checkout from '../components/Checkout'
const OrderSummaryItem = (props) => {
  const { label, value, children } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  )
}

export const CartOrderSummary = ({total,cart}) => {
  return (
		<Stack
			spacing='8'
			borderWidth='1px'
			rounded='lg'
			padding='8'
			width='full'>
			<Heading size='md'>Order Summary</Heading>

			<Stack spacing='6'>
				<OrderSummaryItem label='Subtotal' value={formatPrice(total)} />
				<OrderSummaryItem label='Shipping + Tax'>
					<Link href='#' textDecor='underline'>
						Calculate shipping
					</Link>
				</OrderSummaryItem>
				<OrderSummaryItem label='Coupon Code'>
					<Link href='#' textDecor='underline'>
						Add coupon code
					</Link>
				</OrderSummaryItem>
				<Flex justify='space-between'>
					<Text fontSize='lg' fontWeight='semibold'>
						Total
					</Text>
					<Text fontSize='xl' fontWeight='extrabold'>
						{formatPrice(total)}
					</Text>
				</Flex>
			</Stack>
			<Checkout total={total} cartData={cart}/>
		</Stack>
  );
}

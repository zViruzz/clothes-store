'use client'
import { useCart } from '@/stores/cart'

export default function ProductBuy() {
	const cart = useCart((state) => state.cart)

	return (
		<div>
			<h1>ProductBuy</h1>
		</div>
	)
}

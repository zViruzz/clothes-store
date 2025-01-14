import type { CartProduct } from '@/libs/schemas/checkout'
import { useCart } from '@/stores/cart'

export default function useQuantity(product: CartProduct) {
	const changeQuantity = useCart((state) => state.changeQuantity)

	const handleClickIncrement = () => {
		const value = product.quantity + 5
		changeQuantity(product, value)
	}

	const handleClickDecrement = () => {
		if (product.quantity <= 5) return

		const value = product.quantity - 5
		changeQuantity(product, value)
	}

	const controlQuantity = (value: number) => {
		if (value >= 0) {
			changeQuantity(product, value)
		}
	}

	return {
		handleClickIncrement,
		handleClickDecrement,
		controlQuantity,
	}
}

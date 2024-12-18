import { useCart } from '@/stores/cart'
import type { CartProduct } from '../../types'

export default function useQuantity(product: CartProduct) {
	const changeQuantity = useCart((state) => state.changeQuantity)

	const handleClickIncrement = () => {
		const value = product.quantity + 5
		changeQuantity(product.id, value)
	}

	const handleClickDecrement = () => {
		if (product.quantity <= 5) return

		const value = product.quantity - 5
		changeQuantity(product.id, value)
	}

	const controlQuantity = (value: number) => {
		if (value >= 0) {
			changeQuantity(product.id, value)
		}
	}

	return {
		handleClickIncrement,
		handleClickDecrement,
		controlQuantity,
	}
}

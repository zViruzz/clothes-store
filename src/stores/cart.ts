import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartProduct } from '../../types'

interface BearState {
	cart: CartProduct[]
	addProductCart: (product: CartProduct) => void
	removeProductFromCart: (product: CartProduct) => void
	changeQuantity: (id: number, value: number) => void
}

export const useCart = create(
	persist<BearState>(
		(set) => ({
			cart: [],
			changeQuantity: (id: number, value: number) =>
				set((state) => {
					const updateProduct = state.cart.map((item) => {
						if (item.id === id) {
							return {
								...item,
								quantity: value,
							}
						}
						return item
					})

					return {
						cart: updateProduct,
					}
				}),

			addProductCart: (product: CartProduct) =>
				set((state) => {
					const isProductInCart = state.cart.some(
						(item) =>
							item.id === product.id &&
							item.size === product.size &&
							item.color === product.color,
					)

					if (isProductInCart) {
						const updatedCart = state.cart.map((item) => {
							if (
								item.id === product.id &&
								item.size === product.size &&
								item.color === product.color
							) {
								return {
									...item,
									quantity: item.quantity + product.quantity,
								}
							}
							return item
						})

						return {
							cart: updatedCart,
						}
					}

					return {
						cart: [...state.cart, product],
					}
				}),
			removeProductFromCart: (product: CartProduct) =>
				set((state) => {
					const updatedCard = state.cart.filter((item) => {
						if (
							(item.id !== product.id && item.color !== product.color) ||
							item.size !== product.size
						) {
							return true
						}
					})

					return {
						cart: updatedCard,
					}
				}),
		}),
		{
			name: 'cart',
		},
	),
)

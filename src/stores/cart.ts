import { create } from 'zustand'
import type { CartProduct } from '../../types'
import { persist, createJSONStorage } from 'zustand/middleware'

interface BearState {
	cart: CartProduct[]
	addProductCart: (product: CartProduct) => void
	removeProductFromCart: (product: CartProduct) => void
}

export const useCart = create(
	persist<BearState>(
		(set) => ({
			cart: [],
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

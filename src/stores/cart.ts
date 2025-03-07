import type { CartProduct } from '@/libs/schemas/checkout'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BearState {
	cart: CartProduct[]
	addProductCart: (product: CartProduct) => void
	removeProductFromCart: (product: CartProduct) => void
	changeSizes: (product: CartProduct, value: string) => void
	changeQuantity: (product: CartProduct, value: number) => void
	clearCart: () => void
}

export const useCart = create(
	persist<BearState>(
		(set) => ({
			cart: [],
			changeSizes: (product: CartProduct, value: string) =>
				set((state) => {
					const updateProduct = state.cart.map((item) => {
						if (item.cartId === product.cartId) {
							return {
								...item,
								size: value,
							}
						}
						return item
					})
					return {
						cart: updateProduct,
					}
				}),
			changeQuantity: (product: CartProduct, value: number) =>
				set((state) => {
					const updateProduct = state.cart.map((item) => {
						if (item.cartId === product.cartId) {
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

			clearCart: () => set({ cart: [] }),
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
						if (item.cartId !== product.cartId) {
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

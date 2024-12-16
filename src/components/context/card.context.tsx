'use client'
import { createContext, useContext } from 'react'
import { type ReactNode, useState } from 'react'
import type { CartProduct } from '../../../types'

const EmptyCartState: CartProduct[] = []

interface CartProps {
	children: ReactNode
}

interface CartContextType {
	cart: CartProduct[]
	addProductCart: (product: CartProduct) => void
	removeProductFromCart: (product: CartProduct) => void
	showCartBar: boolean
	setShowCartBar: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartProvider = ({ children }: CartProps) => {
	const [showCartBar, setShowCartBar] = useState(false)
	const [cart, setCart] = useState<CartProduct[]>(EmptyCartState)

	const addProductCart = (product: CartProduct) => {
		const isProductInCart = cart.some(
			(item) =>
				item.id === product.id &&
				item.size === product.size &&
				item.color === product.color,
		)

		if (isProductInCart) {
			const updatedCart = cart.map((item) => {
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
			setCart(updatedCart)
			return
		}

		setCart([...cart, product])
	}

	const removeProductFromCart = (product: CartProduct) => {
		const updatedCard = cart.filter((item) => {
			if (
				(item.id !== product.id && item.color !== product.color) ||
				item.size !== product.size
			) {
				return true
			}
		})
		setCart(updatedCard)
	}

	return (
		<CartContext.Provider
			value={{ cart, addProductCart, removeProductFromCart, showCartBar, setShowCartBar }}
		>
			{children}
		</CartContext.Provider>
	)
}

export const CartContext = createContext<CartContextType>({
	cart: EmptyCartState,
	addProductCart: () => {},
	removeProductFromCart: () => {},
	showCartBar: false,
	setShowCartBar: () => {},
})

export const useCartContext = () => {
	const context = useContext(CartContext)

	// if (!context.value && context.value !== 0) {
	// 	throw new Error('GlobalContext must be used within a GlobalContextProvider')
	// }

	return context
}

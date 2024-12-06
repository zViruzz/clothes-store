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
}

export const CartProvider = ({ children }: CartProps) => {
	const [cart, setCart] = useState<CartProduct[]>(EmptyCartState)

	const addProductCart = (product: CartProduct) => {
		console.warn('DEBUGPRINT[1]: card.context.tsx:21: product=', product)
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
			console.warn('DEBUGPRINT[3]: card.context.tsx:36: updatedCart=', updatedCart)
			setCart(updatedCart)
			return
		}

		console.warn('DEBUGPRINT[2]: card.context.tsx:41: cart=', [...cart, product])
		setCart([...cart, product])
	}

	return (
		<CartContext.Provider value={{ cart, addProductCart }}>
			{children}
		</CartContext.Provider>
	)
}

export const CartContext = createContext<CartContextType>({
	cart: EmptyCartState,
	addProductCart: () => {},
})

export const useCartContext = () => {
	const context = useContext(CartContext)

	// if (!context.value && context.value !== 0) {
	// 	throw new Error('GlobalContext must be used within a GlobalContextProvider')
	// }

	return context
}

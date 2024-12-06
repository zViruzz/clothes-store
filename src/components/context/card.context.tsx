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
		console.warn('DEBUGPRINT[1]: card.context.tsx:23: product=', product)
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

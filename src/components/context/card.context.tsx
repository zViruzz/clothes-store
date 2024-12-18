'use client'
import { type ReactNode, createContext, useContext, useState } from 'react'

interface CartProps {
	children: ReactNode
}

interface CartContextType {
	showCartBar: boolean
	setShowCartBar: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartProvider = ({ children }: CartProps) => {
	const [showCartBar, setShowCartBar] = useState(false)

	return (
		<CartContext.Provider value={{ showCartBar, setShowCartBar }}>
			{children}
		</CartContext.Provider>
	)
}

export const CartContext = createContext<CartContextType>({
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

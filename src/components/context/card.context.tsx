'use client'
import { createContext, useContext } from 'react'
import { type ReactNode, useState } from 'react'
import type { CartProduct } from '../../../types'

const EmptyCartState: CartProduct[] = [
	{
		id: 0,
		name: 'remera',
		title: 'Remera',
		category: 'shirt',
		price: 7000,
		color: 'pink',
		size: 'X',
		url_images: [
			'https://acdn.mitiendanube.com/stores/211/292/products/set-de-nacimiento-pajaritos-coral-gubee-edeb4bd944a3dee91d17127006129682-480-0.jpg',
		],
		quantity: 1,
	},
	{
		id: 1,
		name: 'pantalon',
		title: 'Pantalon',
		category: 'pants',
		price: 5500,
		color: 'white',
		size: 'M',
		url_images: [
			'https://acdn.mitiendanube.com/stores/211/292/products/set-de-nacimiento-pajaritos-coral-gubee-edeb4bd944a3dee91d17127006129682-480-0.jpg',
		],
		quantity: 2,
	},

	{
		id: 3,
		name: 'pantalon',
		title: 'Pantalon',
		category: 'pants',
		price: 5500,
		color: 'white',
		size: 'M',
		url_images: [
			'https://acdn.mitiendanube.com/stores/211/292/products/set-de-nacimiento-pajaritos-coral-gubee-edeb4bd944a3dee91d17127006129682-480-0.jpg',
		],
		quantity: 2,
	},
	{
		id: 4,
		name: 'pantalon',
		title: 'Pantalon',
		category: 'pants',
		price: 5500,
		color: 'white',
		size: 'M',
		url_images: [
			'https://acdn.mitiendanube.com/stores/211/292/products/set-de-nacimiento-pajaritos-coral-gubee-edeb4bd944a3dee91d17127006129682-480-0.jpg',
		],
		quantity: 2,
	},
	{
		id: 5,
		name: 'pantalon',
		title: 'Pantalon',
		category: 'pants',
		price: 5500,
		color: 'white',
		size: 'M',
		url_images: [
			'https://acdn.mitiendanube.com/stores/211/292/products/set-de-nacimiento-pajaritos-coral-gubee-edeb4bd944a3dee91d17127006129682-480-0.jpg',
		],
		quantity: 2,
	},
	{
		id: 6,
		name: 'pantalon',
		title: 'Pantalon',
		category: 'pants',
		price: 5500,
		color: 'white',
		size: 'M',
		url_images: [
			'https://acdn.mitiendanube.com/stores/211/292/products/set-de-nacimiento-pajaritos-coral-gubee-edeb4bd944a3dee91d17127006129682-480-0.jpg',
		],
		quantity: 2,
	},
]

interface CartProps {
	children: ReactNode
}

interface CartContextType {
	cart: CartProduct[]
	addProductCart: (product: CartProduct) => void
	showCartBar: boolean
	setShowCartBar: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartProvider = ({ children }: CartProps) => {
	const [showCartBar, setShowCartBar] = useState(false)
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
		<CartContext.Provider value={{ cart, addProductCart, showCartBar, setShowCartBar }}>
			{children}
		</CartContext.Provider>
	)
}

export const CartContext = createContext<CartContextType>({
	cart: EmptyCartState,
	addProductCart: () => {},
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

'use client'
import {
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react'

interface CartProps {
	children: ReactNode
}

type DeliveryMethod = 'delivery' | 'pickup' | ''
type PayMethod = 'transfer' | ''

interface PaymentData {
	delivery_method: DeliveryMethod
	pay_method: PayMethod
}

interface CartContextType {
	paymentData: PaymentData
	setPaymentData: Dispatch<SetStateAction<PaymentData>>
}

const initialState: PaymentData = {
	delivery_method: '',
	pay_method: '',
}

export const CartProvider = ({ children }: CartProps) => {
	const [paymentData, setPaymentData] = useState(initialState)

	return (
		<CartContext.Provider value={{ paymentData, setPaymentData }}>
			{children}
		</CartContext.Provider>
	)
}

export const CartContext = createContext<CartContextType>({
	paymentData: initialState,
	setPaymentData: () => {},
})

export const useCartContext = () => {
	const context = useContext(CartContext)

	// if (!context.value && context.value !== 0) {
	// 	throw new Error('GlobalContext must be used within a GlobalContextProvider')
	// }

	return context
}

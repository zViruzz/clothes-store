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
type PaymentMethod = 'transfer' | ''

interface PaymentData {
	delivery_method: DeliveryMethod
	payment_method: PaymentMethod
}

interface PaymentDataType {
	paymentData: PaymentData
	setPaymentData: Dispatch<SetStateAction<PaymentData>>
}

const initialState: PaymentData = {
	delivery_method: '',
	payment_method: '',
}

export const PaymentDataProvider = ({ children }: CartProps) => {
	const [paymentData, setPaymentData] = useState(initialState)

	return (
		<PaymentDataContext.Provider value={{ paymentData, setPaymentData }}>
			{children}
		</PaymentDataContext.Provider>
	)
}

export const PaymentDataContext = createContext<PaymentDataType>({
	paymentData: initialState,
	setPaymentData: () => {},
})

export const usePaymentData = () => {
	const context = useContext(PaymentDataContext)

	// if (!context.value && context.value !== 0) {
	// 	throw new Error('GlobalContext must be used within a GlobalContextProvider')
	// }

	return context
}

export type Product = {
	id: number
	name: string
	title: string
	category: string
	description: string
	price: number
	color_scheme: string[]
	sizes: string[]
	url_images: string[]
	createdAt: Date
}

export type CartProduct = {
	id: number
	cartId: string
	name: string
	title: string
	category: string
	price: number
	color: string
	size: string
	url_images: string[]
	quantity: number
}

type DeliveryMethod = 'delivery' | 'pickup' | ''
type PaymentMethod = 'transfer' | ''

interface PaymentData {
	delivery_method: DeliveryMethod
	payment_method: PaymentMethod
}

interface ShipmentDataInterface {
	name: string
	address: string
	mobileNumber: string
	city: string
	zip: string
}

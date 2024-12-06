export type Product = {
	id: number
	name: string
	title: string
	category: string
	description: string
	price: number
	color_scheme: string[]
	url_images: string[]
	createdAt: Date
}

export type CartProduct = {
	id: number
	name: string
	title: string
	category: string
	description: string
	price: number
	color: string
	size: string
	url_images: string[]
	quantity: number
}

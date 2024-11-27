import type { Product } from '../../types'
import { products } from './data'

interface getProductProps {
	query?: string
}

export const getProduct = async ({ query }: getProductProps): Promise<Product[]> => {
	if (!query) return products

	const newProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(query.toLowerCase())
	})
	return newProducts
}

export const getProductByColor = async ({
	color,
}: { color: string }): Promise<Product[]> => {
	const newProducts = products.filter((product) => {
		return product.color_scheme.some((item) => item === color)
	})
	return newProducts
}

export const getProductById = async (id: string): Promise<Product | Error> => {
	try {
		const newProducts = products.find((product) => product.id === id)

		if (!newProducts) {
			throw new Error('Product not found')
		}
		return newProducts
	} catch (error) {
		return error as Error
	}
}

export const getProductsByCategory = async ({
	category,
}: { category: string }): Promise<Product[]> => {
	const newProducts = products.filter((product) => {
		return product.category.includes(category)
	})
	return newProducts
}

import type { Product } from '../../types'
import prisma from '../libs/prisma'

interface getProductProps {
	query?: string
}

export const getProduct = async ({ query }: getProductProps): Promise<Product[]> => {
	const products = await prisma.product.findMany()
	if (!query) return products

	const newProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(query.toLowerCase())
	})
	return newProducts
}

export const getProductById = async (id: number): Promise<Product | Error> => {
	try {
		const products = await prisma.product.findMany()
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
	const products = await prisma.product.findMany()
	const newProducts = products.filter((product) => {
		return product.category.includes(category)
	})
	return newProducts
}

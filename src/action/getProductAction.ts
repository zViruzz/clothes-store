'use server'

import { getProductById } from '@/services/product'

export async function getProductAction(id: number) {
	const data = await getProductById(id)
	return data
}

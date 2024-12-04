import { getProductById } from '@/services/product'
import { redirect } from 'next/navigation'

interface Props {
	params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: Props) {
	const { id } = await params
	const product = await getProductById(Number(id))

	if (product instanceof Error) {
		throw new Error('Product not found')
	}

	redirect(`${product.id}/${product.name}`)
}

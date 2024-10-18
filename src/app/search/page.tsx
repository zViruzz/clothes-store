import GridView from '@/components/GridView/GridView'
import ProductGridItem from '@/components/ProductGridItem/ProductGridItem'
import { getProduct } from '@/services/product'
import React from 'react'

interface Props {
	searchParams: Promise<{
		[key: string]: string | undefined
	}>
}

export default async function pageSearch({ searchParams }: Props) {
	const { q } = await searchParams

	const products = await getProduct({ query: q })
	console.log('🚀 ~ pageSearch ~ products:', products)

	return (
		<>
			<div>{q && <p>name: {q}</p>}</div>
			<GridView>
				<ProductGridItem products={products} />
			</GridView>
		</>
	)
}

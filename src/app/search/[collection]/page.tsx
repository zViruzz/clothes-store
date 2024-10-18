import GridView from '@/components/GridView/GridView'
import ProductGridItem from '@/components/ProductGridItem/ProductGridItem'
import { getProductsByCategory } from '@/services/product'
import React from 'react'

interface Props {
	params: Promise<{ collection: string }>
}

export default async function CategoryPage({ params }: Props) {
	const { collection } = await params
	const data = await getProductsByCategory({ category: collection })

	return (
		<div>
			<GridView>
				<ProductGridItem products={data} />
			</GridView>
		</div>
	)
}

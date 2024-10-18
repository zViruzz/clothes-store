import React from 'react'
import type { Product } from '../../../types'

interface Props {
	products: Product[]
}

export default function ProductGridItem({ products }: Props) {
	return (
		<>
			{products.map((product) => (
				<li
					key={product.id}
					className='aspect-square transition-opacity animate-fadeIn border flex justify-center items-center border-neutral-600 rounded-xl'
				>
					{product.title}
				</li>
			))}
		</>
	)
}

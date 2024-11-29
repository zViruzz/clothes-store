import ImagesPreview from '@/components/ImagesPreview/ImagesPreview'
import { getProductById } from '@/services/product'
import React from 'react'

interface Props {
	params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: Props) {
	const { id } = await params
	const product = await getProductById(id)

	if (product instanceof Error) {
		throw new Error('Product not found')
	}

	return (
		<div>
			<section className='grid grid-cols-[3fr_1.5fr] border mx-[10%] p-14'>
				<ImagesPreview product={product} />
				<div>
					<div>
						<h1 className='text-3xl'>{product.title}</h1>,<p>skjsfkasj</p>
					</div>
				</div>
			</section>
			<div>product lists</div>
		</div>
	)
}

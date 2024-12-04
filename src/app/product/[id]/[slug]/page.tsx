import ImagesPreview from '@/components/ImagesPreview/ImagesPreview'
import { getProductById } from '@/services/product'
import { colorTranslator } from '@/utils/colorTranslator'
import { TruckIcon } from 'lucide-react'

interface Props {
	params: Promise<{ id: string; slug: string }>
}

export default async function SlugPage({ params }: Props) {
	const { id, slug } = await params
	const product = await getProductById(Number(id))

	if (product instanceof Error) {
		throw new Error('Product not found')
	}

	return (
		<div>
			<section className='grid gap-6 md:grid-cols-[3fr_1.9fr] md:mx-[10%] mx-[5%] py-[5%] md:py-12 md:px-12'>
				<ImagesPreview product={product} />
				<div className=' '>
					<div>
						<h1 className='text-3xl mb-3'>{product.title}</h1>
						<p>{product.description}</p>
					</div>
					<div className='mt-5 border-t pt-5 flex flex-col gap-5'>
						<div>
							<p>{`Color : ${colorTranslator(product.color_scheme).join(' ')}`}</p>
							<div className='flex gap-2 mt-2'>
								{product.color_scheme.map((color) => (
									<div
										className='bg-pink-300 h-10 w-10 rounded-full border border-neutral-400'
										key={color}
									/>
								))}
							</div>
						</div>
						<div>
							<p>Size : </p>
							<div className='flex gap-2 mt-2'>
								<div className='h-10 w-10 rounded-full border border-neutral-400 grid place-items-center bg-white'>
									S
								</div>
								<div className='h-10 w-10 rounded-full border border-neutral-400 grid place-items-center bg-white'>
									M
								</div>
								<div className='h-10 w-10 rounded-full border border-neutral-400 grid place-items-center bg-white'>
									XS
								</div>
							</div>
						</div>

						<div>
							<button type='button' className='bg-[#F4D9E8]  py-2 px-6 rounded-full'>
								Agregar a carrito
							</button>
						</div>
						<div className='flex gap-2 items-center text-neutral-700'>
							<p>Envios a toda Argentina</p>
							<TruckIcon className='w-6 h-6 text-neutral-500' />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

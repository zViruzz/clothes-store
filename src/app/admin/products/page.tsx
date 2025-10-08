'use client'
import { useState, useTransition } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { createProduct } from '@/action/createProduct'
import { ProductInfoForm } from './_components/ProductInfoForm'
import { ProductImageUploader } from './_components/ProductImageUploader'
import { ProductDescription } from './_components/ProductDescription'
import { ProductSizeSelector } from './_components/ProductSizeSelector'
import { ProductColorSelector } from './_components/ProductColorSelector'
import { toast } from 'sonner'
import { getProductErrorMessage } from '@/utils/errorHandlers'

export default function pageProducts() {
	// const [formData, setFormData] = useState({
	// 	name: '',
	// 	title: '',
	// 	category: '',
	// 	description: '',
	// 	price: '',
	// 	sizes: [] as string[],
	// 	color_scheme: '',
	// 	url_images: [],
	// })

	const [formData, setFormData] = useState({
		name: 'lo',
		title: 'Nintendo Switch 2',
		category: 'Electrónicos',
		description: 'lol',
		price: '400000',
		sizes: ['XS', 'S', 'M', 'L'] as string[],
		color_scheme: 'warm',
		url_images: [],
	})

	const [isPending, startTransition] = useTransition()
	console.log('isPending', isPending)
	const [uploadedImage, setUploadedImage] = useState<{
		url: string | null
		file: File | null
	} | null>(null)

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }))
	}

	const handlePriceChange = (value: string) => {
		if (value === '') {
			return
		}
		setFormData((prev) => ({ ...prev, price: value }))
	}

	const handleSizeChange = (size: string, checked: boolean) => {
		setFormData((prev) => ({
			...prev,
			sizes: checked ? [...prev.sizes, size] : prev.sizes.filter((s) => s !== size),
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!uploadedImage) {
			toast.warning('Falta agregar una imagen', {
				duration: 5000,
				richColors: true,
			})
			return
		}

		const createCompleteProduct = async () => {
			const response = await fetch('/api/admin/generate-signed-url', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					contentType: uploadedImage?.file?.type,
					folder: 'products',
				}),
			})

			if (!response.ok) {
				throw new Error('No se pudo obtener la URL para la subida.')
			}

			const { url, finalUrl } = await response.json()
			// 'url' es la URL firmada para subir a S3
			// 'finalUrl' es la URL de CloudFront para guardar en tu base de datos

			// 2. Subir el archivo directamente a S3 usando la URL firmada
			const uploadResponse = await fetch(url, {
				method: 'PUT',
				body: uploadedImage?.file,
				headers: {
					'Content-Type': uploadedImage?.file?.type as string,
				},
			})

			if (!uploadResponse.ok) {
				throw new Error('Error al subir la imagen a S3.')
			}

			const newProduct = {
				...formData,
				price: Number.parseFloat(formData.price),
				url_images: [`${finalUrl}`],
			}

			console.log('newProduct', newProduct)
			const result = await createProduct(newProduct)
			console.log('result', result)

			if (!result.success) {
				const errorMessage = getProductErrorMessage(result)
				throw new Error(errorMessage)
			}

			return result.data
		}

		startTransition(async () => {
			toast.promise(createCompleteProduct(), {
				duration: 6500,
				loading: 'Subiendo imagen y creando producto...',
				success: (data) => {
					setFormData({
						name: '',
						title: '',
						category: '',
						description: '',
						price: '',
						sizes: [] as string[],
						color_scheme: '',
						url_images: [],
					})

					setUploadedImage(null)
					return `✅ Producto "${data?.name}" creado`
				},
				error: (err) => `${err.message}`,
				richColors: true,
			})
		})
	}

	return (
		<div className='w-full'>
			<div className='min-h-screen py-8'>
				<div className='max-w-4xl mx-auto px-4'>
					<div className='mb-8'>
						<h1 className='text-3xl font-bold text-gray-900'>Agregar Nuevo Producto</h1>
						<p className='text-gray-600 mt-2'>
							Completa la información del producto para agregarlo a tu tienda
						</p>
					</div>

					<form onSubmit={handleSubmit} className='space-y-8'>
						<div className='grid md:grid-cols-2 gap-8'>
							<ProductInfoForm
								formData={formData}
								handleInputChange={handleInputChange}
								handlePriceChange={handlePriceChange}
							/>
							<ProductImageUploader
								uploadedImage={uploadedImage}
								setUploadedImage={setUploadedImage}
							/>
						</div>

						<ProductDescription
							formData={formData}
							handleInputChange={handleInputChange}
						/>

						<ProductSizeSelector
							formData={formData}
							handleSizeChange={handleSizeChange}
						/>

						<ProductColorSelector
							formData={formData}
							handleInputChange={handleInputChange}
						/>

						<div className='flex gap-4 justify-end'>
							<Button type='button' variant='outline'>
								Cancelar
							</Button>
							<Button
								type='submit'
								disabled={isPending}
								className='bg-blue-600 hover:bg-blue-700'
							>
								<Plus className='w-4 h-4 mr-2' />
								Agregar Producto
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

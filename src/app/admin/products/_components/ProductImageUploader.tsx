import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Upload, X } from 'lucide-react'
import { type Dispatch, type SetStateAction, useState } from 'react'

type UploadedImageType = {
	url: string | null
	file: File | null
} | null

interface Props {
	uploadedImage: UploadedImageType
	setUploadedImage: Dispatch<SetStateAction<UploadedImageType>>
}

export function ProductImageUploader({ uploadedImage, setUploadedImage }: Props) {
	const [dragActive, setDragActive] = useState(false)

	const handleDrag = (e: React.DragEvent) => {
		e.preventDefault()
		e.stopPropagation()
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true)
		} else if (e.type === 'dragleave') {
			setDragActive(false)
		}
	}

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setDragActive(false)

		if (e.dataTransfer?.files?.[0]) {
			// if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			const file = e.dataTransfer.files[0]
			if (file.type.startsWith('image/')) {
				const reader = new FileReader()
				reader.onload = (e) => {
					setUploadedImage({
						url: e.target?.result as string,
						file: file,
					})
				}
				reader.readAsDataURL(file)
			}
		}
	}

	const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target?.files?.[0]) {
			const file = e.target.files[0]
			if (file.type.startsWith('image/')) {
				const reader = new FileReader()
				reader.onload = (e) => {
					setUploadedImage({
						url: e.target?.result as string,
						file: file,
					})
				}
				reader.readAsDataURL(file)
			}
		}
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Imagen del Producto</CardTitle>
			</CardHeader>
			<CardContent>
				<div
					className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
						dragActive
							? 'border-blue-500 bg-blue-50'
							: 'border-gray-300 hover:border-gray-400'
					}`}
					onDragEnter={handleDrag}
					onDragLeave={handleDrag}
					onDragOver={handleDrag}
					onDrop={handleDrop}
				>
					{uploadedImage ? (
						<div className='relative'>
							<img
								src={uploadedImage.url || '/placeholder.svg'}
								alt='Producto'
								className='max-w-full h-48 object-cover mx-auto rounded-lg'
							/>
							<Button
								type='button'
								variant='destructive'
								size='sm'
								className='absolute top-2 right-2'
								onClick={() => setUploadedImage(null)}
							>
								<X className='w-4 h-4' />
							</Button>
						</div>
					) : (
						<div className='space-y-4'>
							<Upload className='w-12 h-12 text-gray-400 mx-auto' />
							<div>
								<p className='text-lg font-medium text-gray-700'>
									Arrastra una imagen aquí
								</p>
								<p className='text-sm text-gray-500'>o haz clic para seleccionar</p>
							</div>
							<input
								type='file'
								accept='image/*'
								onChange={handleFileInput}
								className='hidden'
								id='file-upload'
							/>
							<Button
								type='button'
								variant='outline'
								onClick={() => document.getElementById('file-upload')?.click()}
							>
								Seleccionar Imagen
							</Button>
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	)
}

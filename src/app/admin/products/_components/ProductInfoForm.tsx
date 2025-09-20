import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const categories = ['CONJUNTOS_Y_AJUARES', 'BODYS_Y_REMERAS', 'PANTALONES', 'ACCESORIOS']

interface Props {
	formData: {
		name: string
		title: string
		category: string
		description: string
		price: string
		sizes: string[]
		color_scheme: string
		url_images: string[]
	}
	handleInputChange: (field: string, value: string) => void
	handlePriceChange: (value: string) => void
}

export function ProductInfoForm({
	formData,
	handleInputChange,
	handlePriceChange,
}: Props) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Información Básica</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div>
					<Label htmlFor='name'>Nombre del Producto</Label>
					<Input
						id='name'
						value={formData.name}
						onChange={(e) => handleInputChange('name', e.target.value)}
						placeholder='Ej: Camiseta básica'
						required
					/>
				</div>

				<div>
					<Label htmlFor='title'>Título</Label>
					<Input
						id='title'
						value={formData.title}
						onChange={(e) => handleInputChange('title', e.target.value)}
						placeholder='Ej: Camiseta de algodón premium'
						required
					/>
				</div>

				<div>
					<Label htmlFor='category'>Categoría</Label>
					<Select
						value={formData.category}
						onValueChange={(value) => handleInputChange('category', value)}
					>
						<SelectTrigger>
							<SelectValue placeholder='Selecciona una categoría' />
						</SelectTrigger>
						<SelectContent>
							{categories.map((category) => (
								<SelectItem key={category} value={category.toLowerCase()}>
									{category}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div>
					<Label htmlFor='price'>Precio</Label>
					<div className='relative'>
						<span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
							$
						</span>
						<Input
							id='price'
							type='number'
							step='0.01'
							value={formData.price}
							onChange={(e) => handlePriceChange(e.target.value)}
							placeholder='0.00'
							className='pl-8'
							required
						/>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

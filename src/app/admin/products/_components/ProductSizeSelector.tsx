import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

interface Props {
	formData: {
		sizes: string[]
	}
	handleSizeChange: (size: string, checked: boolean) => void
}

export function ProductSizeSelector({ formData, handleSizeChange }: Props) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Tallas Disponibles</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
					{availableSizes.map((size) => (
						<div key={size} className='flex items-center space-x-2'>
							<Checkbox
								id={`size-${size}`}
								checked={formData.sizes.includes(size)}
								onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)}
							/>
							<Label htmlFor={`size-${size}`} className='font-medium'>
								{size}
							</Label>
						</div>
					))}
				</div>
				{formData.sizes.length > 0 && (
					<div className='mt-4'>
						<p className='text-sm text-gray-600 mb-2'>Tallas seleccionadas:</p>
						<div className='flex flex-wrap gap-2'>
							{formData.sizes.map((size) => (
								<Badge key={size} variant='secondary'>
									{size}
								</Badge>
							))}
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

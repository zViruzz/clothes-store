import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const colorSchemes = [
	{ id: 'neutral', name: 'Neutral', colors: ['Blanco', 'Negro', 'Gris'] },
	{ id: 'warm', name: 'Cálidos', colors: ['Rojo', 'Naranja', 'Amarillo'] },
	{ id: 'cool', name: 'Fríos', colors: ['Azul', 'Verde', 'Púrpura'] },
	{ id: 'earth', name: 'Tierra', colors: ['Marrón', 'Beige', 'Caqui'] },
	{ id: 'pastel', name: 'Pastel', colors: ['Rosa', 'Lavanda', 'Menta'] },
]

interface Props {
	formData: {
		color_scheme: string
	}
	handleInputChange: (field: string, value: string) => void
}

export function ProductColorSelector({ formData, handleInputChange }: Props) {
	const selectedColorScheme = colorSchemes.find((cs) => cs.id === formData.color_scheme)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Esquema de Colores</CardTitle>
			</CardHeader>
			<CardContent>
				<RadioGroup
					value={formData.color_scheme}
					onValueChange={(value) => handleInputChange('color_scheme', value)}
					className='space-y-4'
				>
					{colorSchemes.map((scheme) => (
						<div key={scheme.id} className='flex items-center space-x-3'>
							<RadioGroupItem value={scheme.id} id={scheme.id} />
							<Label htmlFor={scheme.id} className='flex-1 cursor-pointer'>
								<div className='flex items-center justify-between'>
									<span className='font-medium'>{scheme.name}</span>
									<div className='flex gap-1'>
										{scheme.colors.map((color, index) => (
											<Badge key={color} variant='outline' className='text-xs'>
												{color}
											</Badge>
										))}
									</div>
								</div>
							</Label>
						</div>
					))}
				</RadioGroup>
				{selectedColorScheme && (
					<div className='mt-4 p-3 bg-blue-50 rounded-lg'>
						<p className='text-sm text-blue-800'>
							<strong>Colores disponibles:</strong>{' '}
							{selectedColorScheme.colors.join(', ')}
						</p>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

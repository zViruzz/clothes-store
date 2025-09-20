import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

interface Props {
	formData: {
		description: string
	}
	handleInputChange: (field: string, value: string) => void
}
export function ProductDescription({ formData, handleInputChange }: Props) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Descripción</CardTitle>
			</CardHeader>
			<CardContent>
				<Textarea
					value={formData.description}
					onChange={(e) => handleInputChange('description', e.target.value)}
					placeholder='Describe las características, materiales, cuidados y otros detalles importantes del producto...'
					rows={4}
					required
				/>
			</CardContent>
		</Card>
	)
}

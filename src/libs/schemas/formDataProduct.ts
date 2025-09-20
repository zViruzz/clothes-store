import { z } from 'zod'

export const ProductDataCreateSchema = z.object({
	name: z.string().min(3, { message: 'El nombre es muy corto' }),
	title: z.string().min(3, { message: 'El titulo es muy corto' }),
	category: z.string().min(3, { message: 'La categoria es muy corta' }),
	description: z.string().min(10, { message: 'La descripción es muy corta' }),
	price: z.coerce.number().positive({ message: 'El precio debe ser un número positivo' }),
	sizes: z.array(z.string()),
	color_scheme: z.string(),
	url_images: z.array(z.string().url({ message: 'La URL de la imagen no es válida' })),
})

export type ProductDataCreate = z.infer<typeof ProductDataCreateSchema>

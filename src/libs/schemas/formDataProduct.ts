import { z } from 'zod'

const toKebabCase = (str: string) =>
	str
		.toLowerCase() // 1. Convertir a minúsculas
		.replace(/[^a-z0-9\s-]/g, '') // 2. Quitar caracteres especiales (excepto espacios y guiones)
		.trim() // 3. Quitar espacios al inicio y al final
		.replace(/\s+/g, '-')

export const ProductDataCreateSchema = z.object({
	name: z.string().min(3, { message: 'El nombre es muy corto' }).transform(toKebabCase),
	title: z.string().min(3, { message: 'El titulo es muy corto' }),
	category: z.string().min(3, { message: 'La categoria es muy corta' }),
	description: z.string().min(10, { message: 'La descripción es muy corta' }),
	price: z.coerce.number().positive({ message: 'El precio debe ser un número positivo' }),
	sizes: z.array(z.string()),
	color_scheme: z.string(),
	url_images: z.array(z.string().url({ message: 'La URL de la imagen no es válida' })),
})

export type ProductDataCreate = z.infer<typeof ProductDataCreateSchema>

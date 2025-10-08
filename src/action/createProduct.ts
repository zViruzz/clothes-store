'use server'
import prisma from '@/libs/prisma'
import {
	type ProductDataCreate,
	ProductDataCreateSchema,
} from '@/libs/schemas/formDataProduct'
import { ZodError } from 'zod'

type ActionResult<T = unknown> =
	| { success: true; data: T }
	| { success: false; message: string; errors?: Record<string, string[]> }

export async function createProduct(
	productData: ProductDataCreate,
): Promise<ActionResult<{ id: number; name: string }>> {
	try {
		const validatedData = await ProductDataCreateSchema.parseAsync(productData)

		console.log('validatedData', validatedData)

		const newProduct = await prisma.product.create({
			data: {
				name: validatedData.name,
				title: validatedData.title,
				category: validatedData.category,
				description: validatedData.description,
				price: validatedData.price,
				sizes: validatedData.sizes,
				url_images: validatedData.url_images,
				color_scheme: [validatedData.color_scheme],
			},
		})

		return {
			success: true,
			data: {
				id: newProduct.id,
				name: newProduct.name,
			},
		}
	} catch (error) {
		console.error('Error creating product:', error)

		// Manejo específico de errores de Zod
		if (error instanceof ZodError) {
			const fieldErrors: Record<string, string[]> = {}
			for (const issue of error.issues) {
				const path = issue.path.join('.')
				if (!fieldErrors[path]) {
					fieldErrors[path] = []
				}
				fieldErrors[path].push(issue.message)
			}

			return {
				success: false,
				message: 'Errores de validación en el formulario',
				errors: fieldErrors,
			}
		}

		// Manejo de errores de Prisma (ej. unique constraint)
		if (error instanceof Error) {
			// Error de nombre duplicado en Prisma
			if (error.message.includes('Unique constraint failed')) {
				if (error.message.includes('name')) {
					return {
						success: false,
						message: 'Ya existe un producto con ese nombre',
						errors: { name: ['Este nombre ya está en uso'] },
					}
				}
			}

			return {
				success: false,
				message: 'Error al crear el producto',
				errors: { _form: [error.message] },
			}
		}

		return {
			success: false,
			message: 'Error desconocido al crear el producto',
		}
	}
}

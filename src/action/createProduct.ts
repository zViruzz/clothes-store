'use server'
import prisma from '@/libs/prisma'
import {
	type ProductDataCreate,
	ProductDataCreateSchema,
} from '@/libs/schemas/formDataProduct'

export async function createProduct(productData: ProductDataCreate) {
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
		return {
			success: false,
			message: 'An error occurred while creating the product',
			errors: error instanceof Error ? error.message : (error as string),
		}
	}
}

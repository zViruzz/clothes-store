import { z } from 'zod'

const DeliveryMethodEnum = z.enum(['delivery', 'pickup'])
const PaymentMethodEnum = z.enum(['transfer'])

const ProductSchema = z.object({
	id: z.number(),
	name: z.string(),
	title: z.string(),
	category: z.string(),
	description: z.string(),
	price: z.number(),
	color_scheme: z.array(z.string()),
	sizes: z.array(z.string()),
	url_images: z.array(z.string()),
	createdAt: z.date(),
})

const CartProductSchema = z.object({
	id: z.number(),
	cartId: z.string(),
	name: z.string(),
	title: z.string(),
	category: z.string(),
	price: z.number().positive(), // Validación: precio mayor a 0
	color: z.string(),
	size: z.string(),
	url_images: z.array(z.string().url()), // Validación: URLs válidas
	quantity: z.number().min(1), // Validación: cantidad mínima de 1
})

const PaymentDataSchema = z.object({
	delivery_method: DeliveryMethodEnum,
	payment_method: PaymentMethodEnum,
})

const ShipmentDataSchema = z.object({
	name: z.string().min(1).optional(),
	address: z.string().min(1).optional(),
	mobileNumber: z.string().regex(/^\+?[0-9]{10,15}$/, 'Número de teléfono inválido'),
	city: z.string().min(1).optional(),
	zip: z
		.string()
		.regex(/^\d{4,6}$/, 'Código postal inválido')
		.optional(),
})

export const CheckoutDataSchema = z.object({
	userId: z.string(),
	username: z.string().min(1), // Validación: usuario requerido
	email: z.string().email('Email inválido'),
	payment_data: PaymentDataSchema,
	shipment_data: ShipmentDataSchema,
	cart: z.array(CartProductSchema).min(1, 'El carrito no puede estar vacío'),
})

export type CheckoutData = z.infer<typeof CheckoutDataSchema>
export type PaymentData = z.infer<typeof PaymentDataSchema>
export type ShipmentData = z.infer<typeof ShipmentDataSchema>
export type CartProduct = z.infer<typeof CartProductSchema>
export type Product = z.infer<typeof ProductSchema>

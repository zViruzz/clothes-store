import { z } from 'zod'

const DeliveryMethodEnum = z.enum(['delivery', 'pickup', ''])

const PaymentMethodEnum = z.enum(['transfer', ''])

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
	name: z.string().min(1), // Validación: nombre requerido
	address: z.string().min(1), // Validación: dirección requerida
	mobileNumber: z.string().regex(/^\+?[0-9]{10,15}$/, 'Número de teléfono inválido'),
	city: z.string().min(1),
	zip: z.string().regex(/^\d{4,6}$/, 'Código postal inválido'), // Ejemplo: 4 a 6 dígitos
})

export const CheckoutDataSchema = z.object({
	username: z.string().min(1), // Validación: usuario requerido
	email: z.string().email('Email inválido'),
	payment_data: PaymentDataSchema,
	shipment_data: ShipmentDataSchema,
	cart: z.array(CartProductSchema).min(1, 'El carrito no puede estar vacío'),
})

export type CheckoutData = z.infer<typeof CheckoutDataSchema>

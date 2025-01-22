import type { CheckoutData } from './schemas/checkout'
import prisma from '@/libs/prisma'

export async function savePurchaseToDB(data: CheckoutData) {
	try {
		const orderId = `ORDER-${Date.now()}-${Math.floor(Math.random() * 1000)}`

		await prisma.purchase.create({
			data: {
				id: orderId,
				user: {
					connect: { id: data.userId }, // Relaciona el usuario existente
				},
				paymentData: {
					create: {
						deliveryMethod: data.payment_data.delivery_method,
						paymentMethod: data.payment_data.payment_method,
					},
				},
				shipmentData: {
					create: {
						name: data.shipment_data.name,
						address: data.shipment_data.address,
						mobileNumber: data.shipment_data.mobileNumber,
						city: data.shipment_data.city,
						zip: data.shipment_data.zip,
					},
				},
				cartItems: {
					create: data.cart.map((item) => ({
						name: item.name,
						title: item.title,
						category: item.category,
						price: item.price,
						color: item.color,
						size: item.size,
						urlImages: item.url_images,
						quantity: item.quantity,
					})),
				},
			},
		})
	} catch (error) {
		console.log('error saving purchase:', error)
	}
}

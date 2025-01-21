import type { CheckoutData } from './schemas/checkout'
import prisma from '@/libs/prisma'

// TODO: Guardar compra en la base de datos y aprender bien los es quemas que aplicaste
export async function savePurchaseToDB(data: CheckoutData) {
	try {
		const purchase = await prisma.purchase.create({
			data: {
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

		console.log('🚀 ~ saveToDB ~ purchase:', purchase)
	} catch (error) {
		console.log(error)
	}
}

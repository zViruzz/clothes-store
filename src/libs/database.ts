import type { CheckoutData } from './schemas/checkout'

export function savePurchaseToDB(data: CheckoutData) {
	try {
		console.log('🚀 ~ saveToDB ~ data:', data)
	} catch (error) {
		console.log(error)
	}
}

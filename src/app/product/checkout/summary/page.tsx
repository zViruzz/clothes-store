'use client'
import { usePaymentData } from '@/context/paymentData.context'
import { cn } from '@/libs/utils'
import { useCart } from '@/stores/cart'
import { useShipmentData } from '@/stores/shipmentData'
import { useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { stylesMain } from '../styles'
import { styles } from './styles'

export default function SummeryPage() {
	const router = useRouter()
	const shipmentData = useShipmentData((state) => state.shipmentData)
	const cart = useCart((state) => state.cart)
	const clearCart = useCart((state) => state.clearCart)
	const { paymentData } = usePaymentData()
	const { data: session, status } = useSession()

	if (status === 'loading') {
		toast.loading('Cargando...')
		return <div>Loading...</div>
	}

	if (paymentData.payment_method === '' || paymentData.delivery_method === '') {
		toast.warning('Debes seleccionar un metodo de envio y un metodo de pago')
		redirect('/product/checkout/')
	}

	const handleCLickBack = () => {
		router.push('/product/checkout/pay')
	}

	const handleCLickConfirmPayment = async () => {
		try {
			if (session === null || session.user === undefined) {
				toast.error('Debes iniciar sesion para realizar la compra')
				return
			}

			const checkoutData = {
				payment_data: paymentData,
				shipment_data: shipmentData,
				cart: cart,
			}

			const response = await fetch('/api/checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(checkoutData),
			})
			const data = await response.json()

			if (data.message === 'Data validated correctly') {
				clearCart()
				router.push(`/confirm/${data.data.id}`)
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div>
			<h1 className={styles.title()}>SummeryPage</h1>
			<div className={styles.container()}>
				<div>
					<h4>Dirreccion de envio</h4>
					<div className={styles.content()}>
						<p>{shipmentData.name}</p>
						<p>{shipmentData.address}</p>
						<p>{shipmentData.city}</p>
						<p>{shipmentData.mobileNumber}</p>
					</div>
				</div>

				<div>
					<h4>Metodo de pago</h4>
					<div className={styles.content()}>
						<p>{paymentData.payment_method === 'transfer' ? 'Transferencia' : ''}</p>
					</div>
				</div>

				<div className={stylesMain.containerButtonsStep()}>
					<button
						type='button'
						className={stylesMain.buttonStep()}
						onClick={handleCLickBack}
					>
						Volver
					</button>

					<button
						type='submit'
						className={cn(stylesMain.buttonStep(), styles.buttonPay())}
						onClick={handleCLickConfirmPayment}
					>
						Confirmar pago
					</button>
				</div>
			</div>
		</div>
	)
}

'use client'
import { cn } from '@/libs/utils'
import { styles } from './styles'
import { redirect, useRouter } from 'next/navigation'
import { stylesMain } from '../styles'
import { usePaymentData } from '@/context/paymentData.context'
import { useShipmentData } from '@/stores/shipmentData'
import { toast } from 'sonner'

export default function SummeryPage() {
	const router = useRouter()
	const shipmentData = useShipmentData((state) => state.shipmentData)
	const { paymentData } = usePaymentData()

	if (paymentData.payment_method === '' || paymentData.delivery_method === '') {
		toast.warning('Debes seleccionar un metodo de envio y un metodo de pago')
		redirect('/product/checkout/')
	}

	const handleCLickBack = () => {
		router.push('/product/checkout/pay')
	}

	const handleCLickGo = () => {}

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
						onClick={handleCLickGo}
					>
						Confirmar pago
					</button>
				</div>
			</div>
		</div>
	)
}

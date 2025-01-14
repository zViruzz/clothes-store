'use client'
import HomeIcon from '@/icons/HomeIcon'
import ShopIcon from '@/icons/ShopIcon'
import { cartSelect } from '../styles'
import { styles } from './styles'
import { useRouter } from 'next/navigation'
import { usePaymentData } from '@/context/paymentData.context'

export default function AddressPage() {
	const { setPaymentData } = usePaymentData()
	const router = useRouter()

	const handleCLickDelivery = () => {
		setPaymentData((prev) => ({ ...prev, delivery_method: 'delivery' }))
		router.push('/product/checkout/address/delivery')
	}
	const haldleClickPickup = () => {
		setPaymentData((prev) => ({ ...prev, delivery_method: 'pickup' }))
		router.push('/product/checkout/address/pickup')
	}

	return (
		<div>
			<h2 className={styles.title()}>Metodo de entrega</h2>
			<div className={styles.containerMethods()}>
				<button type='button' className={cartSelect()} onClick={handleCLickDelivery}>
					<div>
						<HomeIcon />
						<h4>Envio a domicilio</h4>
					</div>
					<p>Recordá enviar tu comprobante para que procesemos tu pago.</p>
				</button>

				<button type='button' className={cartSelect()} onClick={haldleClickPickup}>
					<div>
						<ShopIcon />
						<h4>Retiro por sucursal</h4>
					</div>
					<p>Recordá enviar tu comprobante para que procesemos tu pago.</p>
				</button>
			</div>
		</div>
	)
}

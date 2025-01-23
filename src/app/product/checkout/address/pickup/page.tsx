'use client'
import { Input } from '@/components/ui/input'
import { useShipmentData } from '@/stores/shipmentData'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { stylesMain } from '../../styles'
import { styles } from './styles'

export default function PickupPage() {
	const router = useRouter()
	const [mobileNumber, setMobileNumber] = useState('')
	const setShipmentData = useShipmentData((state) => state.setShipmentData)

	const handleClickBack = () => {
		router.push('/product/checkout/address')
	}
	const handleClickContinue = () => {
		if (mobileNumber === '') {
			toast.warning('Debes ingresar tu numero de celular')
			return
		}
		setShipmentData({
			mobileNumber,
		})
		router.push('/product/checkout/pay')
	}

	return (
		<div className={styles.container()}>
			<h3 className={styles.title()}>Informacion de entrega</h3>
			<p className={styles.text()}>
				La dirreccion de entrega se realizara en la sucursal de floresta, los horarios de
				atencion son de lunes a viernes de 9 am a 6 pm, Se necesita su numero de celular
				para contactarlo en caso de problemas.
			</p>

			<form className={styles.form()}>
				<div>
					<label htmlFor='mobile-number'>Celular</label>
					<Input
						name='mobile-number'
						value={mobileNumber}
						onChange={(e) => setMobileNumber(e.target.value)}
						type='tel'
						placeholder='Ingresa tu numero'
					/>
				</div>
			</form>

			<div className={stylesMain.containerButtonsStep()}>
				<button
					type='button'
					className={stylesMain.buttonStep()}
					onClick={handleClickBack}
				>
					Volver
				</button>
				<button
					type='button'
					className={stylesMain.buttonStep()}
					onClick={handleClickContinue}
				>
					Continuar
				</button>
			</div>
		</div>
	)
}

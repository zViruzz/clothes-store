'use client'
import { useRouter } from 'next/navigation'
import { stylesMain } from '../../styles'
import { styles } from './styles'

export default function PickupPage() {
	const router = useRouter()

	const handleClickBack = () => {
		router.push('/product/checkout/address')
	}
	const handleClickContinue = () => {
		router.push('/product/checkout/pay')
	}

	return (
		<div className={styles.container()}>
			<h3 className={styles.title()}>Informacion de entrega</h3>
			<p className={styles.text()}>
				La dirreccion de entrega se realizara en la sucursal mas cercana, los horarios de
				atencion son de lunes a viernes de 9 am a 6 pm
			</p>
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

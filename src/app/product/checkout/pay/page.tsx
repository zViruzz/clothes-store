'use client'
import MoneyIcon from '@/icons/MoneyIcon'
import { stylesMain } from '../styles'
import { styles } from './styles'
import { useRouter } from 'next/navigation'

export default function PayPage() {
	const router = useRouter()
	const handleClickTransfer = () => {
		router.push('/product/checkout/summary')
	}

	const handleClickBack = () => {
		router.push('/product/checkout/address')
	}

	return (
		<div>
			<h2 className={styles.title()}>Metodo de pago</h2>
			<div className={styles.containerMethods()}>
				<button
					className={stylesMain.cardSelectMethod()}
					type='button'
					onClick={handleClickTransfer}
				>
					<div>
						<MoneyIcon width={25} height={25} />
						<h4>Tranferencia</h4>
					</div>
					<p>Recordá enviar tu comprobante para que procesemos tu pago.</p>
				</button>
			</div>
			<p className={styles.info()}>
				Una vez acreditado el pago te avisaremos vía mail (puede demorar hasta 48hs
				hábiles).
			</p>
			<div>
				<button
					type='button'
					className={stylesMain.buttonStep()}
					onClick={handleClickBack}
				>
					Volver
				</button>
			</div>
		</div>
	)
}

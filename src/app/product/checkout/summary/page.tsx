'use client'
import { cn } from '@/libs/utils'
import { styles } from './styles'
import { useRouter } from 'next/navigation'
import { stylesMain } from '../styles'

export default function SummeryPage() {
	const router = useRouter()
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
						<p>Dirreccion</p>
						<p>Dirreccion</p>
						<p>Dirreccion</p>
						<p>Dirreccion</p>
					</div>
				</div>

				<div>
					<h4>Metodo de pago</h4>
					<div className={styles.content()}>
						<p>Dirreccion</p>
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
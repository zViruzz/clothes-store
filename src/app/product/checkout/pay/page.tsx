import MoneyIcon from '@/icons/MoneyIcon'
import { cartSelect } from '../styles'
import { styles } from './styles'

export default function PayPage() {
	return (
		<div>
			<h2 className={styles.title()}>Metodo de pago</h2>
			<div className={styles.containerMethods()}>
				<button className={cartSelect()} type='button'>
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
		</div>
	)
}

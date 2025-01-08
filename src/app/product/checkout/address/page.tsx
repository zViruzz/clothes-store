import HomeIcon from '@/icons/HomeIcon'
import ShopIcon from '@/icons/ShopIcon'
import { cartSelect } from '../styles'
import { styles } from './styles'

export default function AddressPage() {
	return (
		<div>
			<h2 className={styles.title()}>Metodo de entrega</h2>
			<div className={styles.containerMethods()}>
				<button className={cartSelect()} type='button'>
					<div>
						<HomeIcon />
						<h4>Envio a domicilio</h4>
					</div>
					<p>Recordá enviar tu comprobante para que procesemos tu pago.</p>
				</button>

				<button className={cartSelect()} type='button'>
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

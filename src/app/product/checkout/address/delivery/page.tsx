'use client'
import { Input } from '@/components/ui/input'
import { styles } from './styles'
import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'
import { stylesMain } from '../../styles'
import { useShipmentData } from '@/stores/shipmentData'

export default function DeliveryPage() {
	const router = useRouter()
	const setShipmentData = useShipmentData((state) => state.setShipmentData)

	const handleCLickBack = () => {}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const dataForm = new FormData(event.currentTarget)

		if (!/^\+?[0-9]{10,15}$/.test(dataForm.get('mobile-number') as string)) {
			return
		}

		const data = {
			name: dataForm.get('name') as string,
			address: dataForm.get('address') as string,
			mobileNumber: dataForm.get('mobile-number') as string,
			city: dataForm.get('city') as string,
			zip: dataForm.get('zip-code') as string,
		}

		setShipmentData(data)

		console.warn('DEBUGPRINT[73]: page.tsx:20: data=', data)
		router.push('/product/checkout/pay')
	}

	return (
		<div className={styles.container()}>
			<h2>Informacion de entrega</h2>

			<form className={styles.form()} onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Nombre</label>
					<Input name='name' placeholder='Ingresa tu nombre' />
				</div>
				<div />

				<div>
					<label htmlFor='address'>Direccion</label>
					<Input name='address' placeholder='Ingresa tu direccion' />
				</div>
				<div />

				<div>
					<label htmlFor='mobile-number'>Celular</label>
					<Input name='mobile-number' type='tel' placeholder='Ingresa tu numero' />
				</div>
				<div />

				<div>
					<label htmlFor='city'>Ciudad</label>
					<Input name='city' placeholder='Ingresa tu ciudad' />
				</div>

				<div>
					<label htmlFor='zip-code'>Codigo postal</label>
					<Input name='zip-code' placeholder='Ingresa tu codigo postal' />
				</div>

				<div className={stylesMain.containerButtonsStep()}>
					<button
						type='button'
						className={stylesMain.buttonStep()}
						onClick={handleCLickBack}
					>
						Volver
					</button>

					<button type='submit' className={stylesMain.buttonStep()}>
						Continuar
					</button>
				</div>
			</form>
		</div>
	)
}

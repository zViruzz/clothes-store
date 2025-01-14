'use client'
import { Input } from '@/components/ui/input'
import { useShipmentData } from '@/stores/shipmentData'
import { useRouter } from 'next/navigation'
import { useEffect, useState, type FormEvent } from 'react'
import { toast } from 'sonner'
import { stylesMain } from '../../styles'
import { styles } from './styles'

export default function DeliveryPage() {
	const router = useRouter()
	const shipmentData = useShipmentData((state) => state.shipmentData)
	const setShipmentData = useShipmentData((state) => state.setShipmentData)

	const [name, setName] = useState(shipmentData.name)
	const [address, setAddress] = useState(shipmentData.address)
	const [mobileNumber, setMobileNumber] = useState(shipmentData.mobileNumber)
	const [city, setCity] = useState(shipmentData.city)
	const [zip, setZip] = useState(shipmentData.zip)

	useEffect(() => {
		setName(shipmentData.name)
		setAddress(shipmentData.address)
		setMobileNumber(shipmentData.mobileNumber)
		setCity(shipmentData.city)
		setZip(shipmentData.zip)
	}, [shipmentData])

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!/^\+?[0-9]{10,15}$/.test(mobileNumber)) {
			toast.error('El numero de celular no es valido')
			return
		}

		const data = {
			name,
			address,
			mobileNumber,
			city,
			zip,
		}

		setShipmentData(data)

		router.push('/product/checkout/pay')
	}

	const handleCLickBack = () => {
		router.push('/product/checkout/address')
	}

	return (
		<div className={styles.container()}>
			<h2>Informacion de entrega</h2>

			<form className={styles.form()} onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Nombre</label>
					<Input
						name='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='Ingresa tu nombre'
					/>
				</div>
				<div className='hidden md:block' />

				<div>
					<label htmlFor='address'>Direccion</label>
					<Input
						name='address'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						placeholder='Ingresa tu direccion'
					/>
				</div>
				<div className='hidden md:block' />

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

				<div className='hidden md:block' />

				<div>
					<label htmlFor='city'>Ciudad</label>
					<Input
						name='city'
						value={city}
						onChange={(e) => setCity(e.target.value)}
						placeholder='Ingresa tu ciudad'
					/>
				</div>

				<div>
					<label htmlFor='zip-code'>Codigo postal</label>
					<Input
						name='zip-code'
						value={zip}
						onChange={(e) => setZip(e.target.value)}
						placeholder='Ingresa tu codigo postal'
					/>
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

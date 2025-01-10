'use client'
import { Input } from '@/components/ui/input'
import { styles } from './styles'
import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'

export default function DeliveryPage() {
	const router = useRouter()

	const handleCLickBack = () => {}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		router.push('/product/checkout/pay')
	}

	return (
		<div className={styles.container()}>
			<h2>Informacion de entrega</h2>

			<form className={styles.form()} onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Nombre</label>
					<Input id='name' placeholder='Ingresa tu nombre' />
				</div>
				<div />

				<div>
					<label htmlFor='address'>Direccion</label>
					<Input id='name' placeholder='Ingresa tu direccion' />
				</div>
				<div />

				<div>
					<label htmlFor='mobile-number'>Celular</label>
					<Input id='name' placeholder='Ingresa tu numero' />
				</div>
				<div />

				<div>
					<label htmlFor='city'>Ciudad</label>
					<Input id='name' placeholder='Ingresa tu ciudad' />
				</div>

				<div>
					<label htmlFor='zip-code'>Codigo postal</label>
					<Input id='name' placeholder='Ingresa tu codigo postal' />
				</div>

				<div className={styles.containerButton()}>
					<button type='button' className={styles.button()} onClick={handleCLickBack}>
						Volver
					</button>

					<button type='submit' className={styles.button()}>
						Continuar
					</button>
				</div>
			</form>
		</div>
	)
}

'use client'
import SignInButton from '@/components/SignInButton/SignInButton'
import AuthForm from '@/components/ui/AuthForm'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { styles } from './styles'

export default function registerPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = handleSubmit(async (data) => {
		const res = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const resJson = res.json()
	})

	return (
		<AuthForm>
			<form className={styles.containerForm()} onSubmit={onSubmit}>
				<h3 className={styles.title()}>Registrate</h3>
				<div>
					<Input
						className='h-11'
						type='username'
						placeholder='Tu@email.com'
						{...register('username', {
							required: {
								value: true,
								message: 'Username is requiresd',
							},
						})}
					/>
					{errors.username && (
						<span className='text-red-500'>{`${errors.username.message}`}</span>
					)}
				</div>

				<div>
					<Input
						className='h-11'
						type='email'
						placeholder='Contraseña'
						{...register('email', {
							required: {
								value: true,
								message: 'Email is requiresd',
							},
						})}
					/>
					{errors.email && (
						<span className='text-red-500'>{`${errors.email.message}`}</span>
					)}
				</div>

				<div className={styles.continueTagWith()}>
					<div className={styles.containerLine()}>
						<div className={styles.line()} />
					</div>
					<div className={styles.containerTag()}>
						<span className={styles.tag()}>O continuar con</span>
					</div>
				</div>

				<div>
					<button className={styles.buttonLogin()} type='submit'>
						Registrate
					</button>
				</div>

				<div>
					<SignInButton text='Registrate con Google' />
				</div>
			</form>
			<div className={styles.footerCard()}>
				<p>
					¿Ya esta registrado?{' '}
					<Link className='text-blue-600' href='/auth/register'>
						Inisiar Sesión
					</Link>
				</p>
			</div>
		</AuthForm>
	)
}

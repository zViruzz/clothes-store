'use client'
import SignInButton from '@/components/SignInButton/SignInButton'
import AuthForm from '@/components/ui/AuthForm'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { styles } from './styles'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function loginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const router = useRouter()

	const onSubmit = handleSubmit(async (data) => {
		const res = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (res.ok) {
			router.push('/auth/login')
		}
	})

	return (
		<AuthForm>
			<form className={styles.containerForm()} onSubmit={onSubmit}>
				<h3 className={styles.title()}>Iniciar Sesión</h3>
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
						Inisiar Sesión
					</button>
				</div>

				<div>
					<SignInButton />
				</div>
			</form>
			<div className={styles.footerCard()}>
				<p>
					¿No tienes cuenta?{' '}
					<Link className='text-blue-600' href='/auth/register'>
						Registrate
					</Link>
				</p>
			</div>
		</AuthForm>
	)
}

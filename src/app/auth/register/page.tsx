'use client'
import SignInButton from '@/components/SignInButton/SignInButton'
import AuthForm from '@/components/ui/AuthForm'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { styles } from './styles'

export default function registerPage() {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm()

	const onSubmit = handleSubmit(async (data) => {
		try {
			const res = await fetch('/api/auth/register', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const resJson = await res.json()
			if (resJson.success) {
				toast.success('Registro exitoso')
				return router.push('/auth/login')
			}
			toast.error(`Error al registrar: ${resJson.message}`)
		} catch (error) {
			toast.error('Error al registrar')
		}
	})

	return (
		<AuthForm>
			<form className={styles.containerForm()} onSubmit={onSubmit}>
				<h3 className={styles.title()}>Registrate</h3>
				<div>
					<Input
						className='h-11'
						type='text'
						placeholder='Nombre completo'
						{...register('username', {
							required: {
								value: true,
								message: 'Tu nombre completo es requerido',
							},
							minLength: {
								value: 3,
								message: 'Tu nombre debe tener al menos 8 caracteres',
							},
							maxLength: {
								value: 40,
								message: 'Tu nombre debe tener menos de 40 caracteres',
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
						placeholder='Tu@email.com'
						{...register('email', {
							required: {
								value: true,
								message: 'Tu email es requerido',
							},
						})}
					/>
					{errors.email && (
						<span className='text-red-500'>{`${errors.email.message}`}</span>
					)}
				</div>

				<div>
					<Input
						className='h-11'
						type='password'
						placeholder='Contraseña'
						{...register('password', {
							required: {
								value: true,
								message: 'Tu contraseña es requerida',
							},
							minLength: {
								value: 7,
								message: 'Tu contraseña debe tener al menos 8 caracteres',
							},
							maxLength: {
								value: 20,
								message: 'Tu contraseña debe tener menos de 20 caracteres',
							},
						})}
					/>
					{errors.password && (
						<span className='text-red-500'>{`${errors.password.message}`}</span>
					)}
				</div>

				<div>
					<Input
						className='h-11'
						type='password'
						placeholder='Confirmar contraseña'
						{...register('confirmPassword', {
							required: {
								value: true,
								message: 'Confirma tu contraseña',
							},
							validate: (value) => {
								if (value !== watch('password')) {
									return 'Las contraseñas no coinciden'
								}
								return true
							},
						})}
					/>
					{errors.confirmPassword && (
						<span className='text-red-500'>{`${errors.confirmPassword.message}`}</span>
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

'use client'
import SignInButton from '@/components/SignInButton/SignInButton'
import AuthForm from '@/components/ui/AuthForm'
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { styles } from './styles'

export default function loginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const router = useRouter()

	const onSubmit = handleSubmit(async (data) => {
		console.warn('DEBUGPRINT[184]: page.tsx:21: data=', data)
		const res = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		})
		if (res === undefined) {
			toast.error('Error al iniciar sesión')
			return
		}

		console.warn('DEBUGPRINT[185]: page.tsx:23: res=', res)
		if (res.error) {
			toast.error(res.error)
		} else {
			router.push('/')
		}
	})

	return (
		<AuthForm>
			<form className={styles.containerForm()} onSubmit={onSubmit}>
				<h3 className={styles.title()}>Iniciar Sesión</h3>
				<div>
					<Input
						className='h-11'
						type='email'
						placeholder='Tu@email.com'
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

				<div>
					<Input
						className='h-11'
						type='password'
						placeholder='Contraseña'
						{...register('password', {
							required: {
								value: true,
								message: 'Password is requiresd',
							},
						})}
					/>
					{errors.password && (
						<span className='text-red-500'>{`${errors.password.message}`}</span>
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
					<SignInButton text='Iniciar sesión con Google' />
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

'use client'
import SignInButton from '@/components/SignInButton/SignInButton'
import AuthForm from '@/components/ui/AuthForm'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { styles } from './styles'
import { Input } from '@/components/ui/input'

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
		const resJson = res.json()
		console.log('🚀 ~ onSubmit ~ resJson:', resJson)
		if (res.ok) {
			router.push('/auth/login')
		}
	})

	return (
		<AuthForm>
			<form className={styles.containerForm()} onSubmit={onSubmit}>
				<div>
					<label htmlFor='username'>Username</label>
					<Input
						className='w-72'
						type='username'
						placeholder='Username'
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
					<label htmlFor='email'>Email</label>
					<Input
						type='email'
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
					<label htmlFor='password'>Password</label>
					<Input
						type='password'
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

				<div>
					<SignInButton />
				</div>

				<div>
					<button className='bg-primary rounded-xl p-2 w-full' type='submit'>
						Register
					</button>
				</div>
			</form>
		</AuthForm>
	)
}

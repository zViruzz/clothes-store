'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { container, containerForm } from './styles'

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
		<div className={container()}>
			<form className={containerForm()} onSubmit={onSubmit}>
				<div>
					<label htmlFor='username'>Username</label>
					<input
						type='username'
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
					<input
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
					<input
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

				<div className='bg-blue-500 rounded-xl p-2'>
					<button type='submit'>Register</button>
				</div>
			</form>
		</div>
	)
}

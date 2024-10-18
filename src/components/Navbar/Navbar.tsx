'use client'
import type { Session } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import SignInButton from '../SignInButton/SignInButton'

interface Props {
	session: Session | null
}

export default function Navbar({ session }: Props) {
	console.log('🚀 ~ Navbar ~ session:', session)

	return (
		<div className='bg-neutral-800 w-full p-7 flex justify-between sticky top-0'>
			<div className='flex gap-4'>
				<h1>Store</h1>
				<Link href='/search'>All</Link>
			</div>
			<div>
				{session ? (
					<Link href='/auth/user'>{session.user?.name}</Link>
				) : (
					<Link href='/auth/login'>Login</Link>
				)}
			</div>
		</div>
	)
}

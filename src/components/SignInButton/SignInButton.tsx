'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function SignInButton() {
	const router = useRouter()
	const handleClick = async () => {
		await signIn()
		router.push('/')
	}

	return (
		<button
			type='button'
			onClick={handleClick}
			className='bg-white py-3 px-5 rounded-2xl border font-medium text-zinc-900'
		>
			Google
		</button>
	)
}

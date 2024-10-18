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
			className='bg-white p-2 rounded text-zinc-900'
		>
			Google
		</button>
	)
}

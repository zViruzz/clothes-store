'use client'
import GoogleIcon from '@/icons/GoogleIcon'
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
			className='border rounded-lg hover:bg-neutral-100 active:bg-neutral-200 p-2 w-full flex justify-center items-center gap-3'
		>
			<GoogleIcon className='' />
			Iniciar sesión con Google
		</button>
	)
}

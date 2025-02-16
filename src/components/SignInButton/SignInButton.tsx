'use client'
import GoogleIcon from '@/icons/GoogleIcon'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function SignInButton({ text }: { text: string }) {
	const handleClick = async () => {
		await signIn('google')
	}

	return (
		<button
			type='button'
			onClick={handleClick}
			className='border rounded-lg hover:bg-neutral-100 active:bg-neutral-200 p-2 w-full flex justify-center items-center gap-3'
		>
			<GoogleIcon className='' />
			<span className='text-sm'>{text}</span>
		</button>
	)
}

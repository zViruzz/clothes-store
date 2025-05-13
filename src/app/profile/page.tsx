'use client'
import { getSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { styles } from './styles'

export default function ProfilePage() {
	const router = useRouter()

	const handleClickSignOut = () => {
		signOut()
	}

	useEffect(() => {
		const checkSession = async () => {
			const session = await getSession()
			if (!session) {
				router.push('/')
			}
		}
		checkSession()
	}, [router])

	return (
		<div className={styles.container()}>
			<div className='p-5 rounded-2xl flex flex-col gap-4 border w-50 text-left mt-8 bg-white'>
				<Link href={'/profile/my-purchases'}>Mis compras</Link>
				<button
					className='text-left text-red-500'
					type='button'
					onClick={handleClickSignOut}
				>
					Cerrar Sesion
				</button>
			</div>
		</div>
	)
}

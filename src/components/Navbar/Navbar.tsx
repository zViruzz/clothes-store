'use client'
import type { Session } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import Search from '../Search/Search'
import { styles } from './NavbarStyles'

interface Props {
	session: Session | null
}

export default function Navbar({ session }: Props) {
	return (
		<div className={styles.container()}>
			<div className={styles.logoContainer()}>
				<h1>Store</h1>
			</div>

			<div className={styles.searchContainer()}>
				<Search />
			</div>

			<div className={styles.navContainer()}>
				<Link href='/search'>Productos</Link>
				<Link href='/search'>Contacto</Link>
			</div>

			{/* <div>
				{session ? (
					<Link href='/auth/user'>{session.user?.name}</Link>
				) : (
					<Link href='/auth/login'>Login</Link>
				)}
			</div> */}
		</div>
	)
}

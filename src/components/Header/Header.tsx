'use client'
import type { Session } from 'next-auth'
import Link from 'next/link'
import React, { useState } from 'react'
import Search from '../Search/Search'
import { styles } from './HeaderStyles'
import CloseIcon from '@/icons/CloseIcon'
import MenuIcon from '@/icons/MenuIcon'
import cn from '@/utils/cn'

export default function Header() {
	const [isHiddenMenu, setIsHiddenMenu] = useState(true)
	const handleClickMenu = () => {
		setIsHiddenMenu(!isHiddenMenu)
	}

	return (
		<>
			<div className={styles.container()}>
				<div className={styles.containerHeader()}>
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

					<div className={styles.buttonContainer()}>
						<button type='button' onClick={handleClickMenu}>
							<MenuIcon
								className={cn(!isHiddenMenu && 'hidden')}
								width={38}
								height={38}
							/>
							<CloseIcon
								className={cn(isHiddenMenu && 'hidden')}
								width={38}
								height={38}
							/>
						</button>
					</div>
				</div>

				<div className={styles.menuMobile({ hidden: isHiddenMenu })}>
					<div>
						<Search />
					</div>

					<div>
						<Link href='/search'>Productos</Link>
						<Link href='/search'>Contacto</Link>
					</div>
				</div>
			</div>
		</>
	)
}

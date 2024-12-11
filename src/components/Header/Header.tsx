'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Search from '../Search/Search'
import { styles } from './HeaderStyles'
import CloseIcon from '@/icons/CloseIcon'
import MenuIcon from '@/icons/MenuIcon'
import { cn } from '@/libs/utils'
import { useCartContext } from '../context/card.context'
import CartIcon from '@/icons/CartIcon'

export default function Header() {
	const [isHiddenMenu, setIsHiddenMenu] = useState(true)
	const { cart, setShowCartBar } = useCartContext()

	const handleClickMenu = () => {
		setIsHiddenMenu(!isHiddenMenu)
	}

	const handleClickCart = () => {
		setShowCartBar(true)
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
						<Link href='/search'>Tienda</Link>
						<Link href='/search'>Contacto</Link>
						<button
							onClick={handleClickCart}
							type='button'
							className={styles.buttonCart()}
						>
							<CartIcon width={32} height={32} />
							{cart?.length > 0 && <span>{cart.length}</span>}
						</button>
					</div>

					<div className={styles.buttonContainer()}>
						<button type='button' className={styles.buttonCart()}>
							<CartIcon width={34} height={34} />
							{cart?.length > 0 && <span>{cart.length}</span>}
						</button>

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

					<div className={styles.listContainer()}>
						<Link href='/search'>Tienda</Link>
						<Link href='/search'>Contacto</Link>
					</div>
				</div>
			</div>
		</>
	)
}

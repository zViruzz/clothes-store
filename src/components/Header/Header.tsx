'use client'
import { useCartContext } from '@/context/card.context'
import CartIcon from '@/icons/CartIcon'
import CloseIcon from '@/icons/CloseIcon'
import MenuIcon from '@/icons/MenuIcon'
import { cn } from '@/libs/utils'
import { useCart } from '@/stores/cart'
import Link from 'next/link'
import { useState } from 'react'
import Search from '../Search/Search'
import { styles } from './HeaderStyles'

export default function Header() {
	const [isHiddenMenu, setIsHiddenMenu] = useState(true)
	const { setShowCartBar } = useCartContext()
	const cart = useCart((state) => state.cart)

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
							type='button'
							className={styles.buttonCart()}
							onClick={handleClickCart}
						>
							<CartIcon width={32} height={32} />
							{cart?.length > 0 && <span>{cart.length}</span>}
						</button>
					</div>

					<div className={styles.buttonContainer()}>
						<button
							type='button'
							className={styles.buttonCart()}
							onClick={handleClickCart}
						>
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

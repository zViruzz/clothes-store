'use client'
import { useCartContext } from '@/context/card.context'
import CartIcon from '@/icons/CartIcon'
import CloseIcon from '@/icons/CloseIcon'
import { useCart } from '@/stores/cart'
import { useEffect } from 'react'
import CartCard from '../CartCard/CartCard'
import { styles } from './CartBarStyles'

export default function CartBar() {
	const { showCartBar, setShowCartBar } = useCartContext()
	const cart = useCart((state) => state.cart)

	useEffect(() => {
		if (showCartBar) {
			const body = document.querySelector('body')
			if (body) {
				body.style.overflow = 'hidden'
			}
		}
		return () => {
			const body = document.querySelector('body')
			if (body) {
				body.style.overflow = ''
			}
		}
	}, [showCartBar])

	const handleClickCloseBar = () => {
		setShowCartBar(false)
	}

	if (!showCartBar) {
		return null
	}

	return (
		<div className={styles.containerBar()}>
			<div className={styles.bar()}>
				<div className={styles.barHeader()}>
					<span>Carrito</span>
					<button type='button' onClick={handleClickCloseBar}>
						<CloseIcon width={38} height={38} />
					</button>
				</div>
				<div className={styles.cartContainer()}>
					{cart.length > 0 ? (
						cart.map((item, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<CartCard key={index} {...item} />
						))
					) : (
						<div className={styles.emptyCart()}>
							<CartIcon width={98} height={98} />
							<p>No hay productos en el carrito</p>
						</div>
					)}
				</div>
				<div>
					{cart.length > 0 ? (
						<button className={styles.orderButton()} type='button'>
							Hacer pedido
						</button>
					) : (
						<button
							type='button'
							className={styles.closeButton()}
							onClick={handleClickCloseBar}
						>
							Close
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

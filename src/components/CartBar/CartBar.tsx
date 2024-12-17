'use client'
import CloseIcon from '@/icons/CloseIcon'
import { useEffect } from 'react'
import CartCard from '../CartCard/CartCard'
import { useCartContext } from '../context/card.context'
import { styles } from './CartBarStyles'
import { useCart } from '@/stores/cart'

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
					{cart.map((item, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<CartCard key={index} {...item} />
					))}
				</div>
				<div>
					<button className={styles.orderButton()} type='button'>
						Hacer pedido
					</button>
				</div>
			</div>
		</div>
	)
}

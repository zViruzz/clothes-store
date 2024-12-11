'use client'
import { useEffect } from 'react'
import { useCartContext } from '../context/card.context'
import { styles } from './CartBarStyles'
import CloseIcon from '@/icons/CloseIcon'
import Image from 'next/image'
import QuantityPicker from '../QuantityPicker/QuantityPicker'
import useQuantity from '@/hooks/useQuantity'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'
import CloseIconMin from '@/icons/CloseIconMin'

export default function CartBar() {
	const { showCartBar, cart, setShowCartBar } = useCartContext()
	const { quantity, setQuantity, handleChangeQuantity } = useQuantity()

	useEffect(() => {
		const body = document.querySelector('body')

		if (body) {
			body.style.overflow = 'hidden'
		}
	}, [])

	const handleChangeSelectSize = (value: string) => {}

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
					{cart.map((item) => (
						<div key={item.id} className={styles.cart()}>
							<button className={styles.deleteButton()} type='button'>
								<CloseIconMin width={25} height={25} />
							</button>
							<div className={styles.cartImage()}>
								<Image src={item.url_images[0]} width={50} height={50} alt={item.name} />
							</div>
							<div className={styles.cartEdit()}>
								<div>
									<span className={styles.title()}>{item.title}</span>
									<span className={styles.price()}>${item.price}</span>
								</div>
								<div className={styles.quantityContainer()}>
									<QuantityPicker
										setQuantity={setQuantity}
										quantity={quantity}
										handleChangeQuantity={handleChangeQuantity}
									/>
								</div>
								<div className={styles.selectContainer()}>
									<Select>
										<SelectTrigger className='w-[120px]'>
											<SelectValue placeholder='Color' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='1'>1</SelectItem>
											<SelectItem value='2'>2</SelectItem>
											<SelectItem value='3'>3</SelectItem>
											<SelectItem value='4'>4</SelectItem>
										</SelectContent>
									</Select>
									<Select onValueChange={handleChangeSelectSize}>
										<SelectTrigger className='w-[120px]'>
											<SelectValue placeholder='Size' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='1'>1</SelectItem>
											<SelectItem value='2'>2</SelectItem>
											<SelectItem value='3'>3</SelectItem>
											<SelectItem value='4'>4</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

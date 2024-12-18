import useQuantity from '@/hooks/useQuantity'
import CloseIconMin from '@/icons/CloseIconMin'
import Image from 'next/image'
import type { CartProduct } from '../../../types'
import QuantityPicker from '../QuantityPicker/QuantityPicker'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'
import { styles } from './CartCardStyles'
import { useCart } from '@/stores/cart'

interface Props extends CartProduct {}

export default function CartCard({
	id,
	category,
	color,
	name,
	price,
	title,
	size,
	url_images,
	quantity,
}: Props) {
	const {
		quantityState,
		setQuantity,
		handleChangeQuantity,
		handleClickDecrement,
		handleClickIncrement,
	} = useQuantity(quantity)
	const removeProductFromCart = useCart((state) => state.removeProductFromCart)

	const handleClickRemove = () => {
		const product: CartProduct = {
			id,
			category,
			color,
			name,
			price,
			title,
			size,
			url_images,
			quantity,
		}
		removeProductFromCart(product)
	}

	const handleChangeSelectSize = (value: string) => {
		setQuantity(Number(value))
	}

	return (
		<div className={styles.cart()}>
			<button type='button' className={styles.deleteButton()} onClick={handleClickRemove}>
				<CloseIconMin width={25} height={25} />
			</button>
			<div className={styles.cartImage()}>
				<Image src={url_images[0]} width={70} height={70} alt={name} />
			</div>
			<div className={styles.cartEdit()}>
				<div>
					<span className={styles.title()}>{title}</span>
					<span className={styles.price()}>${price}</span>
				</div>
				<div className={styles.quantityContainer()}>
					<QuantityPicker
						setQuantity={setQuantity}
						quantity={quantityState}
						handleChangeQuantity={handleChangeQuantity}
						handleClickDecrement={handleClickDecrement}
						handleClickIncrement={handleClickIncrement}
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
							<SelectValue placeholder={`Size ${size}`} />
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
	)
}

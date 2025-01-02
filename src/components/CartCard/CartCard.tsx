import useQuantity from '@/hooks/useQuantity'
import CloseIconMin from '@/icons/CloseIconMin'
import Image from 'next/image'
import type { CartProduct, Product } from '../../../types'
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
import { useEffect, useState } from 'react'
import { getProductAction } from '@/action/getProductAction'

interface Props extends CartProduct {}

export default function CartCard(product: Props) {
	const removeProductFromCart = useCart((state) => state.removeProductFromCart)
	const changeSizes = useCart((state) => state.changeSizes)
	const { controlQuantity, handleClickDecrement, handleClickIncrement } =
		useQuantity(product)
	const [productData, setProductData] = useState<Product>()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getProductAction(product.id)
				if (data instanceof Error) return
				setProductData(data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [product])

	const handleClickRemove = () => {
		removeProductFromCart(product)
	}

	const handleChangeSelectSize = (value: string) => {
		changeSizes(product, value)
	}

	return (
		<div className={styles.cart()}>
			<button type='button' className={styles.deleteButton()} onClick={handleClickRemove}>
				<CloseIconMin width={25} height={25} />
			</button>
			<div className={styles.cartImage()}>
				<Image src={product.url_images[0]} width={70} height={70} alt={product.name} />
			</div>
			<div className={styles.cartEdit()}>
				<div>
					<span className={styles.title()}>{product.title}</span>
					<span className={styles.price()}>${product.price}</span>
				</div>
				<div className={styles.quantityContainer()}>
					<QuantityPicker
						quantity={product.quantity}
						controlQuantity={controlQuantity}
						handleClickDecrement={handleClickDecrement}
						handleClickIncrement={handleClickIncrement}
					/>
				</div>
				<div className={styles.selectContainer()}>
					<Select onValueChange={handleChangeSelectSize}>
						<SelectTrigger className='w-[120px]'>
							<SelectValue placeholder={`Talla ${product.size}`} />
						</SelectTrigger>
						<SelectContent>
							{productData?.sizes.map((size) => (
								<SelectItem key={size} value={size}>
									Talla {size}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	)
}

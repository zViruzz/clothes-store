'use client'
import { colorTranslator } from '@/utils/colorTranslator'
import type { Product } from '../../../types'
import { styles } from './ProductOptionsStyles'
import TruckIcon from '@/icons/TruckIcon'
import { useCartContext } from '../context/card.context'
import { useState } from 'react'
import { cn } from '@/libs/utils'
import QuantityPicker from '../QuantityPicker/QuantityPicker'
import useQuantity from '@/hooks/useQuantity'

interface Props {
	product: Product
}

export default function ProductOptions({ product }: Props) {
	const [color, setColor] = useState(product.color_scheme[0])
	const [size, setSize] = useState('S')
	const { addProductCart } = useCartContext()
	const {
		quantityState,
		setQuantity,
		handleChangeQuantity,
		handleClickDecrement,
		handleClickIncrement,
	} = useQuantity(5)

	const handleClickColor = (color: string) => {
		setColor(color)
	}
	const handleClickSize = (size: string) => {
		setSize(size)
	}

	const handleClickAddProductCart = () => {
		addProductCart({
			id: product.id,
			name: product.name,
			title: product.title,
			category: product.category,
			price: product.price,
			url_images: product.url_images,
			quantity: quantityState,
			color,
			size,
		})
	}

	return (
		<div className={styles.borderTop()}>
			<div>
				<p>{`Color : ${colorTranslator(product.color_scheme).join(' ')}`}</p>
				<div className={styles.colorSchemeContainer()}>
					{product.color_scheme.map((color) => (
						<button
							type='button'
							className={cn(styles.button(), `bg-${color.toLowerCase()}-500`)}
							key={color}
							onClick={() => handleClickColor(color)}
						/>
					))}
				</div>
			</div>

			<div>
				<p>Talla : </p>
				<div className={styles.sizeContainer()}>
					<button
						type='button'
						onClick={() => handleClickSize('S')}
						className={styles.button()}
					>
						S
					</button>
					<button
						type='button'
						onClick={() => handleClickSize('M')}
						className={styles.button()}
					>
						M
					</button>
					<button
						type='button'
						onClick={() => handleClickSize('XS')}
						className={styles.button()}
					>
						XS
					</button>
				</div>
			</div>

			<div>
				<p>{'Cantidad : '}</p>
				<div className={styles.quantityContainer()}>
					<QuantityPicker
						quantity={quantityState}
						setQuantity={setQuantity}
						handleChangeQuantity={handleChangeQuantity}
						handleClickIncrement={handleClickIncrement}
						handleClickDecrement={handleClickDecrement}
					/>
				</div>
			</div>

			<div>
				<button
					type='button'
					className={styles.buttonCart()}
					onClick={handleClickAddProductCart}
				>
					Agregar a carrito
				</button>
			</div>
			<div className={styles.shippingInfo()}>
				<p>Envios a toda Argentina</p>
				<TruckIcon className={styles.truckIcon()} />
			</div>
		</div>
	)
}

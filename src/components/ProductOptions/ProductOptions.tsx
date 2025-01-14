'use client'
import TruckIcon from '@/icons/TruckIcon'
import type { Product } from '@/libs/schemas/checkout'
import { cn } from '@/libs/utils'
import { useCart } from '@/stores/cart'
import { colorTranslator } from '@/utils/colorTranslator'
import { useState } from 'react'
import QuantityPicker from '../QuantityPicker/QuantityPicker'
import { styles } from './ProductOptionsStyles'

interface Props {
	product: Product
}

export default function ProductOptions({ product }: Props) {
	const [color, setColor] = useState(product.color_scheme[0])
	const [size, setSize] = useState(product.sizes[0])
	const [quantity, setQuantity] = useState(5)
	const addProductCart = useCart((state) => state.addProductCart)

	const handleClickColor = (color: string) => {
		setColor(color)
	}
	const handleClickSize = (size: string) => {
		setSize(size)
	}

	const handleClickAddProductCart = () => {
		addProductCart({
			id: product.id,
			cartId: window.crypto.randomUUID(),
			name: product.name,
			title: product.title,
			category: product.category,
			price: product.price,
			url_images: product.url_images,
			quantity,
			color,
			size,
		})
	}
	const controlQuantity = (value: number) => {
		if (value >= 0) {
			setQuantity(value)
		}
	}

	const handleClickIncrement = () => {
		setQuantity(quantity + 5)
	}

	const handleClickDecrement = () => {
		if (quantity <= 5) return
		setQuantity(quantity - 5)
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
					{product.sizes.map((size) => (
						<button
							type='button'
							className={styles.button()}
							key={size}
							onClick={() => handleClickSize(size)}
						>
							{size}
						</button>
					))}
				</div>
			</div>

			<div>
				<p>{'Cantidad : '}</p>
				<div className={styles.quantityContainer()}>
					<QuantityPicker
						quantity={quantity}
						controlQuantity={controlQuantity}
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

'use client'
import { colorTranslator } from '@/utils/colorTranslator'
import type { Product } from '../../../types'
import { styles } from './ProductOptionsStyles'
import TruckIcon from '@/icons/TruckIcon'
import { useCartContext } from '../context/card.context'
import { useState } from 'react'
import { cn } from '@/libs/utils'

interface Props {
	product: Product
}

export default function ProductOptions({ product }: Props) {
	const [color, setColor] = useState(product.color_scheme[0])
	const [size, setSize] = useState('')
	const [quantity, setQuantity] = useState(1)
	const { addProductCart } = useCartContext()

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
			color,
			size,
			quantity,
		})
	}

	const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value)

		if (value >= 0) {
			setQuantity(value)
		}
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
						onClick={() => handleClickSize('S')}
						className={styles.button()}
					>
						M
					</button>
					<button
						type='button'
						onClick={() => handleClickSize('S')}
						className={styles.button()}
					>
						XS
					</button>
				</div>
			</div>

			<div>
				<p>{'Cantidad : '}</p>
				<div className={styles.quantityContainer()}>
					<button
						type='button'
						className={styles.button()}
						onClick={() => setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))}
					>
						-
					</button>
					<input
						type='text'
						className={styles.inputQuantity()}
						onChange={handleChangeQuantity}
						value={quantity}
					/>
					<button
						type='button'
						className={styles.button()}
						onClick={() => setQuantity((prev) => prev + 1)}
					>
						+
					</button>
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

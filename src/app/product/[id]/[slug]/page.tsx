import ImagesPreview from '@/components/ImagesPreview/ImagesPreview'
import { getProductById } from '@/services/product'
import { colorTranslator } from '@/utils/colorTranslator'
import { TruckIcon } from 'lucide-react'
import { styles } from './styles'

interface Props {
	params: Promise<{ id: string; slug: string }>
}

export default async function SlugPage({ params }: Props) {
	const { id, slug } = await params
	const product = await getProductById(Number(id))

	if (product instanceof Error) {
		throw new Error('Product not found')
	}

	return (
		<div>
			<section className={styles.container()}>
				<ImagesPreview product={product} />
				<div>
					<div>
						<h1 className={styles.title()}>{product.title}</h1>
						<p className={styles.description()}>{product.description}</p>
					</div>
					<div className={styles.borderTop()}>
						<div>
							<p>{`Color : ${colorTranslator(product.color_scheme).join(' ')}`}</p>
							<div className={styles.colorSchemeContainer()}>
								{product.color_scheme.map((color) => (
									<div
										className={`${styles.colorBox()} bg-${color.toLowerCase()}-500`}
										key={color}
									/>
								))}
							</div>
						</div>
						<div>
							<p>Talla : </p>
							<div className={styles.sizeContainer()}>
								<div className={styles.sizeBox()}>S</div>
								<div className={styles.sizeBox()}>M</div>
								<div className={styles.sizeBox()}>XS</div>
							</div>
						</div>

						<div>
							<button type='button' className={styles.button()}>
								Agregar a carrito
							</button>
						</div>
						<div className={styles.shippingInfo()}>
							<p>Envios a toda Argentina</p>
							<TruckIcon className={styles.truckIcon()} />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

import ImagesPreview from '@/components/ImagesPreview/ImagesPreview'
import { getProductById } from '@/services/product'
import { styles } from './styles'
import ProductOptions from '@/components/ProductOptions/ProductOptions'

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
						<div className={styles.priceContainer()}>
							<span className={styles.price()}>{`$ ${product.price}`}</span>
							<span className={styles.currency()}>ARS</span>
						</div>
						<p className={styles.description()}>{product.description}</p>
					</div>
					<ProductOptions product={product} />
				</div>
			</section>
		</div>
	)
}

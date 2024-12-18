import type { Product } from '../../../types'
import Card from '../Card/Card'

interface Props {
	products: Product[]
}

export default function ProductGridItem({ products }: Props) {
	return (
		<>
			{products.map((product) => (
				<li key={product.id}>
					<Card id={product.id} name={product.name} title={product.title} price={3000} />
				</li>
			))}
		</>
	)
}

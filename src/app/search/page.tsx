import GridView from '@/components/GridView/GridView'
import ProductGridItem from '@/components/ProductGridItem/ProductGridItem'
import { getProduct, getProductByColor } from '@/services/product'
import { styles } from './styles'

interface Props {
	searchParams: Promise<{
		[key: string]: string | undefined
	}>
}

export default async function pageSearch({ searchParams }: Props) {
	const { q, color } = await searchParams
	const products =
		color === undefined
			? await getProduct({ query: q })
			: await getProductByColor({ color })

	return (
		<>
			<div>{q && <p className={styles.textSearch()}>Busqueda: {q}</p>}</div>
			<GridView>
				<ProductGridItem products={products} />
			</GridView>
		</>
	)
}

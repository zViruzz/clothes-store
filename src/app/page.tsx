import Card from '@/components/Card/Card'
import Carousel from '@/components/Carousel/Carousel'
import Footer from '@/components/Footer'
import { styles } from './styles'

export default function Home() {
	return (
		<>
			<section className={styles.gridContainer()}>
				<Card
					className={styles.gridProductMain()}
					typeStyle='main'
					title='Pantalon de algodon'
					price={60000}
				/>
				<Card
					className={styles.gridProductItem()}
					title='Pantalon de algodon'
					price={1000}
				/>
				<Card
					className={styles.gridProductItem()}
					title='Pantalon de algodon'
					price={1000}
				/>
			</section>

			<Carousel />

			<Footer />
		</>
	)
}

import Card from '@/components/Card/Card'
import Carousel from '@/components/Carousel/Carousel'
import Footer from '@/components/Footer'
import { styles } from './styles'

export default function Home() {
	return (
		<>
			<section className={styles.gridContainer()}>
				<Card
					id='1'
					className={styles.gridProductMain()}
					typeStyle='main'
					name='pantalon-de-algodon'
					title='Pantalon de algodon'
					price={60000}
				/>
				<Card
					id='2'
					className={styles.gridProductItem()}
					name='pantalon-de-algodon'
					title='Pantalon de algodon'
					price={1000}
				/>
				<Card
					id='3'
					className={styles.gridProductItem()}
					name='pantalon-de-algodon'
					title='Pantalon de algodon'
					price={1000}
				/>
			</section>

			<Carousel />

			<Footer />
		</>
	)
}

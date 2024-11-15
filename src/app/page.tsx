import Footer from '@/components/Footer'
import { styles } from './styles'
import Card from '@/components/Card/Card'

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

			<section className={styles.featured()}>
				<div className={styles.subheading()}>
					<h2>Destacados</h2>
					<div className={styles.line()} />
				</div>
				<div className={styles.cardContainer()}>
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
					<Card
						className={styles.gridProductItem()}
						title='Pantalon de algodon'
						price={1000}
					/>
				</div>
			</section>

			<Footer />
		</>
	)
}

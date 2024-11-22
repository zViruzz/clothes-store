'use client'
import Card from '../Card/Card'
import { styles } from './CarouselStyles'

export default function Carousel() {
	return (
		<section className={styles.featured()}>
			<div className={styles.subheading()}>
				<h2>Destacados</h2>
				<div className={styles.line()} />
			</div>
			<div className={styles.cardContainer()}>
				<ul className={styles.layoutContainer()}>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
						<li key={i}>
							<Card title={'Camisa'} price={1000} />
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

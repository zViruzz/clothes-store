import Footer from '@/components/Footer'
import Link from 'next/link'
import { styles } from './styles'

export default function LayoutSearch({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className={styles.layoutContainer()}>
				<div className={styles.sideNav()}>
					<nav className={styles.navContainer()}>
						<h3 className={styles.navTitle()}>Colecciones</h3>
						<ul>
							<li>
								<Link href='/search/pants'>Pantalones</Link>
							</li>
							<li>
								<Link href='/search/shirt'>Camisetas</Link>
							</li>
							<li>
								<Link href='/search/dress'>Vestidos</Link>
							</li>
							<li>
								<Link href='/search/jarket'>Camperas</Link>
							</li>
							<li>
								<Link href='/search/short'>Short</Link>
							</li>
						</ul>
					</nav>
				</div>

				<section className={styles.sectionWrapper()}>{children}</section>

				<div className={styles.filterNav()}>
					<nav className={styles.navContainer()}>
						<p className={styles.navTitle()}>Filtrar</p>
						<ul>
							<li>Rosa</li>
							<li>Azul</li>
							<li>Blanco</li>
							<li>Amarillo</li>
						</ul>
					</nav>
				</div>
			</div>
			<Footer />
		</>
	)
}

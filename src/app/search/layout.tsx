import Footer from '@/components/Footer'
import Link from 'next/link'
import { styles } from './styles'
import Collections from '@/components/layout/search/Collections'

export default function LayoutSearch({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className={styles.layoutContainer()}>
				<div className={styles.sideNav()}>
					<div className={styles.selectContainer()}>
						<Collections />
					</div>
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
			</div>
			<Footer />
		</>
	)
}

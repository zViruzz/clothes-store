import Footer from '@/components/Footer'
import Link from 'next/link'
import { styles } from './styles'

export default function LayoutSearch({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className={styles.layoutContainer()}>
				<div className={styles.sideNav()}>
					<nav className={styles.navContainer()}>
						<h3 className={styles.navTitle()}>Collections</h3>
						<ul>
							<li>
								<Link href='/search/huawait'>Huawait</Link>
							</li>
							<li>
								<Link href='/search/google'>Google</Link>
							</li>
							<li>
								<Link href='/search/lenovo'>Lenovo</Link>
							</li>
							<li>
								<Link href='/search/samsung'>Samsung</Link>
							</li>
							<li>
								<Link href='/search/one-plust'>OnePlus</Link>
							</li>
							<li>
								<Link href='/search/apple'>Apple</Link>
							</li>
						</ul>
					</nav>
				</div>

				<section className={styles.sectionWrapper()}>{children}</section>

				<div className={styles.filterNav()}>
					<nav className={styles.navContainer()}>
						<p className={styles.navTitle()}>FilterList</p>
						<ul>
							<li>Rosa</li>
							<li>Green</li>
							<li>Blue</li>
							<li>Yellow</li>
						</ul>
					</nav>
				</div>
			</div>
			<Footer />
		</>
	)
}

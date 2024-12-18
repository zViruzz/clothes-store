import FacebookIcon from '@/icons/FacebookIcon'
import TiktokIcon from '@/icons/TiktokIcon'
import { styles } from './FooterStyles'

export default function Footer() {
	return (
		<footer className={styles.container()}>
			<div className={styles.content()}>
				<div className={styles.contentLinks()}>
					<h4>Paginas</h4>
					<ul>
						<li>
							<a href='/'>Inicio</a>
						</li>
						<li>
							<a href='/'>Contacto</a>
						</li>
						<li>
							<a href='/'>Tienda</a>
						</li>
					</ul>
				</div>

				<div className={styles.contentLinks()}>
					<h4>Redes</h4>
					<ul>
						<li>
							<a href='/'>
								<FacebookIcon width={27} height={27} />
								Facebook
							</a>
						</li>
						<li>
							<a href='/'>
								<TiktokIcon width={21} height={21} />
								Tiktok
							</a>
						</li>
					</ul>
				</div>

				<div className={styles.contentAbout()}>
					<h3>Logo</h3>
					<p>
						Nuestra tienda, con una trayectoria de 5 años en el mercado, se ha consolidado
						como referente en el sector de la moda infantil. Ofrecemos una cuidada
						selección de prendas para bebés, priorizando la calidad, el confort.
					</p>
				</div>
			</div>

			<div className={styles.copyright()}>
				<div>© 2024 Vaseb. All rights reserved.</div>
				<div>Designed by Nixar. Powered by Webflow.</div>
			</div>
		</footer>
	)
}

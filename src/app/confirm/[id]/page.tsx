import prisma from '@/libs/prisma'
import { styles } from './styles'

interface Props {
	params: Promise<{ id: string }>
}

export default async function ConfirmPage({ params }: Props) {
	const { id } = await params

	const res = await prisma.purchase.findUnique({
		where: {
			id,
		},
	})

	return (
		<div className={styles.container()}>
			<h2 className={styles.title()}>Pedido</h2>
			<div className={styles.card()}>
				<div>
					<p className={styles.text()}>Pedido #{res?.id}</p>
				</div>

				<div className={styles.containerButtons()}>
					<button className={styles.button()} type='button'>
						Ver mas
					</button>
					<button className={styles.button()} type='button'>
						Comprar mas
					</button>
				</div>
			</div>
		</div>
	)
}

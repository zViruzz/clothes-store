import { getServerSession } from 'next-auth'
import { styles } from './styles'
import prisma from '@/libs/prisma'

const orders = [
	{ id: 1, date: '2025-01-25', status: 'Enviado', total: 50.0 },
	{ id: 2, date: '2025-01-20', status: 'Pendiente', total: 30.0 },
	{ id: 3, date: '2025-01-15', status: 'Completado', total: 100.0 },
]

export default async function ProfilePage() {
	const session = await getServerSession()
	const user = await prisma.user.findUnique({
		where: {
			email: session?.user?.email ?? '',
			name: session?.user?.name ?? '',
		},
	})

	const purchase = await prisma.purchase.findMany({
		where: {
			userId: user?.id,
		},
		include: {
			cartItems: true,
		},
	})
	console.warn('DEBUGPRINT[119]: page.tsx:20: purchase=', purchase)

	return (
		<div className={styles.container()}>
			<h1 className='text-2xl font-bold mb-4'>Pedidos</h1>
			<table className={styles.table()}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Fecha</th>
						<th>Estado</th>
						<th>Cantidad</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{purchase.map((order) => (
						<tr key={order.id}>
							<td>{order.id}</td>
							<td>{`${order.createdAt.getDate()}/${order.createdAt.getMonth()}/${order.createdAt.getFullYear()}`}</td>
							<td>{order.status}</td>
							<td>{order.cartItems.length}</td>
							<td>
								<button type='button' className={styles.detailsButton()}>
									Ver más detalles
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

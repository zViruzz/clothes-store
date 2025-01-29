import prisma from '@/libs/prisma'
import { getServerSession } from 'next-auth'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { styles } from './styles'
import Link from 'next/link'
import { Eye } from 'lucide-react'

export default async function MyPurchasesPage() {
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

	// console.warn('DEBUGPRINT[119]: page.tsx:20: purchase=', purchase)

	return (
		<div className='container mx-auto px-4 py-8'>
			<h2 className='text-2xl font-bold mb-6'>Historial de Pedidos</h2>
			<div className='bg-white shadow-md rounded-lg overflow-hidden'>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className='w-[100px]'>ID</TableHead>
							<TableHead>Fecha</TableHead>
							<TableHead>Estado</TableHead>
							<TableHead className='text-right'>Cantidad</TableHead>
							<TableHead className='text-right'>Acciones</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{purchase.map((order) => (
							<TableRow key={order.id}>
								<TableCell className='font-medium'>{order.id}</TableCell>
								<TableCell>{`${order.createdAt.getDate()}/${order.createdAt.getMonth()}/${order.createdAt.getFullYear()}`}</TableCell>
								<TableCell>
									<span
										className={`px-2 py-1 rounded-full text-xs font-semibold ${
											order.status === 'SHIPPED'
												? 'bg-green-100 text-green-800'
												: order.status === 'PROCESSING'
													? 'bg-yellow-100 text-yellow-800'
													: order.status === 'DELIVERED'
														? 'bg-blue-100 text-blue-800'
														: 'bg-gray-100 text-gray-800'
										}`}
									>
										{order.status}
									</span>
								</TableCell>
								<TableCell className='text-right'>{order.cartItems.length}</TableCell>
								<TableCell className='text-right flex justify-end'>
									<Link
										href={`/profile/my-purchases/${order.id}`}
										className='border flex items-center justify-center w-32 h-11 rounded'
									>
										<Eye className='h-4 w-4 mr-2' />
										Ver detalles
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			{/* <div className='flex items-center justify-between mt-4'> */}
			{/* 	<Button variant='outline' size='sm'> */}
			{/* 		<ChevronLeft className='h-4 w-4 mr-2' /> */}
			{/* 		Anterior */}
			{/* 	</Button> */}
			{/* 	<span className='text-sm text-gray-600'>Página 1 de 3</span> */}
			{/* 	<Button variant='outline' size='sm'> */}
			{/* 		Siguiente */}
			{/* 		<ChevronRight className='h-4 w-4 ml-2' /> */}
			{/* 	</Button> */}
			{/* </div> */}
		</div>
	)
}

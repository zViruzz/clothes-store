import prisma from '@/libs/prisma'
import { styles } from './styles'
import { ArrowLeft } from 'lucide-react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

interface Props {
	params: Promise<{ purchaseId: string }>
}

export default async function ConfirmPage({ params }: Props) {
	const { purchaseId } = await params

	const purchase = await prisma.purchase.findUnique({
		where: {
			id: purchaseId,
		},
		include: {
			cartItems: true,
		},
	})

	console.warn('DEBUGPRINT[121]: page.tsx:12: purchase=', purchase)
	if (!purchase) {
		return (
			<div className='container mx-auto px-4 py-8'>
				<h2 className='text-2xl font-bold mb-6'>Pedido no encontrado</h2>
			</div>
		)
	}

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='grid gap-6 md:grid-cols-3 '>
				<div className='md:col-span-2 border border-gray-200 p-6 rounded-xl bg-white shadow-md'>
					<div>
						<div className='text-xl font-medium mb-3'>
							Detalles del Pedido #{purchase.id}
						</div>
					</div>
					<div>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className='w-[40%]'>Producto</TableHead>
									<TableHead>Precio</TableHead>
									<TableHead>Talla</TableHead>
									<TableHead className='text-right'>Cantidad</TableHead>
									<TableHead className='text-right'>Subtotal</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{purchase.cartItems.map((item) => (
									<TableRow key={item.id}>
										<TableCell className='font-medium'>{item.title}</TableCell>
										<TableCell>${item.price.toFixed(2)}</TableCell>
										<TableCell>{item.size}</TableCell>
										<TableCell className='text-right'>{item.quantity}</TableCell>
										<TableCell className='text-right'>
											${(item.price * item.quantity).toFixed(2)}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</div>
			</div>
		</div>
	)
}

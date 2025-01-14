'use client'
import { PaymentDataProvider } from '@/context/paymentData.context'
import { cn } from '@/libs/utils'
import { useCart } from '@/stores/cart'
import { usePathname, useRouter } from 'next/navigation'
import { styles } from './styles'

export default function ProductBuy({ children }: { children: React.ReactNode }) {
	const cart = useCart((state) => state.cart)
	const currentRoute = usePathname()
	const router = useRouter()

	const total = cart.reduce((acc, product) => acc + product.price, 0)

	return (
		<PaymentDataProvider>
			<div className={styles.container()}>
				<div className={styles.title()}>
					<h2>Pedido</h2>
				</div>

				<div className={styles.steps()}>
					<button
						type='button'
						className={styles.step()}
						onClick={() => router.push('/product/checkout/address')}
					>
						<span
							className={styles.stepNum({ activated: currentRoute.includes('address') })}
						>
							1
						</span>
						<div>Entrega</div>
					</button>
					<span className={styles.line()} />
					<button
						type='button'
						className={styles.step()}
						onClick={() => router.push('/product/checkout/pay')}
					>
						<span className={styles.stepNum({ activated: currentRoute.includes('pay') })}>
							2
						</span>
						<div>Pago</div>
					</button>
					<span className={styles.line()} />
					<button
						type='button'
						className={styles.step()}
						onClick={() => router.push('/product/checkout/summary')}
					>
						<span
							className={styles.stepNum({ activated: currentRoute.includes('summary') })}
						>
							3
						</span>
						<div>Resumen</div>
					</button>
				</div>

				<div className={styles.cardContainer()}>
					<div className={styles.card()}>{children}</div>

					<div className={cn(styles.card(), styles.cardSummary())}>
						<div>
							<h3 className={styles.cardTitle()}>Resumen de carrito</h3>
						</div>

						<div className={styles.cardProductsContainer()}>
							{cart.map((product) => (
								<div key={product.cartId} className={styles.cardProduct()}>
									<div className={styles.cardSummaryValue()}>
										<p>{product.title}</p>
										<p className={styles.cardSummaryPrice()}>$ {product.price}</p>
									</div>
									<div className={styles.cardSummaryLabel()}>
										<div>Cantidad: {product.quantity}</div>
										<div>Talla: {product.size}</div>
									</div>
								</div>
							))}
						</div>

						<div className={styles.total()}>
							<div>Total</div>
							<div>$ {total}</div>
						</div>
					</div>
				</div>
			</div>
		</PaymentDataProvider>
	)
}

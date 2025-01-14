import Background from '@/components/Background/Background'
import CartBar from '@/components/CartBar/CartBar'
import Header from '@/components/Header/Header'
import { CartProvider } from '@/context/card.context'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Quicksand({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='relative'>
			<body className={inter.className}>
				<CartProvider>
					<Toaster position='bottom-center' richColors />
					<CartBar />
					<Background />
					<Header />
					<main>{children}</main>
				</CartProvider>
			</body>
		</html>
	)
}

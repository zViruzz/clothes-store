export default function authLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className='grid place-content-center min-h-[91vh]  w-screen'>
			{children}
		</main>
	)
}

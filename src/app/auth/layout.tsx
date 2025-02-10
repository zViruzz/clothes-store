export default function authLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className='flex justify-center items-center min-h-[91vh] w-full'>
			{children}
		</main>
	)
}

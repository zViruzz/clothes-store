import Footer from '@/components/Footer'

export default function Home() {
	return (
		<>
			<section className='mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]'>
				<div className='md:col-span-4 md:row-span-2 border rounded-2xl border-neutral-600'>
					<a
						className='relative block aspect-square h-full w-full'
						href='/'
					>
						gol
					</a>
				</div>
				<div className='md:col-span-2 md:row-span-1 border rounded-2xl border-neutral-600'>
					<a
						className='relative block aspect-square h-full w-full'
						href='/'
					>
						gol
					</a>
				</div>
				<div className='md:col-span-2 md:row-span-1 border rounded-2xl border-neutral-600'>
					<a
						className='relative block aspect-square h-full w-full'
						href='/'
					>
						gol
					</a>
				</div>
			</section>
			<section className='mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]'>
				<div className='md:col-span-4 md:row-span-2 border rounded-2xl border-neutral-600'>
					<a
						className='relative block aspect-square h-full w-full'
						href='/'
					>
						gol
					</a>
				</div>
				<div className='md:col-span-2 md:row-span-1 border rounded-2xl border-neutral-600'>
					<a
						className='relative block aspect-square h-full w-full'
						href='/'
					>
						gol
					</a>
				</div>
				<div className='md:col-span-2 md:row-span-1 border rounded-2xl border-neutral-600'>
					<a
						className='relative block aspect-square h-full w-full'
						href='/'
					>
						gol
					</a>
				</div>
			</section>

			<Footer />
		</>
	)
}

import Footer from '@/components/Footer'
import Link from 'next/link'

export default function LayoutSearch({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white'>
				<div className='order-first w-full flex-none md:max-w-[125px]'>
					<nav className='hidden md:flex flex-col'>
						<p className='text-xl'>Collections</p>
						<ul>
							<li>
								<Link href='/search/huawait'>Huawait</Link>
							</li>
							<li>
								<Link href='/search/google'>Google</Link>
							</li>
							<li>
								<Link href='/search/lenovo'>Lenovo</Link>
							</li>
							<li>
								<Link href='/search/samsung'>Samsung</Link>
							</li>
							<li>
								<Link href='/search/one-plust'>OnePlus</Link>
							</li>
							<li>
								<Link href='/search/apple'>Apple</Link>
							</li>
						</ul>
					</nav>
				</div>
				<section className='order-last min-h-screen w-full md:order-none'>
					ChildrenWrapper
					{children}
				</section>

				<div className='order-none flex-none md:order-last md:w-[125px]'>
					<nav className='hidden md:flex flex-col'>
						<p className='text-xl'>FilterList</p>
						<ul>
							<li>Rosa</li>
							<li>Green</li>
							<li>Blue</li>
							<li>Yellow</li>
						</ul>
					</nav>
				</div>
			</div>
			<Footer />
		</>
	)
}

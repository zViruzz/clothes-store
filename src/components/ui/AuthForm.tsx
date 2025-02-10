export default function AuthForm({ children }: { children: React.ReactNode }) {
	return (
		<section className='border rounded-2xl bg-white md:w-[27rem] w-[85%]'>
			{children}
		</section>
	)
}

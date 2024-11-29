export default function Background() {
	return (
		<div className='absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden'>
			<div className='relative w-full h-full'>
				<span className='bg-secondary lg:w-[24%] md:w-[40%] w-[80%] aspect-square block rounded-full absolute left-[11vw] md:top-[6vh] top-[20vh]' />
				<span className='bg-primary lg:w-[50%] md:w-[75%] w-[125%] aspect-square block rounded-full absolute md:top-[44vh] top-[60vh]  right-[-5vw]' />
				<span className='bg-tertiary lg:w-[34%] md:w-[50%] w-[95%] aspect-square block rounded-full absolute md:top-[110vh] top-[175vh] left-[-5vw]' />
			</div>
		</div>
	)
}

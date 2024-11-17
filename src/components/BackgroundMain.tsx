'use client'
import Image from 'next/image'

export default function BackgroundMain() {
	return (
		<Image
			src='/bg.png'
			className='absolute object-top object-none flex h-full'
			alt='background'
			width={1573}
			height={1394}
		/>
	)
}

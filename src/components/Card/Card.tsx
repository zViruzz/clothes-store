'use client'
import { cn } from '@/libs/utils'
import Image from 'next/image'
import Link from 'next/link'
import { styles } from './CardStyles'
import { useState } from 'react'
import { isLoadingImage } from '@/app/styles/variants'

interface Props {
	id: number
	price?: number
	name: string
	title: string
	className?: string
	typeStyle?: 'main' | 'default'
}

export default function Card({
	id,
	name,
	title,
	className,
	typeStyle = 'default',
}: Props) {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<div className={cn(styles.container(), className)}>
			<Link className={styles.link()} href={`/product/${id}/${name}`}>
				<Image
					draggable='false'
					src='https://acdn.mitiendanube.com/stores/211/292/products/set-de-nacimiento-pajaritos-coral-gubee-edeb4bd944a3dee91d17127006129682-480-0.jpg'
					className={cn(styles.image(), isLoadingImage({ isLoading }))}
					alt='shoes'
					width={900}
					height={900}
					onLoad={() => {
						setIsLoading(false)
					}}
				/>
				<div>
					<div className={styles.overlay()}>
						<div className={styles.labelContainer()}>
							<div className={styles.label({ type: typeStyle })}>
								<div className={styles.labelTitle()}>{title}</div>
								{/* <span className={styles.labelPrice()}>${price}</span> */}
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

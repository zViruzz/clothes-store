'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import type { Product } from '../../../types'
import { styles } from './ImagesPreviewStyles'
import { isLoadingImage } from '@/app/styles/variants'
import { cn } from '@/libs/utils'

export default function ImagesPreview({ product }: { product: Product }) {
	const [url, setUrl] = useState(product.url_images[0])

	const [isLoading, setIsLoading] = useState(true)
	const handleClick = (image: string) => setUrl(image)

	return (
		<div className={styles.imagesPreviewContainer()}>
			<div>
				<Image
					className={cn(styles.mainImage(), isLoadingImage({ isLoading }))}
					src={url}
					width={600}
					height={600}
					priority={true}
					alt='alt'
					sizes='(min-width: 1024px) 66vw, 100vw'
					onLoad={() => {
						setIsLoading(false)
					}}
				/>
			</div>
			<div className={styles.navContainer()}>
				<nav className={styles.navImages()}>
					{product.url_images.map((image) => (
						<button onClick={() => handleClick(image)} key={image} type='button'>
							<Image
								src={image}
								className={isLoadingImage({ isLoading })}
								width={100}
								height={100}
								alt='alt'
								sizes='(min-width: 1024px) 66vw, 100vw'
							/>
						</button>
					))}
				</nav>
			</div>
		</div>
	)
}

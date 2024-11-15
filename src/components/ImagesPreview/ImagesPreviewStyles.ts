import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		imagesPreviewContainer: 'flex flex-col justify-center items-center',
		mainImage: 'border object-contain h-[33rem]',
		navContainer: 'pt-5',
		navImages: 'flex gap-4 [&_img]:rounded-2xl [&_img]:aspect-square',
	},
})

export const styles = stylesSlots()

import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		imagesPreviewContainer: 'flex flex-col justify-center items-center',
		mainImage: 'object-contain w-[35rem] rounded-3xl duration-300 transition-all',
		navContainer: 'pt-5',
		navImages:
			'flex gap-4 [&_img]:rounded-2xl [&_img]:aspect-square [&_img]:duration-300 [&_img]:transition-all',
	},
})

export const styles = stylesSlots()

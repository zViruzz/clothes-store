import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container: ' rounded-[26px] border-neutral-600',
		image: 'h-full w-full rounded-[26px] aspect-square',
		link: 'block relative aspect-square h-full w-full',
		overlay: 'absolute top-0 left-0 h-full w-full px-5',
		labelContainer: 'relative top-0 left-0 h-full w-full',
		label:
			'bg-white text-black absolute flex bottom-6 h-11 justify-between items-center rounded-full font-semibold',
		labelTitle: 'pl-4',
		labelPrice: 'bg-primary h-full px-4 flex justify-end items-center rounded-r-full',
	},
	variants: {
		type: {
			main: {
				label: 'md:w-[30rem] w-full',
			},
			default: {
				label: 'w-full',
			},
		},
	},
})

export const styles = stylesSlots()

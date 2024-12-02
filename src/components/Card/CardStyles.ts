import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container: 'rounded-[26px] ',
		link: 'block relative aspect-square rounded-[26px] outline-indigo-400 h-full w-full overflow-hidden group',
		image:
			'h-full w-full rounded-[26px] aspect-square transition-all group-hover:scale-110 duration-200',
		overlay: 'absolute top-0 left-0 h-full w-full px-5',
		labelContainer: 'relative top-0 left-0 h-full w-full',
		label:
			'bg-white text-black absolute flex bottom-6 h-11 justify-between items-center rounded-full font-semibold',
		labelTitle: 'pl-4 group-hover:text-indigo-400',
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
		isLoadingCard: {
			true: {
				image: 'grayscale blur-2xl scale-110',
			},
			false: {
				image: 'grayscale-0 blur-0 scale-100 ',
			},
		},
	},
})

export const styles = stylesSlots()

import { tv } from 'tailwind-variants'

export const isLoadingImage = tv({
	variants: {
		isLoading: {
			true: 'blur-2xl scale-110',
			false: 'blur-0 scale-100 ',
		},
	},
})

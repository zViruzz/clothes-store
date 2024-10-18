import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container: 'border p-12 rounded-2xl',
	},
})

export const { container } = stylesSlots()

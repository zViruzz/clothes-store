import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		title: 'text-lg font-medium',
		containerMethods: 'flex gap-4 flex-col md:flex-row mt-4',
	},
})

export const styles = stylesSlots()

import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		gridContainer: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid grid-flow-row gap-6',
	},
})

export const styles = stylesSlots()

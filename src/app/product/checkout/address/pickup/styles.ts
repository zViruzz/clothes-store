import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		title: 'text-lg font-medium',
		container: 'flex flex-col gap-4',
		text: 'text-neutral-800 ',
	},
})

export const styles = stylesSlots()

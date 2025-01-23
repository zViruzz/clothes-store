import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		title: 'text-lg font-medium',
		container: 'flex flex-col gap-4',
		text: 'text-neutral-800 ',
		form: 'grid grid-cols-1 md:grid-cols-2 gap-4 [&_label]:text-sm [&_label]:text-neutral-600',
	},
})

export const styles = stylesSlots()

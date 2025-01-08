import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container: 'flex flex-col gap-4',
		form: 'grid grid-cols-2 gap-4 [&_label]:text-sm [&_label]:text-neutral-600',
		containerButton: 'flex gap-4 col-span-2',
		button:
			'bg-black text-white py-2 px-4 rounded-lg hover:bg-neutral-700 active:bg-neutral-900',
	},
})

export const styles = stylesSlots()

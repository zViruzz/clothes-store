import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		title: 'text-lg font-medium',
		container: 'flex gap-4 flex-col mt-3',
		content: 'text-neutral-500 text-[15px]',
		containerButton: 'flex gap-4',
		button:
			'bg-black text-white py-2 px-4 rounded-lg hover:bg-neutral-700 active:bg-neutral-900',
		buttonPay:
			'bg-primary border text-black font-semibold hover:brightness-75 hover:bg-primary',
	},
})

export const styles = stylesSlots()

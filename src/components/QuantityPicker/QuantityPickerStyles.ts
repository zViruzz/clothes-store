import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		button:
			'h-10 w-10 rounded-full border border-neutral-400 grid place-items-center bg-white hover:border-black active:border-neutral-700',
		inputQuantity:
			'h-10 w-10 rounded-full border border-neutral-400 grid place-items-center bg-white',
	},
})

export const styles = stylesSlots()

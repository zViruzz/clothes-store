import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		borderTop: 'mt-5 border-t pt-5 flex flex-col gap-5',
		colorSchemeContainer: 'flex gap-2 mt-2',
		colorBox: 'h-10 w-10 rounded-full border border-neutral-400',
		sizeContainer: 'flex gap-2 mt-2',
		buttonSize:
			'h-10 w-10 rounded-full border border-neutral-400 grid place-items-center bg-white',
		button: 'bg-[#F4D9E8] py-2 px-6 rounded-full',
		shippingInfo: 'flex gap-2 items-center text-neutral-700',
		truckIcon: 'w-6 h-6 text-neutral-500',
	},
})

export const styles = stylesSlots()

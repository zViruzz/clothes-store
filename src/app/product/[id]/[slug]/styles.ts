import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container:
			'grid gap-6 md:grid-cols-[3fr_1.9fr] md:mx-[10%] mx-[5%] py-[5%] md:py-12 md:px-12',
		title: 'text-3xl mb-3',
		description: '',
		colorSchemeContainer: 'flex gap-2 mt-2',
		colorBox: 'h-10 w-10 rounded-full border border-neutral-400',
		sizeContainer: 'flex gap-2 mt-2',
		sizeBox:
			'h-10 w-10 rounded-full border border-neutral-400 grid place-items-center bg-white',
		button: 'bg-[#F4D9E8] py-2 px-6 rounded-full',
		shippingInfo: 'flex gap-2 items-center text-neutral-700',
		truckIcon: 'w-6 h-6 text-neutral-500',
		borderTop: 'mt-5 border-t pt-5 flex flex-col gap-5',
	},
})

export const styles = stylesSlots()

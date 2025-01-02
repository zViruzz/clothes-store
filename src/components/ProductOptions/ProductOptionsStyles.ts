import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		borderTop: 'mt-5 border-t pt-5 flex flex-col gap-5',
		colorSchemeContainer: 'flex gap-2 mt-2',
		sizeContainer: 'flex gap-2 mt-2',
		quantityContainer: 'flex gap-2 mt-2',
		inputQuantity:
			'h-10 w-10 rounded-full border border-neutral-300 grid place-items-center bg-white',
		button:
			'h-10 w-10 rounded-full border border-neutral-300 grid place-items-center bg-white hover:border-black active:border-neutral-700',
		buttonCart:
			'bg-[#FFA2CF] hover:bg-[#FF8EC5] active:bg-[#FF82BE] py-2 px-6 rounded-full',
		shippingInfo: 'flex gap-2 items-center text-neutral-700',
		truckIcon: 'w-6 h-6 text-neutral-500',
	},
})

export const styles = stylesSlots()

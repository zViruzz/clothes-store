import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container:
			'grid gap-6 md:grid-cols-[3fr_1.9fr] md:mx-[10%] mx-[5%] py-[5%] md:py-12 md:px-12',
		title: 'text-3xl mb-3',
		priceContainer: 'flex items-baseline gap-2',
		price: 'text-3xl font-bold mb-3 ',
		currency: 'text-sm font-medium text-muted-foreground text-neutral-600',
		description: '',
		borderTop: 'mt-5 border-t pt-5 flex flex-col gap-5',
	},
})

export const styles = stylesSlots()

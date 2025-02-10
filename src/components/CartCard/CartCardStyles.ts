import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		cart: 'flex gap-4 border p-4 relative rounded-2xl w-full',
		deleteButton: 'absolute top-4 right-4 text-neutral-500 hover:text-black',
		cartImage:
			'flex flex-col justify-center items-center [&>img]:rounded-xl [&>img]:w-24 [&>img]:h-24',
		cartEdit:
			' flex-1 flex flex-col gap-2 [&>div]:first:flex [&>div]:first:flex-col [&>div]:first:text-base [&>div]:first:font-medium',
		title: 'text-lg font-medium',
		price: ' font-bold',
		quantityContainer: 'flex gap-2 ',
		selectContainer: 'flex gap-2',
	},
})

export const styles = stylesSlots()

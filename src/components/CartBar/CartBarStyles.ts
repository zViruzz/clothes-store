import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		containerBar: 'w-full h-full z-40 absolute flex justify-end bg-black/40',
		bar: 'h-dvh w-[40rem] flex flex-col top-0 right-0 sticky gap-4 p-5 md:px-[3.5%] bg-white',
		barHeader: 'flex justify-between w-full text-neutral-600 text-2xl',

		cartContainer: 'flex flex-col gap-4',
		cart: 'flex gap-4 border p-4 relative rounded-2xl w-full',
		deleteButton: 'absolute top-4 right-4 text-neutral-500 hover:text-black',
		cartImage:
			'flex flex-col justify-center items-center [&>img]:rounded-xl [&>img]:w-24 [&>img]:h-24',
		cartEdit:
			' flex-1 flex flex-col gap-2 first:[&>div]:flex first:[&>div]:flex-col first:[&>div]:text-base first:[&>div]:font-medium',
		title: 'text-lg font-medium',
		price: ' font-bold',
		quantityContainer: 'flex gap-2 ',
		selectContainer: 'flex gap-2',
	},
})

export const styles = {
	...stylesSlots(),
}

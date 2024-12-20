import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		containerBar: 'w-full h-full z-40 absolute flex justify-end bg-black/40',
		bar: 'h-dvh md:w-[40rem] w-full top-0 right-0 sticky p-5 md:px-[3.5%] bg-white justify-between grid grid-rows-[auto_1fr_auto] grid-cols-1',
		barHeader: 'flex justify-between w-full text-neutral-600 text-2xl mb-6',

		cartContainer: 'flex flex-col gap-4 overflow-auto',
		orderButton:
			'bg-[#FFA2CF] hover:bg-[#FF8EC5] active:bg-[#FF82BE] py-3 mt-6 w-full rounded-full',
	},
})

export const styles = stylesSlots()

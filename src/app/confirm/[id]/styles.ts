import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container: 'flex flex-col items-center mx-auto px-5 max-w-6xl',
		title: 'text-3xl text-center my-8',
		card: 'w-[30rem] border border-neutral-300 rounded-2xl p-8 flex flex-col items-center bg-white h-full gap-6',
		text: 'text-xl text-center font-medium',
		containerButtons: 'flex gap-4',
		button:
			'bg-primary font-medium py-3 px-6 rounded-lg hover:bg-neutral-700 active:bg-neutral-900',
	},
})

export const styles = stylesSlots()

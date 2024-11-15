import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container:
			'bg-primary w-full h-20 px-[3%] grid items-center  top-0 text-black grid-cols-3 z-30',
		logoContainer: 'flex',
		searchContainer: 'flex justify-center',
		navContainer: 'flex gap-8 text-xl justify-end font-medium',
	},
})

export const styles = stylesSlots()

import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container: 'sticky md:static w-full h-full top-0 z-30',
		containerHeader:
			'border-b  backdrop-opacity-80 md:backdrop-opacity-50 bg-white/50 md:bg-white/20 backdrop-blur-xl md:backdrop-blur-2xl w-full h-20 px-5 md:px-[3%] grid items-center top-0 text-black md:grid-cols-3 grid-cols-2 ',
		logoContainer: 'flex text-2xl font-bold',
		searchContainer: 'md:flex hidden justify-center',
		navContainer:
			'hidden md:flex gap-8 text-xl justify-end font-medium [&_a]:text-neutral-600 hover:[&_a]:text-black',
		buttonContainer:
			'md:hidden flex justify-end [&_svg]:text-black/40 hover:[&_svg]:text-black',
		menuButtonClose: 'flex justify-end [&>button]:pb-4 [&>button]:text-black',
		listContainer:
			'flex flex-col text-xl gap-4 text-center [&_a]:text-neutral-600 hover:[&_a]:text-black',
	},
})

export const menuMobile = tv({
	base: 'flex backdrop-opacity-80 md:backdrop-opacity-50 bg-white/50 md:bg-white/20 backdrop-blur-xl absolute z-30 w-full h-screen  text-black px-5 pt-5 gap-7 flex-col md:hidden transition-all',
	variants: {
		hidden: {
			true: 'invisible opacity-0',
			false: 'visible opacity-100',
		},
	},
})

export const styles = {
	...stylesSlots(),
	menuMobile,
}

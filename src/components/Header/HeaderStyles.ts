import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container: 'sticky md:static w-full h-full top-0 z-30',
		containerHeader:
			'border-b backdrop-opacity-60 backdrop-blur-md w-full h-20 px-5 md:px-[3%] grid items-center top-0 text-black md:grid-cols-3 grid-cols-2 ',
		logoContainer: 'flex text-2xl font-bold',
		searchContainer: 'md:flex hidden justify-center',
		navContainer:
			'hidden md:flex gap-8 text-xl justify-end font-medium [&_a]:text-neutral-600 hover:[&_a]:text-black',
		buttonContainer: 'md:hidden flex justify-end opacity-60',
		menuButtonClose: 'flex justify-end [&>button]:pb-4 [&>button]:text-black',
	},
})

export const menuMobile = tv({
	base: 'flex bg-primary absolute z-30 w-full h-screen  text-black px-5 gap-5 flex-col md:hidden transition-all',
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

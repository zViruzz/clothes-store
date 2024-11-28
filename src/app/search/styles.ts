import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		layoutContainer:
			'mx-auto flex max-w-screen-2xl flex-col gap-5 md:gap-9 px-4 pb-4 md:flex-row',
		navContainer: 'hidden md:flex flex-col gap-3',
		navTitle: 'text-xl font-medium',
		sectionWrapper: 'order-last min-h-screen w-full md:order-none md:pt-7',
		sideNav: 'order-first w-full flex-none md:max-w-[125px] pt-5 md:pt-7',
		filterNav: 'order-none flex-none md:order-last md:w-[125px] md:pt-7',
		selectContainer: 'flex md:hidden',
		textSearch: 'text-xl font-medium',
	},
})

export const styles = stylesSlots()

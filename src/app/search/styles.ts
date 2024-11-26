import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		layoutContainer: 'mx-auto flex max-w-screen-2xl flex-col gap-9 px-4 pb-4 md:flex-row',
		navContainer: 'hidden md:flex flex-col gap-3',
		navTitle: 'text-xl font-medium',
		sectionWrapper: 'order-last min-h-screen w-full md:order-none pt-8',
		sideNav: 'order-first w-full flex-none md:max-w-[125px] pt-7',
		filterNav: 'order-none flex-none md:order-last md:w-[125px] pt-7',
	},
})

export const styles = stylesSlots()

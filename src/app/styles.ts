import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		gridContainer:
			'mx-auto my-10 grid max-w-(--breakpoint-xl) gap-8 px-4 md:grid-cols-6 md:grid-rows-2',
		gridProductMain: 'md:col-span-4 md:row-span-2 animate-opacity',
		gridProductItem: 'md:col-span-2 md:row-span-1 animate-opacity',
		featured: 'rounded-xl',
		cardContainer: 'flex gap-6 md:px-10 px-4 flex-col md:flex-row animate-opacity',
		subheading:
			'flex flex-col items-center [&>h2]:text-3xl [&>h2]:text-center my-9 [&>h2]:font-medium',
		line: 'bg-primary w-44 h-1 rounded-full',
	},
})

export const styles = stylesSlots()

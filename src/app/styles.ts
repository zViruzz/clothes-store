import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		gridContainer:
			'mx-auto my-10 grid max-w-screen-xl gap-8 px-4 md:grid-cols-6 md:grid-rows-2 ',
		gridProductMain: 'md:col-span-4 md:row-span-2',
		gridProductItem: 'md:col-span-2 md:row-span-1',
		card: 'relative block aspect-square h-full w-full',
		featured: 'rounded-xl',
		cardContainer: 'flex gap-6 px-10 flex-col md:flex-row',
		subheading:
			'flex flex-col items-center [&>h2]:text-3xl [&>h2]:text-center my-9 [&>h2]:font-medium',
		line: 'bg-primary w-44 h-1 rounded-full',
	},
})

export const styles = stylesSlots()

import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		featured: 'rounded-xl',
		line: 'bg-primary w-44 h-1 rounded-full',
		cardContainer: 'overflow-x-scroll relative scrollbar-hide',
		layoutContainer:
			'flex gap-10 w-[calc(384px_*_10)] md:px-10 px-4 flex-col md:flex-row animate-carousel whitespace-nowrap [&>li]:h-96 [&>li]:w-96 [&>li]:aspect-square',
		subheading:
			'flex flex-col items-center [&>h2]:text-3xl [&>h2]:text-center my-9 [&>h2]:font-medium',
	},
})

export const styles = stylesSlots()

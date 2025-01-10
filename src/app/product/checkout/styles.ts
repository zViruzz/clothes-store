import { tv } from 'tailwind-variants'

const stylesSlotsLayout = tv({
	slots: {
		container: 'flex flex-col gap-5 mx-auto px-5 max-w-6xl mt-12',
		cardContainer: 'flex flex-col md:flex-row gap-5',
		card: 'w-full border border-neutral-300 rounded-2xl p-5 flex flex-col bg-white h-full',
		title: 'text-3xl text-center',
		steps: 'flex gap-6 justify-center w-full items-center',
		step: 'flex  gap-4 justify-center items-center',
		line: 'bg-neutral-300 w-20 h-[2px] rounded-full',
		cardTitle: 'text-lg font-medium',
		total: 'flex justify-between gap-2 border-t border-neutral-300 py-5 font-medium',
		cardSummary: 'pb-0 md:w-[33rem] w-full',
		cardProductsContainer: 'flex flex-col gap-2 py-4',
		cardProduct: 'flex flex-col gap-1',
		cardSummaryValue: 'flex justify-between',
		cardSummaryLabel: 'flex gap-2 text-sm text-neutral-600',
		cardSummaryPrice: 'font-medium',
	},
})

export const buttonBack = tv({
	base: 'flex items-center gap-2  bg-black text-white py-2 px-4 rounded-lg hover:bg-neutral-700 active:bg-neutral-900',
})

export const cartSelect = tv({
	base: 'flex flex-col gap-2  md:max-w-72 border border-neutral-300 rounded-2xl p-5 text-left hover:border-neutral-700 active:border-neutral-900 active:bg-neutral-100 [&_div]:flex [&_div]:items-center [&_div]:gap-2 [&_p]:text-base [&_p]:text-neutral-600 [&_h4]:text-lg',
})

const stepNum = tv({
	base: 'bg-black w-8 h-8 rounded-full flex items-center justify-center text-white',
	variants: {
		activated: {
			true: 'bg-primary text-black',
		},
	},
})

export const styles = {
	...stylesSlotsLayout(),
	stepNum,
}

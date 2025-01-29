import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container: 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8',
		table: 'w-full table-auto border-separate border border-gray-300 text-left text-sm',
		detailsButton:
			'text-blue-500 hover:underline font-medium transition-colors duration-200',
		tableHead: 'bg-gray-100 border-b border-gray-300 text-gray-700 font-semibold',
		tableRow: 'hover:bg-gray-50',
	},
})

export const styles = stylesSlots()

import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container: 'border p-12 rounded-2xl',
		containerForm: 'flex flex-col gap-4 [&>div>input]:text-black',
	},
})

export const { container, containerForm } = stylesSlots()

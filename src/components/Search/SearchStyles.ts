import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		formContainer:
			'relative [&>svg]:absolute [&>svg]:top-1/2 [&>svg]:translate-y-[-50%] [&>svg]:right-4 w-[70%] md:max-w-[26rem]',
		input:
			'border w-full h-[2.5rem] bg-white px-5 rounded-full placeholder:text-black/70 outline-neutral-400',
	},
})

export const styles = stylesSlots()

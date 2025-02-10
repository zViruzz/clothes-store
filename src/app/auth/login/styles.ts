import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		buttonLogin:
			'bg-primary rounded-lg p-2 w-full hover:brightness-95 active:brightness-90',
		title: 'text-2xl  my-4 text-center',
		container: 'border  rounded-2xl',
		containerForm: 'flex flex-col gap-4 [&>div>input]:text-black p-7',
		footerCard:
			'bg-neutral-100 flex items-center justify-center gap-4 text-center h-16 rounded-b-2xl text-md',
		continueTagWith: 'relative',
		containerLine: 'absolute inset-0 flex items-center',
		line: 'w-full border-t border-gray-300',
		containerTag: 'relative flex justify-center text-sm',
		tag: 'px-2 bg-white text-neutral-600',
	},
})

export const styles = stylesSlots()

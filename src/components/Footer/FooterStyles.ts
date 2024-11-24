import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		container:
			'grid md:grid-rows-[20rem_4rem] grid-rows-[1fr_5rem] mt-16 items-center border-t',
		content:
			'flex justify-between gap-10 my-10 px-[12%] text-lg flex-col md:flex-row md:my-0',
		contentLinks:
			'flex flex-col gap-4 [&_h4]:text-[27px] [&_h4]:font-medium [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_a]:flex [&_a]:gap-2 [&_a]:items-center',
		contentAbout: 'flex flex-col gap-4 md:w-[40%]',
		copyright:
			'w-full flex justify-between px-[8%] flex-col text-center md:text-left md:text-lg md:flex-row',
	},
})

export const styles = stylesSlots()

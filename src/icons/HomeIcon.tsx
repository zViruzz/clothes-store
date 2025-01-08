import type { SVGProps } from 'react'

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='none'
		viewBox='0 0 16 16'
		aria-hidden='true'
		{...props}
	>
		<path
			fill='currentcolor'
			fillRule='evenodd'
			d='M8 0 0 6v2h1v7h3v-5h3v5h8V8h1V6l-2-1.5V1h-3v1.25L8 0Zm1 10h3v3H9v-3Z'
			clipRule='evenodd'
		/>
	</svg>
)
export default HomeIcon

import type { SVGProps } from 'react'

const CloseIconMin = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='none'
		viewBox='0 0 24 24'
		aria-hidden='true'
		{...props}
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z'
			clipRule='evenodd'
		/>
	</svg>
)
export default CloseIconMin

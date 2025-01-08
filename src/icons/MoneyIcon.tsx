import type { SVGProps } from 'react'

const MoneyIcon = (props: SVGProps<SVGSVGElement>) => (
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
			stroke='currentcolor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M12 3v6m0-6L9.5 5.5M12 3l2.5 2.5M5.823 9A2 2 0 1 1 3 11.823M5.823 9H8M5.823 9c-.874.003-1.354.026-1.731.218a2 2 0 0 0-.874.874c-.192.377-.215.856-.218 1.731m0 0V18.177m0 0A2 2 0 1 1 5.823 21M3 18.177c.003.875.026 1.354.218 1.731a2 2 0 0 0 .874.874c.377.192.857.215 1.731.218m0 0H18.177M21 18.177A2 2 0 1 0 18.177 21M21 18.177V11.823m0 6.354c-.003.875-.026 1.354-.218 1.731a2 2 0 0 1-.874.874c-.377.192-.857.215-1.731.218M21 11.823A2 2 0 1 1 18.177 9M21 11.823c-.003-.875-.026-1.354-.218-1.731a2 2 0 0 0-.874-.874c-.377-.192-.857-.215-1.731-.218m0 0H16m-2 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
		/>
	</svg>
)
export default MoneyIcon

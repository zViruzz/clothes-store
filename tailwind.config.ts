import { withTV } from 'tailwind-variants/dist/transformer.js'
import type { Config } from 'tailwindcss'

const config: Config = withTV({
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#CEE6FC',
				secondary: '#FFF8C7',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(calc(-384px * 5 - 80px - 320px ))' },
				},
			},
			animation: {
				carousel: 'scroll 40s linear infinite',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
})
export default config

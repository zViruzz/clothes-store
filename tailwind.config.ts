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
		},
	},
	plugins: [],
})
export default config

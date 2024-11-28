import { withTV } from 'tailwind-variants/dist/transformer.js'
import type { Config } from 'tailwindcss'

const config: Config = withTV({
    darkMode: ['class'],
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
    			foreground: 'var(--foreground)'
    		},
    		keyframes: {
    			scroll: {
    				'0%': {
    					transform: 'translateX(0%)'
    				},
    				'100%': {
    					transform: 'translateX(calc(-384px * 5 - 80px - 320px ))'
    				}
    			},
    			opacity: {
    				'0%': {
    					opacity: '0',
    					transform: 'scale(0.75)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'scale(1)'
    				}
    			}
    		},
    		animation: {
    			carousel: 'scroll 40s linear infinite',
    			opacity: 'opacity 0.3s ease-in-out'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require('tailwind-scrollbar-hide'), require("tailwindcss-animate")],
})
export default config

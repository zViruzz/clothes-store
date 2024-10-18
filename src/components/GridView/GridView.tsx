import type React from 'react'

export default function GridView({ children }: { children: React.ReactNode }) {
	return (
		<ul className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid grid-flow-row gap-4'>
			{children}
		</ul>
	)
}

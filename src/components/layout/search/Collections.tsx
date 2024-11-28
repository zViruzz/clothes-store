'use client'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/navigation'

export default function Collections() {
	const router = useRouter()

	const handleValueChangeCollection = (value: string) => {
		switch (value) {
			case 'all':
				router.push('/search')
				break
			case 'pants':
				router.push('/search/pants')
				break
			case 'shirt':
				router.push('/search/shirt')
				break
			case 'dress':
				router.push('/search/dress')
				break
			case 'jacket':
				router.push('/search/jacket')
				break
			case 'short':
				router.push('/search/short')
				break
		}
	}
	return (
		<Select onValueChange={handleValueChangeCollection}>
			<SelectTrigger className='w-full'>
				<SelectValue placeholder='Colecciones' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='all'>Todos</SelectItem>
				<SelectItem value='pants'>Pantalones</SelectItem>
				<SelectItem value='shirt'>Camisetas</SelectItem>
				<SelectItem value='dress'>Vestidos</SelectItem>
				<SelectItem value='jacket'>Camperas</SelectItem>
				<SelectItem value='short'>Short</SelectItem>
			</SelectContent>
		</Select>
	)
}

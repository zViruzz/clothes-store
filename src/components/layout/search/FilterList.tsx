'use client'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/navigation'

export default function FilterList() {
	const router = useRouter()

	const handleValueChangeColors = (value: string) => {
		switch (value) {
			case 'pink':
				router.push('/search?color=pink')
				break
			case 'blue':
				router.push('/search?color=blue')
				break
			case 'white':
				router.push('/search?color=white')
				break
			case 'yellow':
				router.push('/search?color=yellow')
				break
		}
	}
	return (
		<Select onValueChange={handleValueChangeColors}>
			<SelectTrigger className='w-full'>
				<SelectValue placeholder='Colores' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='pink'>Rosa</SelectItem>
				<SelectItem value='blue'>Azul</SelectItem>
				<SelectItem value='white'>Blanco</SelectItem>
				<SelectItem value='yellow'>Amarillo</SelectItem>
			</SelectContent>
		</Select>
	)
}

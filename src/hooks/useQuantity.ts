import { useState } from 'react'

export default function useQuantity() {
	const [quantity, setQuantity] = useState(1)

	const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value)

		if (value >= 0) {
			setQuantity(value)
		}
	}

	return {
		quantity,
		setQuantity,
		handleChangeQuantity,
	}
}

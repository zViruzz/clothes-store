import { useState } from 'react'

export default function useQuantity(initial: number) {
	const [quantityState, setQuantity] = useState(initial)

	const handleClickIncrement = () => {
		setQuantity((prev) => prev + 5)
	}

	const handleClickDecrement = () => {
		if (quantityState <= 5) return
		setQuantity((prev) => prev - 5)
	}

	const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value)

		if (value >= 0) {
			setQuantity(value)
		}
	}

	return {
		quantityState,
		setQuantity,
		handleChangeQuantity,
		handleClickIncrement,
		handleClickDecrement,
	}
}

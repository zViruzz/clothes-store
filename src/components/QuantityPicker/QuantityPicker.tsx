import { styles } from './QuantityPickerStyles'

interface Props {
	controlQuantity: (value: number) => void
	handleClickIncrement: () => void
	handleClickDecrement: () => void
	quantity: number
}
export default function QuantityPicker({
	quantity,
	controlQuantity,
	handleClickDecrement,
	handleClickIncrement,
}: Props) {
	const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
		controlQuantity(Number(e.target.value))
	}

	return (
		<>
			<button type='button' className={styles.button()} onClick={handleClickDecrement}>
				-
			</button>
			<input
				type='text'
				className={styles.inputQuantity()}
				onChange={handleChangeQuantity}
				value={quantity}
			/>
			<button type='button' className={styles.button()} onClick={handleClickIncrement}>
				+
			</button>
		</>
	)
}

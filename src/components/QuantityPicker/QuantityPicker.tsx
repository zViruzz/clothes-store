import { styles } from './QuantityPickerStyles'

interface Props {
	handleChangeQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleClickIncrement: () => void
	handleClickDecrement: () => void
	setQuantity: React.Dispatch<React.SetStateAction<number>>
	quantity: number
}
export default function QuantityPicker({
	setQuantity,
	quantity,
	handleChangeQuantity,
	handleClickDecrement,
	handleClickIncrement,
}: Props) {
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

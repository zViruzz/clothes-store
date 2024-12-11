import { styles } from './QuantityPickerStyles'

interface Props {
	handleChangeQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void
	setQuantity: React.Dispatch<React.SetStateAction<number>>
	quantity: number
}
export default function QuantityPicker({
	setQuantity,
	quantity,
	handleChangeQuantity,
}: Props) {
	return (
		<>
			<button
				type='button'
				className={styles.button()}
				onClick={() => setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))}
			>
				-
			</button>
			<input
				type='text'
				className={styles.inputQuantity()}
				onChange={handleChangeQuantity}
				value={quantity}
			/>
			<button
				type='button'
				className={styles.button()}
				onClick={() => setQuantity((prev) => prev + 1)}
			>
				+
			</button>
		</>
	)
}

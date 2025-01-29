import { styles } from './styles'
import Link from 'next/link'

export default async function ProfilePage() {
	return (
		<div className={styles.container()}>
			<Link href={'/profile/my-purchases'}>Mis compras</Link>
		</div>
	)
}

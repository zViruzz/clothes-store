import type React from 'react'
import { styles } from './GridViewStyle'

export default function GridView({ children }: { children: React.ReactNode }) {
	return <ul className={styles.gridContainer()}>{children}</ul>
}

import Link from 'next/link'
import { styles } from './CardStyles'
import cn from '@/utils/cn'
import Image from 'next/image'

interface Props {
  price: number
  title: string
  className?: string
  typeStyle?: 'main' | 'default'
}

export default function Card({ price, title, className, typeStyle = 'default' }: Props) {
  return (
    <div className={cn(styles.container(), className)}>
      <Link className={styles.link()} href='/'>
        <Image
          src='https://acdn.mitiendanube.com/stores/211/292/products/set-de-nacimiento-pajaritos-coral-gubee-edeb4bd944a3dee91d17127006129682-480-0.jpg'
          className={styles.image()}
          alt='shoes'
          width={900}
          height={900}
        />
        <div>
          <div className={styles.overlay()}>
            <div className={styles.labelContainer()}>
              <div className={styles.label({ type: typeStyle })}>
                <div className={styles.labelTitle()}>{title}</div>
                <span className={styles.labelPrice()}>${price}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

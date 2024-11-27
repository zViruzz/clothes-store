'use client'
import { useRouter } from 'next/navigation'
import React, { useRef, type FormEvent } from 'react'
import { styles } from './SearchStyles'
import SearchIcon from '@/icons/SearchIcon'

export default function Search() {
  const query = useRef<HTMLInputElement | null>(null)
  const { push } = useRouter()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!query.current || query.current.value.trim() === '') return

    push(`/search?q=${query.current.value}`)
  }

  return (
    <form className={styles.formContainer()} onSubmit={handleSubmit}>
      <input
        ref={query}
        className={styles.input()}
        type='text'
        name='search'
        placeholder='Search'
      />
      <SearchIcon className='text-neutral-500' width={23} height={23} />
    </form>
  )
}

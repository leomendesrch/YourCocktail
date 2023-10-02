"use client"
import { PrimaryInput } from '@/components/primary-input'
import PrimaryButton from '@/components/primary-button'

import styles from './page.module.css'

import { useState } from 'react'

export default function Home() {
 const [search, setSearch] = useState("")

 const handleChange = (value: string) => {
  setSearch(value)
 }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>What do you want to drink today?</h1>
      <PrimaryInput label='Search by your favorite ingredient' value={search} onChange={handleChange}/>
      <p className={styles.orText}>or</p>
      <PrimaryButton label='get surprised!'/>
    </main>
  )
}

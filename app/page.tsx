import Link from 'next/link'
import styles from '../styles/home.module.css'

export default async function Home() {
  return (
    <div className={styles.home}>
      <div><h1>Hi, my name is Mitchell Amasia</h1></div>
      <div>
        <Link href="/blog">Checkout my blog!</Link>
      </div>
      <div>
      <Link href="/contact">Contact me</Link>

      </div>
    </div>
  )
}

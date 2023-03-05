import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Footer() {
  return (
    <footer>
      <div>
        Footer Component
      </div>
    </footer>
  )
}

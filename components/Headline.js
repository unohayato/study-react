import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Main } from '@/components/Main'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Headline() {
  return (
    <div>
      <h3>Head Line</h3>
    </div>
  );
}

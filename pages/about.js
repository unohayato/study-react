import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Headline } from '../components/HeadLine';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headline title="About Page" page="about"/>
      <Main/>

      <Footer/>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import About from './components/About'
import Works from './components/Works'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Header />
      <About />
      <Works />
    </>
  )
}

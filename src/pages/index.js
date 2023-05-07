import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import About from './components/About'
import Works from './components/Works'
import Loading from './loading'
import { useState, useEffect } from 'react'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      <Loading isLoading={isLoading} />

      {!isLoading && (
        <>
          <Header />
          <About />
          <Works />
        </>
      )}
    </>
  )
}

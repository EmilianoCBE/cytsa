import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { HeroC900 } from '../components/HeroC900'
import { DescC900 } from '../components/DescC900'
import { Scroller } from '../components/Scroller'

export const ProductoC900 = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroC900 />
        <Scroller />
        <DescC900 />
      </main>
      <Footer />
    </>
  )
}

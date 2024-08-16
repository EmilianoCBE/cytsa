import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { HeroC80 } from '../components/HeroC80'
import { DescC80 } from '../components/DescC80'
import { Scroller } from '../components/Scroller'

export const ProductoC80 = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroC80 />
        <Scroller />
        <DescC80 />
      </main>
      <Footer />
    </>
  )
}

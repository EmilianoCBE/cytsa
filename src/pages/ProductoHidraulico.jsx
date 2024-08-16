import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { HeroHidraulico } from '../components/HeroHidraulico'
import { DescHidraulico } from '../components/DescHidraulico'
import { Scroller } from '../components/Scroller'

export const ProductoHidraulico = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroHidraulico />
        <Scroller />
        <DescHidraulico />
      </main>
      <Footer />
    </>
  )
}

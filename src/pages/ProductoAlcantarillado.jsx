import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { HeroAlcantarillado } from '../components/HeroAlcantarillado'
import { DescAlcantarillado } from '../components/DescAlcantarillado'
import { Scroller } from '../components/Scroller'

export const ProductoAlcantarillado = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroAlcantarillado />
        <Scroller />
        <DescAlcantarillado />
      </main>
      <Footer />
    </>
  )
}

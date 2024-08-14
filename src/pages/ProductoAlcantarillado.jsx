import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { HeroAlcantarillado } from '../components/HeroAlcantarillado'
import { DescAlcantarillado } from '../components/DescAlcantarillado'

export const ProductoAlcantarillado = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroAlcantarillado />
        <DescAlcantarillado />
      </main>
      <Footer />
    </>
  )
}

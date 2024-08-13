import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { HeroNosotros } from '../components/HeroNosotros'
import { Historia } from '../components/Historia'

export const Nosotros = () => {
  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center'>
        <HeroNosotros />
        <div className='max-w-[1440px]'>
          <Historia />
        </div>
      </main>
      <Footer />
    </>
  )
}

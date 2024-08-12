import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { AboutHero } from "../components/AboutHero"
import { Scroller } from "../components/Scroller"


export const Home = () => {
  return (
    <>
      <Navbar />
        <main className="flex-grow">
          <Hero />
          <Scroller />
          <AboutHero />
        </main>
      <Footer />
    </>
  )
}

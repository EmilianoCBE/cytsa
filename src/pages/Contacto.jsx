import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Mapa } from '../ui/Mapa'
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons'

export const Contacto = () => {
  return (
    <>
      <Navbar />
        <main className="flex-grow flex flex-col md:flex-row">
          <section className='flex justify-center flex-col items-center md:w-[50vw] gap-10 py-10'>
            <h1 className='text-4xl font-bold'>Contáctanos</h1>
            <div className='w-[300px] md:w-[400px]'>
              <p className='text-xl py-2'>Puede comunicarse por teléfono al:</p>
              <a href="tel:+8180327700">(81)80-32-77-00</a>

              <p className='text-xl py-2'>
                Así mismo por medio de fax al:
              </p>
              <a href="tel:+8180327700">(81)80-32-77-00</a>
              <p className='text-xl py-2'>O seguirnos en nuestras redes sociales:</p>
            </div>
              <div className='flex gap-4'>
                <a href="https://www.facebook.com/profile.php?id=61555752673989">
                  <FacebookOutlined style={{fontSize: '30px'}}/>
                </a>
                <a href="https://www.instagram.com/cytsapvc/">
                  <InstagramOutlined style={{fontSize: '30px'}}/>
                </a>
              </div>
          </section>
          <section className=' md:w-[50vw]'>
            <Mapa />
          </section>
        </main>
      <Footer />
    </>
  )
}

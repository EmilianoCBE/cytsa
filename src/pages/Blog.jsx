import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Blog = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className='pt-20 pb-10 max-w-[1440px] mx-auto px-8'>
          <h1 className='text-2xl md:text-[50px] font-bold'>
            Notas del blog
          </h1>
        </div>
        <div className='pt-5 flex flex-col items-center justify-center md:justify-between md:flex-row pb-8 gap-4 max-w-[1440px] mx-auto px-8'>
          <a href="/Entrada1.pdf" target='_blank' className='cursor-pointer border border-slate-500 px-4 py-4 w-[350px] hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100'>
            <div className='w-full h-[150px] py-3'>
              <div className="flex items-center gap-3">
                <div className='bg-white rounded-full p-3 w-[60px]'>
                  <img src="/logo.png" alt=""/>
                </div>
                <span>
                  8 jun 2023
                </span>
              </div>
              <h2 className='pt-3 font-bold text-md'>
              Técnicas y Procedimientos para la Interconexión de
              Tuberías y Conexiones
              </h2>
            </div>
          </a>
          <a href="/Entrada2.pdf" target='_blank' className='cursor-pointer border border-slate-500 px-4 py-4 w-[350px] hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100'>
            <div className='w-full h-[150px] py-3'>
              <div className="flex items-center gap-3">
                <div className='bg-white rounded-full p-3 w-[60px]'>
                  <img src="/logo.png" alt=""/>
                </div>
                <span>
                  8 jun 2023
                </span>
              </div>
              <h2 className='pt-3 font-bold text-md'>
              Procedimientos y Técnicas Recomendadas para el
              Cementado
              </h2>
            </div>
          </a>
          <a href="/Entrada3.pdf" target='_blank' className='cursor-pointer border border-slate-500 px-4 py-4 w-[350px] hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100'>
            <div className='w-full h-[150px] py-3'>
              <div className="flex items-center gap-3">
                <div className='bg-white rounded-full p-3 w-[60px]'>
                  <img src="/logo.png" alt=""/>
                </div>
                <span>
                  8 jun 2023
                </span>
              </div>
              <h2 className='pt-3 font-bold text-md'>
              Procedimientos y Técnicas Recomendadas para la
              Elaboración del Bisel o Espiga
              </h2>
            </div>
          </a>
          <a href="/Entrada4.pdf" target='_blank' className='cursor-pointer border border-slate-500 px-4 py-4 w-[350px] hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100'>
            <div className='w-full h-[150px] py-3'>
              <div className="flex items-center gap-3">
                <div className='bg-white rounded-full p-3 w-[60px]'>
                  <img src="/logo.png" alt=""/>
                </div>
                <span>
                  8 jun 2023
                </span>
              </div>
              <h2 className='pt-3 font-bold text-md'>
              Transporte, Manejo y Almacenamiento de Tubos en Obra
              </h2>
            </div>
          </a>
        </div>
      </main>
      <Footer classNames={'absolute bottom-0'}/>
    </>
  )
}

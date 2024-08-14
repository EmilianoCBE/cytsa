import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Blog = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className='pt-20 pb-10 px-8'>
          <h1 className='text-2xl md:text-[50px] font-bold'>
            Notas del blog
          </h1>
        </div>
        <div className='flex flex-col items-center justify-center md:justify-between md:flex-row pb-8 gap-4 px-8'>
          <a href="" className='border border-slate-500 px-4 py-4 w-[350px] hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100'>
            <div className='w-full h-full'>
              <h2 className='font-bold text-lg'>Entrada 1</h2>
            </div>
          </a>
          <a href="" className='border border-slate-500 px-4 py-4 w-[350px] hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100'>
            <div className='w-full h-full'>
              <h2 className='font-bold text-lg'>Entrada 2</h2>
            </div>
          </a>
          <a href="" className='border border-slate-500 px-4 py-4 w-[350px] hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100'>
            <div className='w-full h-full'>
              <h2 className='font-bold text-lg'>Entrada 3</h2>
            </div>
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}

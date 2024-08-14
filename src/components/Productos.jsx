import React from 'react'

export const Productos = () => {
  return (
    <section className='pt-16 md:pt-20 px-8'>
      <h2 className='text-xl md:text-[42px] font-bold'>
        Nuestros Productos
      </h2>
      <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-between py-8 md:py-16'>
        <a href="" className='border border-slate-500 px-4 py-4 hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100'>
          <div className='w-full h-full'>
            <h2 className='font-bold text-lg'>Entrada 1</h2>
          </div>
        </a>
        <a href="" className='border border-slate-500 px-4 py-4 hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100'>
          <div className='w-full h-full'>
            <h2 className='font-bold text-lg'>Entrada 2</h2>
          </div>
        </a>
        <a href="" className='border border-slate-500 px-4 py-4 hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100'>
          <div className='w-full h-full'>
            <h2 className='font-bold text-lg'>Entrada 3</h2>
          </div>
        </a>
        <a href="" className='border border-slate-500 px-4 py-4 hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100'>
          <div className='w-full h-full'>
            <h2 className='font-bold text-lg'>Entrada 4</h2>
          </div>
        </a>
      </div>
    </section>
  )
}

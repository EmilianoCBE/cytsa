import { Link } from 'react-router-dom'

export const Productos = () => {
  return (
    <section className='pt-16 md:pt-20 px-8'>
      <h2 className='text-xl md:text-[42px] font-bold'>
        Nuestros Productos
      </h2>
      <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-between py-8 md:py-16'>
        <Link to="/productos/alcantarillado" className='border border-slate-500 px-4 py-4 hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100 hover:border-orange-500 hover:scale-img'>
          <div className='w-full h-full flex flex-col justify-center gap-7'>
            <img className="h-[200px]" src="/alcantarillado.jpg" alt="Tubo de alcantarillado" />
            <h2 className='font-bold text-lg'>Alcantarillado</h2>
          </div>
        </Link>
        <Link to="" className='border border-slate-500 px-4 py-4 hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100 hover:border-orange-500 hover:scale-img'>
          <div className='w-full h-full flex flex-col justify-center gap-7'>
            <img className="h-[200px]" src="/hidraulico.jpg" alt="Tubo de sistema hidráulico" />
            <h2 className='font-bold text-lg'>Sistema Hidráulico</h2>
          </div>
        </Link>
        <Link to="" className='border border-slate-500 px-4 py-4 hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100 hover:border-orange-500 hover:scale-img'>
          <div className='w-full h-full flex flex-col justify-center gap-7'>
            <img className="h-[200px]" src="/c900.jpg" alt="Tubo C-900" />
            <h2 className='font-bold text-lg'>C-900</h2>
          </div>
        </Link>
        <Link to="" className='border border-slate-500 px-4 py-4 hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100 hover:border-orange-500 hover:scale-img'>
          <div className='w-full h-full flex flex-col justify-center gap-7'>
            <img className="h-[200px]" src="/cedula80.png" alt="Tubo Cedula 80" />
            <h2 className='font-bold text-lg'>Cedula 800</h2>
          </div>
        </Link>
      </div>
    </section>
  )
}

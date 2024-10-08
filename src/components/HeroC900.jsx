import { Link } from "react-router-dom"

export const HeroC900 = () => {
  return (
    <section className='flex flex-col md:flex-row md:items-center w-[100%] h-[100%]'>
      <div className='md:w-[45vw] flex gap-5 flex-col justify-start items-start py-11 bg-[url("/c900.jpg")] md:bg-none bg-cover h-[350px] md:h-full md:bg-contain bg-bottom bg-no-repeat px-8'>
        <h1 className='text-2xl md:text-[50px] text-black font-bold leading-10 md:leading-[56px]'>Sistema C-900</h1>
        <Link to="/contacto" className="hidden md:block">
          <button className='p-3 bg-orange-500 rounded-md text-slate-100 hover:bg-white hover:text-orange-500 border-orange-500 border transition-all ease-in-out'>
            Contáctanos
          </button>
        </Link>
      </div>
      <div className='hidden md:block md:w-[55vw]'>
        <img src="/c900.jpg" alt="Sistema Alcantarillado" className="md:h-[70vh]"/>
      </div>
    </section>
  )
}

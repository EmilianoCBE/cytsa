export const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='md:w-[45vw] flex gap-5 flex-col justify-start items-start py-11 bg-[url("/hero.jpeg")]  md:bg-[url("/fondo.jpeg")] bg-cover md:bg-contain bg-bottom bg-no-repeat px-8'>
        <h1 className='text-2xl md:text-[50px] text-slate-100 md:text-black font-bold leading-10 md:leading-[56px]'>CONEXIONES Y TRANSFORMACIONES PLÁSTICAS DE MONTERREY</h1>
        <button className='p-3 bg-orange-500 rounded-md text-slate-100 hover:bg-white hover:text-orange-500 border-orange-500 border-2 transition-all ease-in-out'>
          Contáctanos
        </button>
      </div>
      <div className='hidden md:block md:w-[55vw]'>
        <img src="/hero.jpeg" alt="Hero" />
      </div>
    </div>
  )
}

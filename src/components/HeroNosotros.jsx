export const HeroNosotros = () => {
  return (
    <section className='flex flex-col md:flex-row md:items-center w-[100%] h-[100%]'>
      <div className='md:w-[45vw] flex gap-5 flex-col justify-start items-start py-11 bg-[url("/nosotrosHero.png")] md:bg-none bg-cover h-[350px] md:h-full md:bg-contain bg-bottom bg-no-repeat px-8'>
        <h1 className='text-2xl md:text-[50px] text-black font-bold leading-10 md:leading-[56px]'>Nuestra Historia</h1>
        <p className='text-black text-lg hidden md:block'>
        Gracias al compromiso y la calidad que ofrecemos a nuestros clientes y al público después de estos 24 años, Somos la mejor opción en la fabricación y asesoría en la adquisición de piezas de PVC fabricadas.
        </p>
      </div>
      <div className='hidden md:block md:w-[55vw]'>
        <img src="/nosotrosHero.png" alt="Nosotros" className="md:h-[70vh]"/>
      </div>
    </section>
  )
}

export const HeroNosotros = () => {
  return (
    <section className='flex flex-col md:flex-row w-[100%] h-[100%]'>
      <div className='w-[100vw] h-[350px] md:h-[700px] flex gap-5 flex-col justify-start items-start py-11 bg-[url("/nosotrosHero.png")] bg-cover bg-bottom bg-no-repeat px-8'>
        <h1 className='text-2xl md:text-[50px] text-black font-bold leading-10 md:leading-[56px] self-center md:self-start'>Nuestra Historia</h1>
      </div>
      {/* <div className='md:w-[55vw]'>
        <img src="/nosotrosHero.png" alt="Nosotros" className="md:h-[70vh]"/>
      </div> */}
    </section>
  )
}

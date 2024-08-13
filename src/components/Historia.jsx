
export const Historia = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 md:py-20 gap-4 px-8">
      <div className="text-black hover:text-slate-100 border-gray-500 border py-6 md:py-10 px-8 hover:border-orange-500 hover:bg-orange-500 transition-all ease-in-out flex flex-col-reverse md:flex-row gap-2 md:gap-20">
        <div className="flex flex-col gap-4 md:w-[80%]">
          <h2 className="text-xl md:text-[42px] font-bold py-4">Historia</h2>
          <p className="text-xs md:text-[16px] leading-6">
            Conexiones y Transformaciones Plásticas Monterrey nace en el año 1998 en el municipio de Santa Catarina Nuevo León bajo el mando del Sr Javier Villafaña Matta con el objetivo de elaborar y  proveer conexiones de PVC de fabricación y diámetros especiales a constructoras, contratistas distribuidores e instaladores independientes que encontraban en este rubro dificultades para localización de dichas piezas especiales, siendo consciente de las necesidades y obstáculos que se pueden presentar en la obra o campo.
          </p>
        </div>
        <div className="self-center ">
          <div className="bg-white rounded-full p-5 w-[100px]">
            <img src="/historia.png" alt="" />
          </div>
        </div>
      </div>
      <div className="text-black hover:text-slate-100 border-gray-500 border py-6 md:py-10 px-8 hover:border-orange-500 hover:bg-orange-500 transition-all ease-in-out flex flex-col-reverse md:flex-row gap-2 md:gap-20">
        <div className="flex flex-col gap-4 md:w-[80%]">
          <h2 className="text-xl md:text-[42px] font-bold py-4">Misión</h2>
          <p className="text-xs md:text-[16px] leading-6">
            Ser una solución eficaz en las funciones del desarrollar, producir, comercializar y distribuir conexiones de PVC de calidad que superen las expectativas de clientes y consumidores, generando valor para nuestros accionistas a beneficio de nuestros trabajadores y ejerciendo un trato justo y profesional a nuestros socios comerciales.
          </p>
        </div>
        <div className="self-center ">
          <div className="bg-white rounded-full p-5 w-[100px]">
            <img src="/mision.png" alt="" />
          </div>
        </div>
      </div>
      <div className="text-black hover:text-slate-100 border-gray-500 border py-6 md:py-10 px-8 hover:border-orange-500 hover:bg-orange-500 transition-all ease-in-out flex flex-col-reverse md:flex-row gap-2 md:gap-20">
        <div className="flex flex-col gap-4 md:w-[80%]">
          <h2 className="text-xl md:text-[42px] font-bold py-4">Visión</h2>
          <p className="text-xs md:text-[16px] leading-6">
            Ser una empresa líder a nivel regional en la elaboración de conexiones y curvas conduit de PVC, ofreciendo un servicio de primer nivel, productos de la más alta calidad y a un precio muy competitivo dentro de este rubro para ofrecer productos innovadores que sean una solución eficaz para nuestros clientes y proveer un ambiente laboral sano donde nuestros empleados puedan innovar y sobresalir para que sus familias tengan la seguridad de un ingreso seguro.
          </p>
        </div>
        <div className="self-center ">
          <div className="bg-white rounded-full p-5 w-[100px]">
            <img src="/vision.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Carousel } from 'antd';

export const AboutHero = () => {
  return (
    <div className="py-16 md:py-20 px-8">
      <h2 className="text-xl md:text-[42px] font-bold">Acerca de Nosotros</h2>
      <div className='flex flex-col-reverse gap-4 md:flex-row py-8 md:py-16'>
        <div className='md:w-[50vw]'>
          <Carousel autoplay>
            <div className='bg-[url("/slider1.jpeg")] bg-no-repeat bg-cover'>
              <h3 className='h-[350px] text-center'>
              </h3>
            </div>
            <div className='bg-[url("/slider2.jpeg")] bg-no-repeat bg-cover'>
              <h3 className='h-[350px] text-center'>
              </h3>
            </div>
            <div className='bg-[url("/slider3.jpeg")] bg-no-repeat bg-cover'>
              <h3 className='h-[350px] text-center'>
              </h3>
            </div>
          </Carousel>
        </div>
        <div className='md:px-16 md:w-[50vw] flex items-center'>
          <p className='text-lg'>
            Conexiones y transformaciones plásticas monterrey nace en el año de 1998 en el municipio de Santa Catarina, Nuevo León, ante la necesidad de proveer conexiones de PVC de fabricación y diámetros especiales a Constructoras, contratistas, distribuidores e instaladores independientes, que encontraban en este rubro dificultades para la localización de dichas piezas especiales.​ Gracias al compromiso y la calidad que ofrecemos a nuestros clientes y al público en general, después de estos 24 años somos la mejor opción en la fabricación y asesoría en la adquisición de piezas de PVC fabricadas.
          </p>
        </div>
      </div>
    </div>
  );
};
import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-white py-10 px-4 md:px-10 text-center gap-5 flex flex-col md:flex-row md:justify-between md:items-start">
      <div>
        <ul className='text-left'>
          <li className='py-1'>CYTSA</li>
          <li className='py-1'>Conexiones y Transformaciones Plásticas de Monterrey S.A de C.V</li>
          <li className='py-1'>2024</li>
        </ul>
      </div>
      <div>
        <ul className='text-left'>
          <li className='py-1'>Tel: (81)80-32-77-00 /  Fax: (81) 80-32-77-01</li>
          <li className='py-1'>Del poniente #273, Col. Parque industrial Microempresarios del Pte.</li>
          <li className='py-1'>66369</li>
          <li className='py-1'>Santa Catarina, Nuevo León, México</li>
        </ul>
      </div>
    </footer>
  )
}

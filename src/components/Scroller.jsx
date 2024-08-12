import React from 'react'

export const Scroller = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-20 bg-orange-500">
      <div className="inline-block animate-marquee">
        <span className="mx-4 text-3xl md:text-[60px] font-semibold text-slate-100">
          CONEXIONES FABRICADAS A LA MEDIDA
        </span>
        {/* <span className="mx-4 text-xl font-semibold text-slate-100">Conexiones fabricadas a la medida</span>
        <span className="mx-4 text-xl font-semibold text-slate-100">Conexiones fabricadas a la medida</span> */}
      </div>
    </div>
  )
}

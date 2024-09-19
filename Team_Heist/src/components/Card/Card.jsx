import React from 'react'
export function Card({name, wtdoes, type}){
    return(
<a className="group relative block max-w-screen-sm mx-auto h-64 sm:h-80 lg:h-96 text-slate-700">
  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    className="relative flex h-full w-60 transform items-center justify-center border-2 border-black bg-[#EFE8C9] transition-transform group-hover:scale-105"
  >
    <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
      <h2 className="mt-4 text-xl font-medium sm:text-2xl">{type}</h2>
    </div>

    <div
      className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 className="mt-4 text-xl font-medium sm:text-2xl justify-center items-center">{name}</h3>

      <p className="mt-4 text-sm sm:text-base">
      {wtdoes}
      </p>
    </div>
  </div>
</a>

    )
}   
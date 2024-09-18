import React from 'react'
export function Card({name, wtdoes, type}){
    return(
    // <div className="relative w-[190px]  space-y-10 bg-yellow-100 flex flex-col justify-start p-3 gap-3 rounded-lg cursor-pointer before:content-[''] before:absolute before:inset-0 before:left-[-5px] before:m-auto before:w-[200px] before:rounded-xl before:bg-stone-50 before:z-[-10] before:pointer-events-none before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] after:content-[''] after:absolute after:inset-0 after:bg-stone-50 after:transform after:scale-[0.95] after:blur-[20px] after:z-[-1] hover:after:blur-[30px] hover:before:transform hover:before:rotate-[-90deg] hover:before:scale-x-[1.34] hover:before:scale-y-[0.77]">
    //     <p className="text-[20px] capitalize font-bold bottom-0 text-black">{name}</p>
    //     <p className="text-[14px] text-black">{wtdoes}</p>
    //     <p className="text-[14px] text-[#AF0000] font-semibold">{type}</p>
    // </div>

/* From Uiverse.io by sushma-godawari-college */ 
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
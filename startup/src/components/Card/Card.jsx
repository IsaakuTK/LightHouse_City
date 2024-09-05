import React from 'react'
export function Card({name, wtdoes, type}){
    return(
    <div className="relative w-[190px]  space-y-10 bg-yellow-100 flex flex-col justify-start p-3 gap-3 rounded-lg cursor-pointer before:content-[''] before:absolute before:inset-0 before:left-[-5px] before:m-auto before:w-[200px] before:rounded-xl before:bg-gradient-to-br before:from-[#AF0000] before:to-[#40c9ff] before:z-[-10] before:pointer-events-none before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#AF0000] after:to-[#00dbde] after:transform after:scale-[0.95] after:blur-[20px] after:z-[-1] hover:after:blur-[30px] hover:before:transform hover:before:rotate-[-90deg] hover:before:scale-x-[1.34] hover:before:scale-y-[0.77]">
        <p className="text-[20px] capitalize font-bold bottom-0 text-black">{name}</p>
        <p className="text-[14px] text-black">{wtdoes}</p>
        <p className="text-[14px] text-[#AF0000] font-semibold">{type}</p>
    </div>
    )
}   
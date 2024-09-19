import React from 'react'
export function Item({ image, text, value}){
    return(
  <div className="relative flex justify-between bg-black w-full items-center px-10">
    <img className=" w-20 h-fit" src={image}/>
    <p className=''>{text}</p>
    <p>$ {value}</p>
  </div>
    )
}   
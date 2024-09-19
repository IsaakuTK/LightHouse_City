import React from 'react'
import { Button } from '../Button/Button'
import img1 from "../../imgs/3.png"
import img2 from "../../imgs/4.png"
import img3 from "../../imgs/5.png"
import img4 from "../../imgs/6.png"
export function Footer({onRollDice, showCard, goodone, badone, challenge, openShop}){
    return(
      <footer className="bg-slate-700 flex justify-center p-3 absolute z-0 bottom-0 space-x-2 w-full">
        
        <div className=' flex flex-col items-center'>
          <Button title={"Throw Dice"} onClick={onRollDice}/>
        </div>
        
        <div className='flex flex-col items-center justify-center'>
          <div className='py-1 flex'>
            <img src={img1} onClick={goodone} className="w-1/2 h-16 p-1 px-2 bg-gradient-to-r text-white from-[black] to-black hover:border-2 hover:border-white"/>
            <img src={img3} onClick={badone} className="w-1/2 h-16 p-1 px-2 bg-gradient-to-r text-white from-[black] to-black hover:border-2 hover:border-white"/>

          </div>
          <div className='py-1 flex'>
            <img src={img2} onClick={challenge} className="w-1/2 h-16 p-1 px-2 bg-gradient-to-r text-white from-[black] to-black hover:border-2 hover:border-white"/>
            <img src={img4} onClick={showCard} className="w-1/2 h-16 p-1 px-2 bg-gradient-to-r text-white from-[black] to-black hover:border-2 hover:border-white"/>
          </div>

        </div>          

        <div className=' flex flex-col items-center'>
          <Button title={"Shop"} onClick={openShop} className={"mt-1"}/>
        </div>

      </footer>
    )
}
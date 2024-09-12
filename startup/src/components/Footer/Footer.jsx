import React from 'react'
import { Button } from '../Button/Button'
export function Footer({onRollDice, showCard, goodone, badone, challenge}){
    return(
      <footer className="bg-slate-700 flex justify-center p-3 absolute bottom-0 space-x-5">
        <Button title={"Throw Dice"} onClick={onRollDice}/>

        <div>
          <div className='py-1 px-5'>
            <Button title={"Fortune"} onClick={goodone} className={"w-fit p-1 px-2 bg-gradient-to-r text-white from-[black] to-black hover:border-2 hover:border-white"}/>
            <Button title={"Miss Fortune"} onClick={badone} className={"w-fit p-1 px-2 bg-gradient-to-r text-white from-[black] to-black hover:border-2 hover:border-white"}/>
            <Button title={"Challenge"} onClick={challenge} className={"w-fit p-1 px-2 bg-gradient-to-r text-white from-[black] to-black hover:border-2 hover:border-white"}/>
          </div>
         <Button title={"Show Random"} onClick={showCard}/>
        </div>

      </footer>
    )
}
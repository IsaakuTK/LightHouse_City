import React from 'react'
import { Button } from '../Button/Button'
export function Footer({onRollDice, showCard}){
    return(
      <footer className="bg-slate-700 flex justify-center p-3 absolute bottom-0 space-x-5">
        <Button title={"Throw Dice"} onClick={onRollDice}/>
        <Button title={"Show Card"} onClick={showCard}/>
      </footer>
    )
}
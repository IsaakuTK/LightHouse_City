import React, { useState } from 'react';
import { Dice } from '../Dice/Dice';
import { Footer } from '../Footer/Footer';
import { Card } from '../Card/Card';

export function Body() {
  const [rolling, setRolling] = useState(false);
  const [number, setNumber] = useState(1);
  const [showDice, setShowDice] = useState(true);

  const rollDice = () => {
    setShowDice(true);
    setRolling(true);
    setTimeout(() => {
      const newNumber = Math.floor(Math.random() * 6) + 1;
      setNumber(newNumber);
      setRolling(false);
    }, 1000); // Tiempo de animación de 1 segundo
  };

  const hideDice = () => {
    setShowDice(false);
  };

  return (
    <main className="flex-grow bg-transparent flex flex-col justify-center items-center text-white">
      {
        showDice ? (
          <Dice rolling={rolling} number={number} />
        ) : (
          <Card />
        )
      }
      <Footer onRollDice={rollDice} showCard={hideDice} />
    </main>
  );
}

import React, { useState, useEffect } from 'react';
import { Dice } from '../Dice/Dice';
import { Footer } from '../Footer/Footer';
import { Card } from '../Card/Card';
import { getCards } from "../../services/data"
import { Shop } from '../Shop/Shop';
import { Header } from '../Header/Header';
import { getItems } from '../../services/itemsData';

export function Body() {
  const [rolling, setRolling] = useState(false);
  const [shopState, setShopState] = useState(false);
  const [number, setNumber] = useState(1);
  const [showDice, setShowDice] = useState(true);
  const [cards, setCards] = useState([])
  const [array, setArray] = useState([])
  const [randomCard, setRandomCard] = useState(null);

  const rollDice = () => {
    setShowDice(true);
    setRolling(true);
    setTimeout(() => {
      const newNumber = Math.floor(Math.random() * 6) + 1;
      setNumber(newNumber);
      setRolling(false);
    }, 1000);
  };

  const hideDice = () => {
    setShowDice(false);
  };

  useEffect(() => {
    getData()
  }, [])

  const getRandomCard = () => {
    hideDice();
    const fortuneCards = cards.filter(card => card.type === "Random");
    if (fortuneCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * fortuneCards.length);
      setRandomCard(fortuneCards[randomIndex]); 
    }
  };

  const goodone = () => {
    hideDice();
    const fortuneCards = cards.filter(card => card.type === "Fortune");
    if (fortuneCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * fortuneCards.length);
      setRandomCard(fortuneCards[randomIndex]); 
    }
  };

  const badone = () => {
    hideDice();
    const fortuneCards = cards.filter(card => card.type === "Misfortune");
    if (fortuneCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * fortuneCards.length);
      setRandomCard(fortuneCards[randomIndex]); 
    }
  };

  const challenge = () => {
    hideDice();
    const fortuneCards = cards.filter(card => card.type === "Challenge");
    if (fortuneCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * fortuneCards.length);
      setRandomCard(fortuneCards[randomIndex]); 
    }
  };

  const getData = async () => {
      setCards(await getCards())
      setArray(await getItems())
  }

  const actualShop = (state) =>{
    setShopState(state)
  }

  return (
    <main className="flex-grow bg-transparent flex flex-col justify-center items-center text-white">
      <Header />
      {
        showDice 
          ? (<Dice rolling={rolling} number={number} />) 
          : (<Card name={randomCard.name} wtdoes={randomCard.wtdoes}  type={randomCard.type} />)
      }
      { shopState &&
        <Shop closeShop={()=>actualShop(false)} array={array}/>
      }
      <Footer onRollDice={rollDice} showCard={getRandomCard} goodone={goodone} badone={badone} challenge={challenge} openShop={()=>actualShop(true)}/>
    </main>
  );
}

import React from 'react';
import { Item } from '../Item/Item';

export function Shop({ closeShop, array }) {
  return (
    <div className="fixed z-10  w-full h-full flex justify-center items-center">

      <div className="absolute z-10 w-full h-full bg-black opacity-80" onClick={closeShop}> </div>

      {/* Ventana emergente */}
      <div className="bg-slate-700 p-8 rounded-lg shadow-lg z-20 w-6/12 h-4/6 flex flex-col items-center ">
        <button onClick={closeShop} className="self-end">X</button>
        <p className='text-white text-lg font-bold mb-10'>Hi little little thief! Here I have some articles that may interest you.</p>

        <div className='flex flex-col h-full w-full items-center max-h-full overflow-auto'>
        {array.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer w-full">
                <Item image={item.image} text={item.text} value={item.value}/>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}

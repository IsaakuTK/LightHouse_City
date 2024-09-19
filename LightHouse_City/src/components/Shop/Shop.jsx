import React from 'react';
import { Item } from '../Item/Item';

export function Shop({ closeShop, array }) {
  return (
    <div className="fixed z-10 inset-0 flex justify-center items-center">

      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-black opacity-80" onClick={closeShop}></div>

      {/* Ventana emergente */}
      <div className="relative bg-slate-700 p-4 md:p-8 rounded-lg shadow-lg z-20 w-11/12 md:w-8/12 lg:w-6/12 h-5/6 md:h-4/6 flex flex-col items-center">
        <button onClick={closeShop} className="self-end text-white">X</button>
        <p className="text-white text-lg font-bold mb-4 md:mb-10 text-center">
          Hi little thief! Here I have some articles that may interest you.
        </p>

        {/* Lista de artículos */}
        <div className="flex flex-col h-full w-full items-center max-h-full overflow-auto">
          {array.map((item, index) => (
            <div key={index} className="px-2 md:px-4 py-2 cursor-pointer w-full">
              <Item image={item.image} text={item.text} value={item.value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

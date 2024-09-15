import React from 'react';

export function Shop({ closeShop }) {
  return (
    <div className="fixed z-10  w-full h-full flex justify-center items-center">

      <div className="absolute z-10 w-full h-full bg-black opacity-50"onClick={closeShop}> </div>

      {/* Ventana emergente */}
      <div className="relative bg-sky-950 p-8 rounded-lg shadow-lg z-20 w-6/12 h-4/6 flex flex-col items-center">
        <button onClick={()=>closeShop} className="self-end">X</button>
        <p className='text-white'>Hi little little thief! Here I have some articles that may interest you.</p>

        <div>

        </div>

      </div>
    </div>
  );
}

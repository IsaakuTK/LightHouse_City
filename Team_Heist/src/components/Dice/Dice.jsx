import React from 'react';

export function Dice({ rolling, number }) {
    return (
      <div className="flex flex-col items-center">
        <div className={`dice w-20 h-20 flex justify-center items-center text-white bg-[#EFE8C9] rounded ${rolling ? 'animate-spin' : ''}`}>
          <p className="text-4xl text-black">{number}</p>
        </div>
      </div>
    );
  }
import React from 'react'

export function Button({title, onClick, className}){
    return (
        <button
            className={`border-none rounded-3xl bg-white  text-black w-fit px-10 hover:text-slate-500 h-fit font-semibold ${className}`}
            value={title}
            onClick={onClick}
        >
        {title}
        </button>
    )
}
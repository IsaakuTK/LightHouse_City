import React from 'react'

export function Button({title, onClick, className}){
    return (
        <button
            className={`border-none rounded-3xl bg-gradient-to-r from-[#EFE8C9] to-violet-200 text-black w-fit px-10 hover:text-white h-fit font-semibold ${className}`}
            value={title}
            onClick={onClick}
        >
        {title}
        </button>
    )
}
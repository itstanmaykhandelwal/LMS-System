"use client"
import React, { useState } from 'react'

const CategoryFilter = () => {
    const [activeIndex,setActiveIndex] = useState(0)
    const filterOptions = [
        {
            id: 1,
            name: 'All',
            value: 'all'
        },
        {
            id: 2,
            name: 'React Js',
            value: 'react'
        },
        {
            id: 3,
            name: 'Next Js',
            value: 'nextjs'
        },
        {
            id: 4,
            name: 'Tailwind Css',
            value: 'tailwindcss',
        },
        {
            id: 5,
            name: 'Firebase',
            value: 'firebase'
        }
    ]
    return (
        <div className='flex gap-5'>
            {filterOptions.map((item, index) => (
                <button onClick={() => setActiveIndex(index)} key={index} className={`border p-2 px-4 text-[12px] sm:text-[10px] rounded-md hover:border-blue-800 font-semibold hover:bg-gray-50 ${activeIndex==index?'border-blue-800 bg-blue-50 text-blue':null}`}>
                    <h2>{item.name}</h2>
                </button>
            ))}
        </div>
    )
}

export default CategoryFilter
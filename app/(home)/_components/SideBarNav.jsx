"use client"
import { Layout, Mail, Search, Shield } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const SideBarNav = () => {
    const menuList=[
        {
            id:1,
            icon:Search,
            name:'Browse',
            path:'/brose'
        },
        {
            id:2,
            icon:Layout,
            name:'Dashboard',
            path:'/dashboard'
        },
        {
            id:3,
            icon:Shield,
            name:'Upgarde',
            path:'/upgrade'
        },
        {
            id:4,
            icon:Mail,
            name:'Newsletter',
            path:'/newsletter'
        },
    ]

    const [activeIndex,setActiveIndex] = useState(0)
    return (
        <div className='h-full bg-white border-r flex flex-col overflow-y-auto shadow-md'>
            <div className='p-5 border-b z-50'>
                <Image
                    src="/lmslogo.png"
                    alt="logo"
                    width={140}
                    height={100}
                />
            </div>
            <div className="flex flex-col">
            {menuList.map((item,index) =>(
                <div key={index} className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer ${activeIndex==index?'bg-blue-50 text-blue-800':null}`} onClick={() => setActiveIndex(index)}>
                    <item.icon/>
                    <h2>{item.name}</h2>
                </div>
            ))}
            </div>
        </div>
    )
}

export default SideBarNav
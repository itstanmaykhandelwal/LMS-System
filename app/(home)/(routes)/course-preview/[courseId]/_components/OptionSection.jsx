import Image from 'next/image'
import React from 'react'

const OptionSection = () => {
    const optionList = [
        {
            id:1,
            name:'Github',
            icon:'/github-sign.png'
        },
        {
            id:2,
            name:'Demo',
            icon:'/demo.png'
        },
        {
            id:3,
            name:'Youtube',
            icon:'/public/lms.svg'
        },
    ]
  return (
    <div className='flex items-center gap-3'>
        {optionList.map((option,index) => (
            <div className='p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer' key={index}>
                {/* <Image src={option.icon} alt="icon" width={30} height={30} /> */}
                <h2 className='text-[14px] text-gray-500'>{option.name}</h2>
            </div>
        ))}
    </div>
  )
}

export default OptionSection
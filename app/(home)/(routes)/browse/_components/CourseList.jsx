import { Book, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseList = ({ courses }) => {
    return (
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {courses.map((course, index) => (
                <Link key={index} href={"/course-preview/" + course.id}>
                    <div key={index} className='border rounded-lg p-2 cursor-pointer hover:border-blue-300'>
                        <Image src={course.banner.url} alt={course.name} width={1000} height={500} className='rounded-lg' />
                        <div className='mt-2'>
                            <h2 className='text-[18px] md:text-[16px] font-medium'>{course.name}</h2>
                            <h2 className='text-gray-400 text-[13px]'>{course.author}</h2>
                            {course.totalChapters ? <div className='flex items-center gap-2 mt-2'>
                                <Book className='h-6 w-6 text-blue-600 rounded-full bg-blue-100 p-1' />
                                <h2 className='text-[12px] text-gray-400'>{course.totalChapters}</h2>
                            </div> : null}
                            {course.youtubeUrl ? <div className='flex items-center gap-2 mt-2'>
                                <Video className='h-6 w-6 text-blue-600 rounded-full bg-blue-100 p-1' />
                                <h2 className='text-[12px] text-gray-400'>{course.totalChapters}</h2>
                            </div> : null}
                        </div>
                        <h2 className='mt-2 text-[14px]'>{course.free ? 'Free' : 'Paid'}</h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CourseList
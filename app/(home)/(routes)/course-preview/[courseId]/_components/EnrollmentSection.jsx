import React from 'react'

const EnrollmentSection = ({ courseDetail }) => {
    return (
        <div>
            {courseDetail.free ? <div className='mt-5 border rounded-lg p-2 text-center'>
                <h2 className='text-gray-500'>Learn and Build Project,Access Source Code and Track Your Process for Free. </h2>
                <button className='p-2 bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700'>Enroll Now</button>
            </div>
                : <div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500'>Buy This Course, Source code and Track progress. </h2>
                    <button className='p-2 bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700'>Buy Course for ₹.100</button>
                </div>}

                <div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500'>Buy Monthly membership and get access to all Source code and Track progress. </h2>
                    <button className='p-2 bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700'>Buy Membership ₹.50/Month</button>
                </div>
        </div>
    )
}

export default EnrollmentSection
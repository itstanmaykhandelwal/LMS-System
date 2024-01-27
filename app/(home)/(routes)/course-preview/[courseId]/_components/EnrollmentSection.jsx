import React from 'react'
import { EnrollCourse, PublishCourse } from '../../../../../_services'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const EnrollmentSection = ({ courseDetail, userCourse }) => {
    const { user } = useUser()
    const router = useRouter();
    const enrollCourse = async () => {
        if (user) {
            await EnrollCourse(courseDetail.id, user.primaryEmailAddress.emailAddress)
                .then(async (res) => {
                    console.log("EnrollCourse==", res);
                    if (res) {
                        await PublishCourse(res?.createUserEnrollCourse?.id)
                            .then(result => {
                                console.log(result);
                                if(result)
                                {
                                    router.push('/view-course/'+courseDetail.id)
                                }
                            })
                    }
                })
        }
        else {
            router.push('/sign-in');
        }
    }
    return (
        <div>
            {userCourse?.courseId ?
                <div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500'>Continue to Build Project,Access Source Code and Track Your Process for Free. </h2>
                    <button className='p-2 bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700' onClick={() => router.push('/view-course/'+courseDetail.id)}>Continue</button>
                </div> : null
            }
            {courseDetail.free&&!userCourse?.courseId?
                <div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500'>Learn and Build Project,Access Source Code and Track Your Process for Free. </h2>
                    <button className='p-2 bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700' onClick={() => enrollCourse()}>Enroll Now</button>
                </div>
                : !userCourse?.courseId?<div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500'>Buy This Course, Source code and Track progress. </h2>
                    <button className='p-2 bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700'>Buy Course for ₹.100</button>
                </div> : null}

            <div className='mt-5 border rounded-lg p-2 text-center'>
                <h2 className='text-gray-500'>Buy Monthly membership and get access to all Source code and Track progress. </h2>
                <button className='p-2 bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700'>Buy Membership ₹.50/Month</button>
            </div>
        </div>
    )
}

export default EnrollmentSection
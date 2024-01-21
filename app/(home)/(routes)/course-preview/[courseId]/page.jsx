"use client"
import React, { useEffect, useState } from 'react'
import { getCourseById } from '../../../../_services';
import VideoPlayer from './_components/VideoPlayer';

const CoursePreview = ({ params }) => {
    const [courseDetails, setCourseDetails] = useState([]);
    // useEffect(() => {
    //     console.log(params.courseId)
    //     params.courseId ? getCourse(params.courseId) : null;
    // }, [])

    const getCourse = () => {
        getCourseById(params.courseId).then(res => {
            console.log(res);
            setCourseDetails(res.courseLists);
        })
    }
    useEffect(() => {
        console.log(params.courseId);
        params.courseId && getCourse(); // Call getCourse only if params.courseId exists
    }, [params.courseId]);
    return courseDetails?.name && (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='col-span-2'>
                    <VideoPlayer 
                    videoUrl={courseDetails?.chapter[0]?.video.url} />

                </div>
                <div>
                    Enroll Option
                </div>
            </div>
        </div>
    )
}

export default CoursePreview
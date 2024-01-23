"use client"
import React, { useEffect, useState } from 'react'
import { getCourseById } from '../../../../_services';
import VideoPlayer from './_components/VideoPlayer';
import CourseDetails from './_components/CourseDetails';
import OptionSection from './_components/OptionSection';
import EnrollmentSection from './_components/EnrollmentSection';

const CoursePreview = ({ params }) => {
    const [courseDetail, setCourseDetails] = useState([]);
    useEffect(() => {
        console.log(params.courseId)
        params.courseId ? getCourse(params.courseId) : null;
    }, [])

    const getCourse = () => {
        getCourseById(params.courseId).then(res => {
            console.log(res);
            setCourseDetails(res.courseList);
        })
    }
    // console.log(courseDetails.chapter && courseDetails.chapter.length > 0 ? courseDetails.chapter[0]?.video.url : "No video URL available");


    return courseDetail?.name && (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='col-span-2'>
                    {courseDetail?.chapter[0]?<VideoPlayer 
                    videoUrl={courseDetail?.chapter[0]?.video.url} /> :null}
                    <CourseDetails courseDetail={courseDetail}/>
                </div>
                <div className='mt-5 md:mt-0'>
                    <OptionSection/>
                    <EnrollmentSection courseDetail={courseDetail}/>
                </div>
            </div>
        </div>
    )
}

export default CoursePreview
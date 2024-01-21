"use client"
import React, { useEffect, useState } from 'react'
import CategoryFilter from './_components/CategoryFilter';
import CourseList from './_components/CourseList';
import {getCourseList} from '../../../_services/index';

const Browse = () => {

    const [courses,setCourses] = useState([]);
    useEffect(() => {
        getCourses();
    },[])
    const getCourses = () =>{
        getCourseList().then(res=>{
            console.log(res)
            setCourses(res.courseLists);
        }) 
    }

    return (
        <div>
            <CategoryFilter />
            {courses? <CourseList courses={courses}/>:null}
        </div>
    )
}

export default Browse
import React from 'react';
import { Course } from './interfaces'

type CourseItemProps = {
    course: Course,
};

const CourseItem = (props: CourseItemProps)=>{
    const course:Course = props.course;

    return (
        <li className="Course">{course.number} - {course.title}</li>
    );
}
export default CourseItem;
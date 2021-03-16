import * as React from 'react';
import MyCourses from '../../../components/course/MyCourses/MyCourses';

interface Props {
    idInstructor: string;
    courses: any;
    enrollments: any;
}

const MyCoursesContainer = ({ idInstructor, courses, enrollments }: Props) => {
    return <MyCourses idInstructor={idInstructor} courses={courses} enrollments={enrollments} />;
};

export default MyCoursesContainer;

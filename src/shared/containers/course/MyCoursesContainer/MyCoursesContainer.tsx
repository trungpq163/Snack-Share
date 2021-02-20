import * as React from 'react';

import MyCourses from 'components/course/MyCourses/MyCourses';

interface Props {
    courses: any;
    enrollments?: any;
}

const MyCoursesContainer = ({ courses, enrollments }: Props) => {
    return <MyCourses courses={courses} enrollments={enrollments?.enrollments} />;
};

export default MyCoursesContainer;

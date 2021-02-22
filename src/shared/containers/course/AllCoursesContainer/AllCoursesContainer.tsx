import * as React from 'react';

import AllCourses from 'components/course/AllCourses/AllCourses';

const AllCoursesContainer = ({ courses, enrollments }: any) => {
    return <AllCourses courses={courses} enrollments={enrollments} />;
};

export default AllCoursesContainer;

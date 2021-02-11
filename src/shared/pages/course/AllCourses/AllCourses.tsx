import * as React from 'react';

import { useSelector } from 'react-redux';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import AllCoursesContainer from 'containers/course/AllCoursesContainer/AllCoursesContainer';

import { getCourses } from 'store/courses/selectors';

const AllCourses = () => {
    const courses = useSelector(getCourses);
    return (
        <>
            <PageHeader title="Courses" />
            <AllCoursesContainer courses={courses.courses} loading={courses.loading} />
        </>
    );
};

export default AllCourses;

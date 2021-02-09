import * as React from 'react';

import { useSelector } from 'react-redux';
import PageHeader from 'components/PageHeader/PageHeader';
import AllCoursesContainer from 'containers/AllCoursesContainer/AllCoursesContainer';

import { getCourses } from 'store/courses/selectors';

const AllCourses = () => {
    const courses = useSelector(getCourses);
    console.log('courses', courses);
    return (
        <>
            <PageHeader title="Courses" />
            <AllCoursesContainer />
        </>
    );
};

export default AllCourses;

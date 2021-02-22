import * as React from 'react';

import { useSelector } from 'react-redux';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import AllCoursesContainer from 'containers/course/AllCoursesContainer/AllCoursesContainer';

import { getCourses } from 'store/courses/selectors';
import { getEnrollments } from 'store/enrollment/selectors';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const AllCourses = () => {
    const courses = useSelector(getCourses);
    const enrollments = useSelector(getEnrollments);
    return (
        <>
            <PageHeader title="Courses" />
            {courses.loading || enrollments.loading ? (
                <CircleLoader />
            ) : (
                <AllCoursesContainer
                    courses={courses.courses}
                    enrollments={enrollments?.enrollments}
                />
            )}
        </>
    );
};

export default AllCourses;

import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import AllCoursesContainer from 'containers/course/AllCoursesContainer/AllCoursesContainer';

import { getCourses } from 'store/courses/selectors';
import { getEnrollments } from 'store/enrollment/selectors';
import { getAllCourses } from 'store/courses/effects';
import { getAllEnrollments } from 'store/enrollment/effects';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const AllCourses = () => {
    const dispatch = useDispatch();
    const courses = useSelector(getCourses);
    const enrollments = useSelector(getEnrollments);

    React.useEffect(() => {
        dispatch(getAllCourses());
        dispatch(getAllEnrollments());
    }, [dispatch]);

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
